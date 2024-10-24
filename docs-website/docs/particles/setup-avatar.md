---
sidebar_position: 1
---

# Avatar Setup
First of all, make sure to have a VRChat Unity Project with the latest SDK installed.
After you imported the Quantum Particles package, all the Prefabs can be found in the `Quantum\Particles\Prefabs` folder.
:::warning
The Quantum Particles are not compatible with the older GPU Particle package or any other repackage like JustSleightly's `ezGPUParticlesv1.5.1` or Bananasaurus Rex's `Brexs_av3.0_GPU_Particles_Setup`.
:::
Depending on what setup system you want to use, continue with the corresponding section below.

## VRCFury Setup
Make sure to add [VRCFury](https://vrcfury.com/download) to your project.

### Default Setup
Drag the "QP VRCFury Setup" prefab into your scene and then onto your Avatar's root object, FRCFury will automatically handle the rest.

### Preset Setup
If you want to use any combination of Presets, drag the "QP Preset Base" prefab from the `Presets` Folder into your scene and then onto your Avatar's root object.
Next, open up the "QP Preset Base" prefab and drag the preset you want to use (located in the same folder as the base) onto the "Quantum Particles" GameObject.

---

A quick demonstration of these two setups can be seen in the video below:
https://youtu.be/qiwn_u5nTME

:::info
By default, the reference points for the particles are attached to your left and right index fingers, if you want to change this you'll have to unpack the prefab and edit the `Link to (Avatar):` setting in the VRCFury scripts.
:::

## Manual Setup

### First Part - Avatar Setup
1. Drag `QP Avatar Setup` prefab into your Unity scene (for base scaling).
2. Right click `QP Avatar Setup` in your hierarchy and click **Unpack Prefab**
3. Drag `Quantum Particles` onto your avatar's root object.
4. Drag all the GameObjects inside `>>>MOVE TO ARMATURE BONES<<<` to their corresponding bones on your armature (Left Hand, Right Hand, Neck, Head).
    - You can also move the Left/Right Hand GameObjects to any other bone you prefer, like the Left/Right Index Finger.
5. Reset the **Transform** components of the GameObjects from the previous step by clicking the settings cog in the top right of the Transform component in your Inspector and clicking **Reset**
6. (Optional) Position the Left/Right Hand Anchors to your preference.
7. Select `Desktop Anchor` under `[Neck] Proxy` and position it to your preference (typically at eye/viewpoint level and in front of you at about a distance equal to your arm-span)

### Second Part - AV3 Setup
It is advised to use something like [AV3Manager](https://github.com/VRLabs/Avatars-3.0-Manager) to merge the `Quantum Particles Parameters` and `Quantum Particles FX` Animator Controller found at `Quantum/Particles/Resources/Expressions` with your Avatars Animator Controller and Parameters.
Finally, add a new sub-menu control to your avatar's Menu file and drag in `Quantum Particles Menu` as the target sub-menu.

Tutorial Video coming soon!

## Basic Setup
If you want to create your own Setup from scratch or plan to use the particles in a different project, like a VRChat World, the package contains a prefab simply called `QuantumParticles` which contains the basic setup for the particles.
This Prefab contains no animations or additional components or scripts, only what is strictly necessary to get the particles working.


## Other Guides

### Change Particle Amount
Keep in mind that for technical reasons, the amount of particles cannot be adjusted freely.
This is a result of the particle data being stored in a texture, and the amount of particles being determined by the area of this texture.
The amount of particles is given by the formula `Particle Amount = Resolution X * Resolution Y / 2`.
Ideally, the resolution should be a power of 2, like 256x256, 512x512, 1024x1024, etc.
Other resolutions might work, but could lead to unexpected results.

To change the Particle Amount, you will need to adjust several things in the Quantum Particles setup.
1. In the `Particles` GameObject (usually located inside the `Quantum Particles` GameObject), change the mesh to one with the desired amount of vertices.
    - Appropriate meshes can be found in the `Quantum/Particles/Resources/Meshes` folder. Or generate your own mesh by going to `Tools > Quantum > Particles > Particle Mesh`.
2. Replace the [Render Textures](./textures#render-texture) used in the Cameras and the Simulator Materials.
    - The [Render Textures](./textures#render-texture) can be found in the `Camera` Components, inside the slot `Target Texture`, and for the Simulator Materials under `Base Settings > Input Texture`.
    - Keep in mind that the Material needs a [Render Textures](./textures#render-texture) of the **SAME** side (Left/Right) as the Simulator it is used for, while the Camera needs the **OPPOSITE** side as the Simulator it is inside.
    - Appropriate Render Textures can be found in the `Quantum/Particles/Resources/RenderTextures` folder.
