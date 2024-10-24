"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[297],{2388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(4848),s=n(8453);const a={sidebar_position:1},i="Avatar Setup",o={id:"particles/setup-avatar",title:"Avatar Setup",description:"First of all, make sure to have a VRChat Unity Project with the latest SDK installed.",source:"@site/docs/particles/setup-avatar.md",sourceDirName:"particles",slug:"/particles/setup-avatar",permalink:"/QuantumDocs/docs/particles/setup-avatar",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"Quantum Particles",permalink:"/QuantumDocs/docs/particles/"},next:{title:"Troubleshooting & FAQ",permalink:"/QuantumDocs/docs/particles/troubleshooting"}},l={},c=[{value:"VRCFury Setup",id:"vrcfury-setup",level:2},{value:"Default Setup",id:"default-setup",level:3},{value:"Preset Setup",id:"preset-setup",level:3},{value:"Manual Setup",id:"manual-setup",level:2},{value:"First Part - Avatar Setup",id:"first-part---avatar-setup",level:3},{value:"Second Part - AV3 Setup",id:"second-part---av3-setup",level:3},{value:"Basic Setup",id:"basic-setup",level:2},{value:"Other Guides",id:"other-guides",level:2},{value:"Change Particle Amount",id:"change-particle-amount",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"avatar-setup",children:"Avatar Setup"})}),"\n",(0,r.jsxs)(t.p,{children:["First of all, make sure to have a VRChat Unity Project with the latest SDK installed.\r\nAfter you imported the Quantum Particles package, all the Prefabs can be found in the ",(0,r.jsx)(t.code,{children:"Quantum\\Particles\\Prefabs"})," folder."]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["The Quantum Particles are not compatible with the older GPU Particle package or any other repackage like JustSleightly's ",(0,r.jsx)(t.code,{children:"ezGPUParticlesv1.5.1"})," or Bananasaurus Rex's ",(0,r.jsx)(t.code,{children:"Brexs_av3.0_GPU_Particles_Setup"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:"Depending on what setup system you want to use, continue with the corresponding section below."}),"\n",(0,r.jsx)(t.h2,{id:"vrcfury-setup",children:"VRCFury Setup"}),"\n",(0,r.jsxs)(t.p,{children:["Make sure to add ",(0,r.jsx)(t.a,{href:"https://vrcfury.com/download",children:"VRCFury"})," to your project."]}),"\n",(0,r.jsx)(t.h3,{id:"default-setup",children:"Default Setup"}),"\n",(0,r.jsx)(t.p,{children:'Drag the "QP VRCFury Setup" prefab into your scene and then onto your Avatar\'s root object, FRCFury will automatically handle the rest.'}),"\n",(0,r.jsx)(t.h3,{id:"preset-setup",children:"Preset Setup"}),"\n",(0,r.jsxs)(t.p,{children:['If you want to use any combination of Presets, drag the "QP Preset Base" prefab from the ',(0,r.jsx)(t.code,{children:"Presets"}),' Folder into your scene and then onto your Avatar\'s root object.\r\nNext, open up the "QP Preset Base" prefab and drag the preset you want to use (located in the same folder as the base) onto the "Quantum Particles" GameObject.']}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.p,{children:["A quick demonstration of these two setups can be seen in the video below:\r\n",(0,r.jsx)(t.a,{href:"https://youtu.be/qiwn_u5nTME",children:"https://youtu.be/qiwn_u5nTME"})]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["By default, the reference points for the particles are attached to your left and right index fingers, if you want to change this you'll have to unpack the prefab and edit the ",(0,r.jsx)(t.code,{children:"Link to (Avatar):"})," setting in the VRCFury scripts."]})}),"\n",(0,r.jsx)(t.h2,{id:"manual-setup",children:"Manual Setup"}),"\n",(0,r.jsx)(t.h3,{id:"first-part---avatar-setup",children:"First Part - Avatar Setup"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Drag ",(0,r.jsx)(t.code,{children:"QP Avatar Setup"})," prefab into your Unity scene (for base scaling)."]}),"\n",(0,r.jsxs)(t.li,{children:["Right click ",(0,r.jsx)(t.code,{children:"QP Avatar Setup"})," in your hierarchy and click ",(0,r.jsx)(t.strong,{children:"Unpack Prefab"})]}),"\n",(0,r.jsxs)(t.li,{children:["Drag ",(0,r.jsx)(t.code,{children:"Quantum Particles"})," onto your avatar's root object."]}),"\n",(0,r.jsxs)(t.li,{children:["Drag all the GameObjects inside ",(0,r.jsx)(t.code,{children:">>>MOVE TO ARMATURE BONES<<<"})," to their corresponding bones on your armature (Left Hand, Right Hand, Neck, Head).","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"You can also move the Left/Right Hand GameObjects to any other bone you prefer, like the Left/Right Index Finger."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Reset the ",(0,r.jsx)(t.strong,{children:"Transform"})," components of the GameObjects from the previous step by clicking the settings cog in the top right of the Transform component in your Inspector and clicking ",(0,r.jsx)(t.strong,{children:"Reset"})]}),"\n",(0,r.jsx)(t.li,{children:"(Optional) Position the Left/Right Hand Anchors to your preference."}),"\n",(0,r.jsxs)(t.li,{children:["Select ",(0,r.jsx)(t.code,{children:"Desktop Anchor"})," under ",(0,r.jsx)(t.code,{children:"[Neck] Proxy"})," and position it to your preference (typically at eye/viewpoint level and in front of you at about a distance equal to your arm-span)"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"second-part---av3-setup",children:"Second Part - AV3 Setup"}),"\n",(0,r.jsxs)(t.p,{children:["It is advised to use something like ",(0,r.jsx)(t.a,{href:"https://github.com/VRLabs/Avatars-3.0-Manager",children:"AV3Manager"})," to merge the ",(0,r.jsx)(t.code,{children:"Quantum Particles Parameters"})," and ",(0,r.jsx)(t.code,{children:"Quantum Particles FX"})," Animator Controller found at ",(0,r.jsx)(t.code,{children:"Quantum/Particles/Resources/Expressions"})," with your Avatars Animator Controller and Parameters.\r\nFinally, add a new sub-menu control to your avatar's Menu file and drag in ",(0,r.jsx)(t.code,{children:"Quantum Particles Menu"})," as the target sub-menu."]}),"\n",(0,r.jsx)(t.p,{children:"Tutorial Video coming soon!"}),"\n",(0,r.jsx)(t.h2,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,r.jsxs)(t.p,{children:["If you want to create your own Setup from scratch or plan to use the particles in a different project, like a VRChat World, the package contains a prefab simply called ",(0,r.jsx)(t.code,{children:"QuantumParticles"})," which contains the basic setup for the particles.\r\nThis Prefab contains no animations or additional components or scripts, only what is strictly necessary to get the particles working."]}),"\n",(0,r.jsx)(t.h2,{id:"other-guides",children:"Other Guides"}),"\n",(0,r.jsx)(t.h3,{id:"change-particle-amount",children:"Change Particle Amount"}),"\n",(0,r.jsxs)(t.p,{children:["Keep in mind that for technical reasons, the amount of particles cannot be adjusted freely.\r\nThis is a result of the particle data being stored in a texture, and the amount of particles being determined by the area of this texture.\r\nThe amount of particles is given by the formula ",(0,r.jsx)(t.code,{children:"Particle Amount = Resolution X * Resolution Y / 2"}),".\r\nIdeally, the resolution should be a power of 2, like 256x256, 512x512, 1024x1024, etc.\r\nOther resolutions might work, but could lead to unexpected results."]}),"\n",(0,r.jsx)(t.p,{children:"To change the Particle Amount, you will need to adjust several things in the Quantum Particles setup."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["In the ",(0,r.jsx)(t.code,{children:"Particles"})," GameObject (usually located inside the ",(0,r.jsx)(t.code,{children:"Quantum Particles"})," GameObject), change the mesh to one with the desired amount of vertices.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Appropriate meshes can be found in the ",(0,r.jsx)(t.code,{children:"Quantum/Particles/Resources/Meshes"})," folder. Or generate your own mesh by going to ",(0,r.jsx)(t.code,{children:"Tools > Quantum > Particles > Particle Mesh"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Replace the ",(0,r.jsx)(t.a,{href:"./textures#render-texture",children:"Render Textures"})," used in the Cameras and the Simulator Materials.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.a,{href:"./textures#render-texture",children:"Render Textures"})," can be found in the ",(0,r.jsx)(t.code,{children:"Camera"})," Components, inside the slot ",(0,r.jsx)(t.code,{children:"Target Texture"}),", and for the Simulator Materials under ",(0,r.jsx)(t.code,{children:"Base Settings > Input Texture"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Keep in mind that the Material needs a ",(0,r.jsx)(t.a,{href:"./textures#render-texture",children:"Render Textures"})," of the ",(0,r.jsx)(t.strong,{children:"SAME"})," side (Left/Right) as the Simulator it is used for, while the Camera needs the ",(0,r.jsx)(t.strong,{children:"OPPOSITE"})," side as the Simulator it is inside."]}),"\n",(0,r.jsxs)(t.li,{children:["Appropriate Render Textures can be found in the ",(0,r.jsx)(t.code,{children:"Quantum/Particles/Resources/RenderTextures"})," folder."]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(6540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);