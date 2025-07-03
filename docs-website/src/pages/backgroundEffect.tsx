import React, { useRef, useEffect } from "react";
import "../css/custom.css";

const BgEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      if (canvas.clientWidth === canvas.width && canvas.clientHeight === canvas.height)
        return; // No resize needed
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const gl = canvas.getContext("webgl2");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    const vertexShaderSource = `#version 300 es

      in vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `#version 300 es

      #define Q_NOISE_SEED 43758.5453123
      #define Q_LETTER_DENSITY 32.0
      #define Q_LETTER_COUNT 8.0
      #define Q_LETTER_BUFFER 12.0
      #define Q_TEXT_LENGTH 30.0
      #define Q_SEED 42.0

      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform sampler2D letters_tex;

      out vec4 fragColor;

      float q_rand(inout float seed, float n){
          return fract(sin(seed++*n)*Q_NOISE_SEED);
      }

      float hq_rand(inout float seed, float n){
          float sub_noise = q_rand(seed, n) - 0.5f;
          return fract(q_rand(seed, n) + sub_noise / 4.0 + sub_noise / 16.0 + sub_noise / 64.0);
      }

      vec4 sampleText(float letter, float blur, vec2 uv){
          letter = mod(letter, 8.0);
          vec2 sampleUV = (vec2(blur, letter) + uv*1.0/2.0 + 1.0/4.0) / vec2(2.0, 8.0);
          return texture(letters_tex, vec2(sampleUV.x, 1.0 - sampleUV.y));
      }

      vec2 getLetter(vec2 uv){
          float seed = Q_SEED;
          vec2 uv_i = floor(uv);
          vec2 uv_f = fract(uv);

          float textOffset = floor(hq_rand(seed, uv_i.x) * Q_LETTER_BUFFER);
          float timeMult = (1.0 + 0.5 * hq_rand(seed, uv_i.x));
          
          float offset = hq_rand(seed, uv_i.x) + fract(iTime * timeMult / Q_TEXT_LENGTH);
          float col = fract(1.0 - uv_i.y / Q_TEXT_LENGTH - offset);
          float section = floor((uv_i.y + textOffset) / Q_LETTER_BUFFER);
          
          float buffOffset = floor(hq_rand(seed, uv_i.x + 123.0 * section) * (Q_LETTER_BUFFER - Q_LETTER_COUNT));
          
          float letter = mod(uv_i.y + textOffset, Q_LETTER_BUFFER) - buffOffset;
          letter = mod(clamp(letter, 0.0, Q_LETTER_COUNT), Q_LETTER_COUNT);
          return vec2(letter, col);
      }

      float alphaAdjust(float a){return 1.0 - pow(a - 1.0, 4.0);}

      vec4 sampleBlurText(vec2 uv){
          vec2 offset_tr = vec2(-0.5, -0.5);
          vec2 offset_tl = vec2( 0.5, -0.5);
          vec2 offset_br = vec2(-0.5,  0.5);
          vec2 offset_bl = vec2( 0.5,  0.5);
          
          vec2 letter_tr = getLetter(uv + offset_tr);
          vec2 letter_tl = getLetter(uv + offset_tl);
          vec2 letter_br = getLetter(uv + offset_br);
          vec2 letter_bl = getLetter(uv + offset_bl);
          vec4 col_tr = sampleText(letter_tr.x, 1.0, fract(uv + offset_tr) - offset_tr) * letter_tr.y * letter_tr.y;
          vec4 col_tl = sampleText(letter_tl.x, 1.0, fract(uv + offset_tl) - offset_tl) * letter_tl.y * letter_tl.y;
          vec4 col_br = sampleText(letter_br.x, 1.0, fract(uv + offset_br) - offset_br) * letter_br.y * letter_br.y;
          vec4 col_bl = sampleText(letter_bl.x, 1.0, fract(uv + offset_bl) - offset_bl) * letter_bl.y * letter_bl.y;
          return vec4(col_tr.rgb * alphaAdjust(col_tr.a)
                    + col_tl.rgb * alphaAdjust(col_tl.a)
                    + col_br.rgb * alphaAdjust(col_br.a)
                    + col_bl.rgb * alphaAdjust(col_bl.a), 1.0);
      }

      vec3 getFullText(vec2 uv){
          vec2 letter = getLetter(uv);
          vec4 letterCol = sampleText(letter.x, 0.0, fract(uv)) * letter.y * vec4(0.0, 0.8, 0.0, 1.0);
          vec4 letterBlurCol = sampleBlurText(uv) * vec4(0.0, 0.5, 3.0, 1.0);
          
          return letterCol.rgb * letterCol.a + letterBlurCol.rgb * letterBlurCol.a;
      }


      vec4 profileBG(in vec2 fragCoord){
          vec2 uv = (fragCoord - vec2(0.0, iResolution.y))/1000.0;
          vec2 textUV = uv * Q_LETTER_DENSITY * 2.0;
          
          vec3 color = vec3(0.0, 0.1, 0.0);
          color += getFullText(textUV);
          
          return vec4(color, 1.0f);
      }

      void mainImage( out vec4 fragColor, in vec2 fragCoord ){
          fragColor = profileBG(fragCoord);
      }

      void main() {
          mainImage(fragColor, gl_FragCoord.xy);
      }
    `;

    const compileShader = (
      source: string,
      type: number
    ): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(
      fragmentShaderSource,
      gl.FRAGMENT_SHADER
    );
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
    ]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const lettersTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, lettersTexture);
    const pixel = new Uint8Array([0, 0, 255, 255]); // opaque blue
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, pixel);

    const lettersTex = new Image();
    lettersTex.src = "./img/BgLetters.png";
    lettersTex.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, lettersTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, lettersTex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    };

    const iResolutionLocation = gl.getUniformLocation(program, "iResolution");
    const iTimeLocation = gl.getUniformLocation(program, "iTime");
    const lettersTexLocation = gl.getUniformLocation(program, "letters_tex");

    const startTime = performance.now();
    const render = () => {
      resizeCanvas();
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
      const currentTime = performance.now();
      gl.uniform1f(iTimeLocation, (currentTime - startTime) / 1000.0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, lettersTexture);
      gl.uniform1i(lettersTexLocation, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  });

  return <canvas ref={canvasRef} className="bgeffect-container bgeffect-linktree" />;
};

export default BgEffect;
