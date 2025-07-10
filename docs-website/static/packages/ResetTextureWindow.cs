#if UNITY_EDITOR
using UnityEditor;
using UnityEngine;

public class ResetTextures : EditorWindow{
    string targetName = "CustomResetTexture";
	int resolution = 512;
	int detail = 10;
	bool colorEncoding;
	Texture2D inputTex;
	Mesh inputMesh;

    [MenuItem("GameObject/Reset Textures")]
    public static void ShowWindow(){
        EditorWindow.GetWindow(typeof(ResetTextures));
    }

    void OnGUI()
    {
        GUILayout.Label ("General Settings", EditorStyles.boldLabel);
		resolution = EditorGUILayout.IntField ("Resolution", resolution);
        GUILayout.Label ("Particle Amount: " + resolution*resolution/2);
		targetName = EditorGUILayout.TextField ("Name", targetName);
        GUILayout.Label ("Will be saved as \n\"Assets/GPU Particles/Resources/" + targetName + ".asset\"");

		/*-----IMAGE CREATION-----*/
		GUILayout.Label ("\nCreate with Image", EditorStyles.boldLabel);
		inputTex = (Texture2D)EditorGUILayout.ObjectField(inputTex, typeof(Texture2D));
		colorEncoding = EditorGUILayout.Toggle ("Encode Colors", colorEncoding);
		if(!colorEncoding){
			detail = EditorGUILayout.IntField ("Detail", detail);
		}

		if (GUILayout.Button("Create")){
			if(colorEncoding)
				CreateResetTextureImageColored(inputTex, resolution, targetName);
			else
				CreateResetTextureImage(inputTex, resolution, targetName, detail);
        }

		/*-----MODEL CREATION-----*/
		GUILayout.Label ("\nCreate with Model", EditorStyles.boldLabel);
		inputMesh = (Mesh)EditorGUILayout.ObjectField(inputMesh, typeof(Mesh));

		if (GUILayout.Button("Create")){
			CreateResetModelTexture(inputMesh, resolution, targetName);
        }
    }

	static void CreateResetTextureImage(Texture2D source, int resolution, string name, int maxTries){
		var texture = new Texture2D(resolution, resolution, TextureFormat.RGBAFloat, false, true);
		texture.filterMode = FilterMode.Point;
		float w = source.width, h = source.height;
		if(w > h){
			h /= w;
			w = 1.0f;
		}else{
			w /= h;
			h = 1.0f;
		}
		int tries = 0;

		for(int y = 0; y < resolution/2; y++){
			for(int x = 0; x < resolution; x++){
				Vector3 pos = new Vector3(UnityEngine.Random.Range(0.0f, 1.0f), UnityEngine.Random.Range(0.0f, 1.0f), UnityEngine.Random.Range(0.0f, 1.0f));
				if(source.GetPixel((int)(pos.x*source.width), (int)(pos.y*source.height)).grayscale > pos.z || tries > maxTries){
					texture.SetPixel(x, y, new Color((pos.x-0.5f)*w, (pos.y-0.5f)*h, 0.0f, 1.0f));
					tries = 0;
				}else{
					x--;
					tries++;
				}
			}
		}

		for(int y = resolution/2; y < resolution; y++){
			for(int x = 0; x < resolution; x++){
				texture.SetPixel(x, y, new Color(0.0f, 0.0f, 0.0f, 1.0f));
			}
		}

		texture.Apply();

		AssetDatabase.CreateAsset(texture, "Assets/GPU Particles/Resources/" + name + ".asset");
	}

	static void CreateResetTextureImageColored(Texture2D source, int resolution, string name){
		var texture = new Texture2D(resolution, resolution, TextureFormat.RGBAFloat, false, true);
		texture.filterMode = FilterMode.Point;
		float w = source.width, h = source.height;
		if(w > h){
			h /= w;
			w = 1.0f;
		}else{
			w /= h;
			h = 1.0f;
		}
		for(int y = 0; y < resolution/2; y++){
			for(int x = 0; x < resolution; x++){
				texture.SetPixel(x, y, new Color((((float)x)/resolution-0.5f)*w, (((float)y)/(resolution/2)-0.5f)*h, 0.0f, 1.0f));
				texture.SetPixel(x, y+resolution/2, new Color(0.0f, 0.0f, 0.0f, 1.0f));
			}
		}

		texture.Apply();

		AssetDatabase.CreateAsset(texture, "Assets/GPU Particles/Resources/" + name + ".asset");
	}

	static void CreateResetModelTexture(Mesh source, int resolution, string name){
		Texture2D tex = new Texture2D(resolution, resolution, TextureFormat.RGBAFloat, false, true);
		tex.filterMode = FilterMode.Point;

		int[] tris = source.triangles;
		Vector3[] verts = source.vertices;
//		Debug.Log("tris " + tris.Length + " " + tris.Length/3);
//		Debug.Log("verts " + verts.Length);
		for(int y = 0; y < resolution/2; y++){
			for(int x = 0; x < resolution; x++){
				int primID = (int)((tris.Length / 3) * ((y*resolution+x) / (float)(resolution*resolution/2)));
/*				if(primID*3 >= tris.Length-1 || primID*3+1 >= tris.Length-1 || primID*3+2 >= tris.Length-1 || primID < 0){
					Debug.Log("primID" + primID);
					Debug.Log(x + " " + y + " " + (y*resolution+x));
				}
				if(tris[primID*3] >= verts.Length-1 || tris[primID*3+1] >= verts.Length-1 || tris[primID*3+2] >= verts.Length-1){
					Debug.Log(x + " " + y + " " + (y*resolution+x));
				}*/
				Vector3[] vertices = new Vector3[]{verts[tris[primID*3]], verts[tris[primID*3+1]], verts[tris[primID*3+2]]};
				Vector2 rand = new Vector2(UnityEngine.Random.Range(0.0f, 1.0f), UnityEngine.Random.Range(0.0f, 1.0f));
				if(rand.x + rand.y > 1.0f){
					rand = new Vector2(1.0f, 1.0f) - rand;
				}
				Vector3 pos = vertices[0] + (vertices[1] - vertices[0])*rand.x + (vertices[2] - vertices[0])*rand.y;
				tex.SetPixel(x, y, new Color(pos.x, pos.y, pos.z, 1.0f));
			}
		}

		for(int y = resolution/2; y < resolution; y++){
			for(int x = 0; x < resolution; x++){
				tex.SetPixel(x, y, new Color(0.0f, 0.0f, 0.0f, 1.0f));
			}
		}

		AssetDatabase.CreateAsset(tex, "Assets/GPU Particles/Resources/" + name + ".asset");
	}
}
#endif
