---
sidebar_position: 1
---

# Avatar Setup

Here is a guide on how to set up the Quantum Particles on your Avatar in VRChat.
[![Avatar Setup Guide](https://img.youtube.com/vi/rttDqk_KsjM/0.jpg)](https://youtu.be/rttDqk_KsjM)

First of all, make sure to have a VRChat Unity Project with the latest SDK installed.
After you imported the Quantum Particles package, all the Prefabs can be found in the `Quantum\Particles\Prefabs` folder.
:::warning
The Quantum Particles are not compatible with the older GPU Particle package or any other repackage like JustSleightly's `ezGPUParticlesv1.5.1` or Bananasaurus Rex's `Brexs_av3.0_GPU_Particles_Setup`.
:::

Depending on what setup system you want to use, continue with the corresponding section below.

### Parameter Bits usage for the different setups:
- Default Prefab: **29**
- Preset Base: **27**
- Preset "Default": **18**
- Preset "Fire": **16**
- Preset "Snow": **17**
- Preset "Sparkle": **25**
- Preset "String": **25**
- All Presets: **128**

## VRCFury Setup
Make sure to add [VRCFury](https://vrcfury.com/download) to your project.

A quick demonstration of the following steps can be seen in the following video:
https://youtu.be/qiwn_u5nTME

:::warning
Do **NOT** mix the Default setup with the Preset setup Prefabs, you cannot use both at the same time.
:::

:::info
By default, the reference points for the particles are attached to your left and right index fingers, if you want to change this you'll have to unpack the prefab (`right click > Unpack Completely`) and edit the `Link to (Avatar):` setting in the VRCFury scripts of the corresponding Anchor GameObjects.  

If you also want to freely change the position relative to the bone, you need to open the Advanced Options of the VRCFury script, set `Keep bone offsets` to `Yes` and move the GameObjects to your desired position in the scene view.
:::

### Default Setup
Drag the "QP VRCFury Setup" prefab into your scene and then onto your Avatar's root object, VRCFury will automatically handle the rest.

### Preset Setup
If you want to use any combination of Presets, drag the "QP Preset Base" prefab from the `Presets` Folder into your scene and then onto your Avatar's root object.
Next, open up the "QP Preset Base" prefab and drag the preset you want to use (located in the same folder as the base) onto the "Quantum Particles" GameObject.

## Manual Setup

### Default Setup - First Part: Avatar Setup
1. Drag `QP Avatar Setup` prefab into your Unity scene (for base scaling).
2. Right click `QP Avatar Setup` in your hierarchy and click **Unpack Prefab**
3. Drag `Quantum Particles` onto your avatar's root object.
4. Drag all the GameObjects inside `>>>MOVE TO ARMATURE BONES<<<` to their corresponding bones on your armature (Left Hand, Right Hand, Neck, Head).
    - You can also move the Left/Right Hand GameObjects to any other bone you prefer, like the Left/Right Index Finger.
5. Reset the **Transform** components of the GameObjects from the previous step by clicking the settings cog in the top right of the Transform component in your Inspector and clicking **Reset**
6. (Optional) Position the Left/Right Hand Anchors to your preference.
7. Select `Desktop Anchor` under `[Neck] Proxy` and position it to your preference (typically at eye/viewpoint level and in front of you at about a distance equal to your arm-span)

### Default Setup - Second Part: AV3 Setup
It is advised to use something like [AV3Manager](https://github.com/VRLabs/Avatars-3.0-Manager) to merge the `Quantum Particles Parameters` and `Quantum Particles FX` Animator Controller found at `Quantum/Particles/Resources/Expressions` with your Avatars Animator Controller and Parameters.
Finally, add a new sub-menu control to your avatar's Menu file and drag in `Quantum Particles Menu` as the target sub-menu.

### Preset Setup
1. If you want to use any combination of Presets, follow all the steps of the **Default Setup - First Part: Avatar Setup** above.
2. Repeat the **Default Setup - Second Part: AV3 Setup** for the base and every preset you want to use. All the Animator Controllers, Parameters and Menus are located at `Quantum/Particles/Resources/Expressions/Presets/...`.
3. Add all the presets menus to the `Quantum Particles Presets Menu` and the `Quantum Particles Menu Base` to your avatar (both located in `Quantum/Particles/Resources/Expressions/Presets/Base/`)
4. Adjust the `Layer` values in the `Activate` Animator Layers.
    - Go to your avatars FX Animator Controller and look for the layers called `Quantum Particles [PresetName] Activate` (you have to do this for every preset you added)
    - inside the `On` and `Off` states, you find find multiple `(VRC Animator Layer Control)` scripts
    - you have to increase the values in the `Layer` field depending on how many layers you have before this one
    - for example: if there are `2` more layers above the `Activate` layer (so it's the 3rd layer in your Animator Controller), you have to increase the values by `2` (set the `Layer` values to `3`, `4`, `5`, etc.) and if you have another preset with its `Activate` layer as the 10th layer, you have to set the `Layer` values to `10`, `11`, `12`, etc.
    - make sure you do this for all presets `Activate` Layers and all the `(VRC Animator Layer Control)` scripts in the `On` and `Off` states, the exact amount the Layer Control scripts can vary depending on the preset.

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
    - Appropriate meshes can be found in the `Quantum/Particles/Resources/Meshes` folder. Or generate your own mesh by going to `Tools > Quantum > Particles`.
2. Replace the [Render Textures](./textures#render-texture) used in the Cameras and the Simulator Materials.
    - The [Render Textures](./textures#render-texture) can be found in the `Camera` Components, inside the slot `Target Texture`, and for the Simulator Materials under `Base Settings > Input Texture`.
    - Keep in mind that the Material needs a [Render Textures](./textures#render-texture) of the **SAME** side (Left/Right) as the Simulator it is used for, while the Camera needs the **OPPOSITE** side as the Simulator it is inside.
    - Appropriate Render Textures can be found in the `Quantum/Particles/Resources/RenderTextures` folder.
