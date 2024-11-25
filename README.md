# Quantum Particle Animation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🌌 Overview

An interactive quantum particle simulation that creates mesmerizing visual effects using HTML5 Canvas. This project combines particle physics with stunning visual effects to create an immersive experience that mimics quantum mechanical behaviors and cosmic phenomena.

## ✨ Features

### Core Features
- **Real-time Particle Simulation**: Dynamic particle system with customizable parameters
- **Interactive Effects**: Mouse-based interaction with particles
- **Quantum Effects**: Various quantum-inspired visual effects and behaviors
- **Smooth Animation**: Optimized performance with delta-time based animation

### Visual Effects
- 🌀 Vortex Effect
- 🌊 Color Wave
- 🌪️ Tornado Simulation
- 🕳️ Black Hole Effect
- ⚡ Particle Explosion
- 🌟 Pulse Wave
- 🎯 Gravity Well
- ⏰ Time Dilation
- 💫 Particle Trails

### Color Schemes
- 🌌 Cosmic
- 🖥️ Matrix
- 🌠 Fireflies
- 🌈 Rainbow
- 🎨 Default

## 🚀 Getting Started

### Prerequisites
- Modern web browser with HTML5 Canvas support
- JavaScript enabled
- WebGL support (recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/quantum-particle-animation.git
cd quantum-particle-animation
```

2. Open `index.html` in your web browser or serve it through a local server.

## 💻 Usage

### Basic Controls

#### Particle Properties
- **Particle Count**: Adjust number of particles (1-300)
- **Connection Radius**: Control particle connection distance
- **Particle Speed**: Modify particle velocity
- **Glow Intensity**: Adjust particle brightness

#### Effect Controls
```javascript
// Toggle effects using these methods
animation.toggleGravityWell();    // Activate gravity well
animation.toggleVortex();         // Create vortex effect
animation.toggleColorWave();      // Enable color wave
animation.toggleBlackHole();      // Activate black hole
animation.toggleTrails();         // Enable particle trails
```

### Color Schemes
```javascript
// Available color schemes
animation.setPreset('cosmic');    // Deep space blues
animation.setPreset('matrix');    // Digital green
animation.setPreset('fireflies'); // Warm golden glow
animation.setPreset('rainbow');   // Dynamic rainbow colors
```

## ⚙️ Configuration

### Particle Parameters
```javascript
{
    particleCount: 150,          // Default particle count
    connectionRadius: 150,       // Default connection distance
    particleSpeed: 1,           // Default particle speed
    glowIntensity: 20          // Default glow intensity
}
```

### Effect Parameters
- **Gravity Well**: Attracts particles to mouse position
- **Time Dilation**: Slows particle movement near cursor
- **Vortex**: Creates spiral motion
- **Color Wave**: Propagates color changes
- **Pulse Wave**: Emits circular wave patterns
- **Tornado**: Generates spiral updraft
- **Black Hole**: Creates particle singularity
- **Trails**: Enables particle path tracking

## 🎨 Customization

### Adding Custom Color Schemes
```javascript
this.colorSchemes = {
    customScheme: () => `hsla(${Math.random() * 360}, 70%, 60%, 0.8)`
};
```

### Modifying Particle Behavior
```javascript
class QuantumParticle {
    constructor(x, y, color, speed) {
        this.baseRadius = Math.random() * 3 + 1;
        this.dx = (Math.random() - 0.5) * 2 * speed;
        this.dy = (Math.random() - 0.5) * 2 * speed;
    }
}
```

## 🔧 Performance Optimization

### Best Practices
1. Adjust particle count based on device capability
2. Reduce connection radius for better performance
3. Disable trails effect on lower-end devices
4. Use requestAnimationFrame for smooth animation

### Performance Settings
```javascript
// Recommended settings for different devices
const performancePresets = {
    high: { particleCount: 150, connectionRadius: 150 },
    medium: { particleCount: 100, connectionRadius: 100 },
    low: { particleCount: 50, connectionRadius: 75 }
};
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingEffect`)
3. Commit your changes (`git commit -m 'Add amazing effect'`)
4. Push to the branch (`git push origin feature/AmazingEffect`)
5. Open a Pull Request

### Development Guidelines
- Follow JavaScript ES6+ standards
- Maintain performance optimization
- Document new effects and features
- Test across different browsers

## 🐛 Known Issues

- High particle counts may impact performance on mobile devices
- Some effects may cause frame rate drops on lower-end systems
- Trail effects can be memory intensive

## 📚 API Reference

### Core Methods
- `initParticles()`: Initialize particle system
- `animate()`: Main animation loop
- `resize()`: Handle canvas resizing
- `updateParticleSpeed()`: Update particle velocities

### Effect Methods
- `toggleGravityWell()`
- `toggleTimeDilation()`
- `toggleVortex()`
- `toggleColorWave()`
- `toggleRepulsion()`
- `togglePulseWave()`
- `toggleTornado()`
- `toggleBlackHole()`
- `toggleTrails()`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by quantum mechanics and particle physics
- Built with vanilla JavaScript and HTML5 Canvas
- Special thanks to the creative coding community

---

Made with ❤️ by [Your Name]
