---
sidebar_position: 2
---

# Troubleshooting & FAQ

If you can't find the answer to your question here, feel free to ask in the [Discord Server](https://discord.gg/Va5VPev).

---

### Why are the Particles not showing up

or

### Why is there only a single Particle visible

Both of these issues are likely because the reset animation has not been used to initialize the particles. If you are using the VRCFury or Manual setup and have properly merged the Animation Controller, this should happen automatically when the particles first spawn and can be triggered manually in the Expressions Menu. If you are using the basic or a custom setup, you will need to enable the spawning of particles in one of the simulator materials and either configure a shape or supply a ShapeTexture for the particles to spawn in.

---

### Why can't other players see my Particles

Quantum Particles are only visible to players who have you friended or who have your avatar fully shown, this means explicitly showing you avatar and not just adjusting the safety settings to have everything enabled. This is a limitation by VRChat as camera components will be disabled by default for non-friends to prevent abuse.
- **Side note:** If you added someone as a friend or they fully enabled your avatar while you were wearing the avatar with the particles, you might need to reload the avatar for the particles to show up.

---

### Broken/Pink Shaders
- if you get a `Shader error: Couldn't open include file 'Lib/QuantumParticles.cginc'`
    - this is possibly due to importing the package into a project that already had a previous version of the Quantum Particles.
    - if you had the old GPU particles package installed, make sure to remove it before importing the new Quantum Particles package. There is currently no way to update those old setups so you'd have to redo everything anyway.
- if the problem persists, try deleting the folders named `Simulator...` and `Visualizer...` at `ProjectName\Library\ShaderCache\shader\` or create a new project and only import the VRChat SDKs and Quantum Particles package first.

---

### Why are the Quantum Particles not Quest/Android/iOS compatible

Quantum Particles use a special setup of cameras and custom shaders to simulate and render the particles, both of which are not supported on Quest/Android/iOS. This is a limitation by VRChat and might change in the future, but is out of my control.
- **Side note:** A Quest compatible version for Worlds is technically possible and already a planned feature.

---

### What is the difference between normal Unity Particles and the Quantum/GPU Particles

Unity Particles are CPU based, which means they are calculated on the CPU and then sent to the GPU for rendering. Quantum Particles are GPU based, which means they are calculated and rendered on the GPU, which is much faster and allows for more particles to be rendered at the same time but also limits the amount of features that can be used, as the GPU does not have access to some data that the CPU has and requires many workarounds.

---

### May i use the Quantum Particles on a commercial Avatar

If you are using the public free version then yes, if you are using the early access version then no.

---
