// quantum.js
// Quantum Particle Class - Written by Programmer A
class QuantumParticle {
    constructor(x, y, color, speed) {
        this.x = x;
        this.y = y;
        this.baseRadius = Math.random() * 3 + 1;
        this.radius = this.baseRadius;
        this.dx = (Math.random() - 0.5) * 2 * speed;
        this.dy = (Math.random() - 0.5) * 2 * speed;
        this.color = color;
        this.originalSpeed = speed;
        this.trail = [];
        this.entangledWith = null;
        this.quantumState = Math.random() > 0.5 ? 0 : 1;
        this.phase = Math.random() * Math.PI * 2;
    }
    
    update(width, height, delta = 16) {
        const normalizedDelta = delta / 16;
        
        // Quantum state evolution
        this.quantumState = (this.quantumState + normalizedDelta * 0.1) % 2;
        this.phase += normalizedDelta * 0.05;
        
        // Apply quantum wave behavior
        const waveInfluence = 0.3;
        this.dx += Math.sin(this.phase) * waveInfluence * normalizedDelta;
        this.dy += Math.cos(this.phase) * waveInfluence * normalizedDelta;
        
        this.x += this.dx * normalizedDelta;
        this.y += this.dy * normalizedDelta;
        
        // Bounce off edges with quantum tunneling probability
        const tunnelProbability = 0.01;
        if (this.x < 0) {
            if (Math.random() < tunnelProbability) {
                this.x = width;
            } else {
                this.dx = Math.abs(this.dx);
                this.x = 0;
            }
        }
        if (this.x > width) {
            if (Math.random() < tunnelProbability) {
                this.x = 0;
            } else {
                this.dx = -Math.abs(this.dx);
                this.x = width;
            }
        }
        if (this.y < 0) {
            if (Math.random() < tunnelProbability) {
                this.y = height;
            } else {
                this.dy = Math.abs(this.dy);
                this.y = 0;
            }
        }
        if (this.y > height) {
            if (Math.random() < tunnelProbability) {
                this.y = 0;
            } else {
                this.dy = -Math.abs(this.dy);
                this.y = height;
            }
        }
        
        // Normalize speed
        const speed = Math.hypot(this.dx, this.dy);
        if (speed > this.originalSpeed * 2) {
            this.dx = (this.dx / speed) * this.originalSpeed * 2;
            this.dy = (this.dy / speed) * this.originalSpeed * 2;
        }
    }
    
    draw(ctx, glowIntensity) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        
        // Glow effect based on quantum state
        const intensity = glowIntensity * (0.5 + Math.abs(Math.sin(this.quantumState * Math.PI)));
        ctx.shadowBlur = intensity;
        ctx.shadowColor = this.color;
        
        // Draw quantum waveform around particle
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw entanglement connection if exists
        if (this.entangledWith) {
            ctx.beginPath();
            ctx.strokeStyle = `hsla(${(Date.now() * 0.1) % 360}, 100%, 70%, 0.5)`;
            ctx.lineWidth = 1;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.entangledWith.x, this.entangledWith.y);
            ctx.stroke();
            
            // Entangled particles mirror each other's quantum state
            this.quantumState = this.entangledWith.quantumState;
        }
        
        // Reset shadow
        ctx.shadowBlur = 0;
    }
}

// Quantum Particle Animation Class - Written by Programmer B
class QuantumParticleAnimation {
    constructor() {
        this.canvas = document.getElementById('quantumCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.connectionRadius = 150;
        this.particleCount = 150;
        this.particleSpeed = 1;
        this.glowIntensity = 20;
        this.gravityWellActive = false;
        this.timeDilationActive = false;
        this.vortexActive = false;
        this.colorWaveActive = false;
        this.repulsionActive = false;
        this.explosionTime = 0;
        this.pulseWaveActive = false;
        this.tornadoActive = false;
        this.blackHoleActive = false;
        this.trailsActive = false;
        this.pulseTime = 0;
        this.tornadoAngle = 0;
        this.mousePos = { x: 0, y: 0 };
        this.lastTime = performance.now();
        this.fps = 0;
        this.frameCount = 0;
        this.lastFpsUpdate = 0;
        this.colorWaveOffset = 0;
        this.entanglementCount = 0;
        this.quantumAlgorithmActive = false;
        this.quantumState = "|ψ⟩";
        this.activeEffect = "None";
        this.startTime = performance.now();
        this.lowFpsWarning = false;
        this.searchTarget = null;
        this.algorithmTime = 0;
        
        this.colorSchemes = {
            default: () => `hsla(${Math.random() * 360}, 70%, 60%, 0.8)`,
            cosmic: () => `hsla(${Math.random() * 60 + 220}, 80%, 60%, 0.8)`,
            matrix: () => `hsla(120, ${Math.random() * 40 + 60}%, 50%, 0.8)`,
            fireflies: () => `hsla(${Math.random() * 40 + 20}, 100%, 70%, 0.8)`,
            rainbow: () => `hsla(${(Date.now() * 0.1) % 360}, 80%, 60%, 0.8)`
        };
        this.currentColorScheme = 'default';
        
        this.resize();
        this.initParticles();
        this.setupEventListeners();
        this.animate();
        this.updateQuantumState();
        this.setupTabs();
    }
    
    setupTabs() {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                document.querySelectorAll('.tab-pane').forEach(pane => {
                    pane.classList.remove('active');
                });
                
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(`${tabId}-tab`).classList.add('active');
            });
        });
    }
    
    setupEventListeners() {
        window.addEventListener('resize', () => this.resize());
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mousePos.x = e.clientX - rect.left;
            this.mousePos.y = e.clientY - rect.top;
        });

        document.getElementById('particleCount').addEventListener('input', (e) => {
            this.particleCount = parseInt(e.target.value);
            document.getElementById('particleCountValue').textContent = this.particleCount;
            this.initParticles();
        });
        
        document.getElementById('connectionRadius').addEventListener('input', (e) => {
            this.connectionRadius = parseInt(e.target.value);
            document.getElementById('connectionRadiusValue').textContent = this.connectionRadius;
        });
        
        document.getElementById('particleSpeed').addEventListener('input', (e) => {
            this.particleSpeed = parseFloat(e.target.value);
            document.getElementById('particleSpeedValue').textContent = this.particleSpeed.toFixed(1);
            this.updateParticleSpeed();
        });
        
        document.getElementById('glowIntensity').addEventListener('input', (e) => {
            this.glowIntensity = parseInt(e.target.value);
            document.getElementById('glowIntensityValue').textContent = this.glowIntensity;
        });
        
        // Preset buttons
        document.querySelectorAll('button[data-preset]').forEach(button => {
            button.addEventListener('click', () => {
                this.setPreset(button.dataset.preset);
            });
        });
        
        // Effect buttons
        document.getElementById('gravityBtn').addEventListener('click', () => this.toggleGravityWell());
        document.getElementById('timeBtn').addEventListener('click', () => this.toggleTimeDilation());
        document.getElementById('vortexBtn').addEventListener('click', () => this.toggleVortex());
        document.getElementById('blackholeBtn').addEventListener('click', () => this.toggleBlackHole());
        document.getElementById('colorBtn').addEventListener('click', () => this.toggleColorWave());
        document.getElementById('repulsionBtn').addEventListener('click', () => this.toggleRepulsion());
        document.getElementById('pulseBtn').addEventListener('click', () => this.togglePulseWave());
        document.getElementById('tornadoBtn').addEventListener('click', () => this.toggleTornado());
        document.getElementById('trailsBtn').addEventListener('click', () => this.toggleTrails());
        document.getElementById('explosionBtn').addEventListener('click', () => this.triggerExplosion());
        
        // Algorithm buttons
        document.getElementById('groverBtn').addEventListener('click', () => this.runGroverAlgorithm());
        document.getElementById('shorBtn').addEventListener('click', () => this.runShorAlgorithm());
        
        // Special buttons
        document.getElementById('randomizeBtn').addEventListener('click', () => this.randomize());
        document.getElementById('entanglementBtn').addEventListener('click', () => this.quantumEntanglement());
        document.getElementById('resetBtn').addEventListener('click', () => location.reload());
    }
    
    updateParticleSpeed() {
        for (let particle of this.particles) {
            const currentSpeed = Math.hypot(particle.dx, particle.dy);
            particle.dx = (particle.dx / currentSpeed) * this.particleSpeed;
            particle.dy = (particle.dy / currentSpeed) * this.particleSpeed;
            particle.originalSpeed = this.particleSpeed;
        }
    }
    
    setPreset(preset) {
        this.currentColorScheme = preset;
        switch(preset) {
            case 'cosmic':
                this.particleSpeed = 0.5;
                this.glowIntensity = 30;
                break;
            case 'matrix':
                this.particleSpeed = 2;
                this.glowIntensity = 15;
                break;
            case 'fireflies':
                this.particleSpeed = 0.8;
                this.glowIntensity = 25;
                break;
            case 'rainbow':
                this.particleSpeed = 1.5;
                this.glowIntensity = 20;
                break;
        }
        this.updateControlsUI();
        this.initParticles();
        this.activeEffect = `Preset: ${preset.charAt(0).toUpperCase() + preset.slice(1)}`;
        document.getElementById('currentEffect').textContent = this.activeEffect;
    }
    
    updateControlsUI() {
        document.getElementById('particleSpeed').value = this.particleSpeed;
        document.getElementById('glowIntensity').value = this.glowIntensity;
        document.getElementById('particleCount').value = this.particleCount;
        document.getElementById('connectionRadius').value = this.connectionRadius;
        
        document.getElementById('particleCountValue').textContent = this.particleCount;
        document.getElementById('connectionRadiusValue').textContent = this.connectionRadius;
        document.getElementById('particleSpeedValue').textContent = this.particleSpeed.toFixed(1);
        document.getElementById('glowIntensityValue').textContent = this.glowIntensity;
    }
    
    toggleEffect(buttonId, effectName) {
        const button = document.getElementById(buttonId);
        button.classList.toggle('active');
        const isActive = button.classList.contains('active');
        this.activeEffect = isActive ? effectName : "None";
        document.getElementById('currentEffect').textContent = this.activeEffect;
    }
    
    toggleGravityWell() {
        this.gravityWellActive = !this.gravityWellActive;
        this.toggleEffect('gravityBtn', 'Gravity Well');
    }
    
    toggleTimeDilation() {
        this.timeDilationActive = !this.timeDilationActive;
        this.toggleEffect('timeBtn', 'Time Dilation');
    }
    
    toggleVortex() {
        this.vortexActive = !this.vortexActive;
        this.toggleEffect('vortexBtn', 'Quantum Vortex');
    }

    toggleColorWave() {
        this.colorWaveActive = !this.colorWaveActive;
        this.toggleEffect('colorBtn', 'Color Wave');
    }

    toggleRepulsion() {
        this.repulsionActive = !this.repulsionActive;
        this.toggleEffect('repulsionBtn', 'Pauli Repulsion');
    }

    togglePulseWave() {
        this.pulseWaveActive = !this.pulseWaveActive;
        this.toggleEffect('pulseBtn', 'Pulse Wave');
    }

    toggleTornado() {
        this.tornadoActive = !this.tornadoActive;
        this.tornadoAngle = 0;
        this.toggleEffect('tornadoBtn', 'Quantum Tornado');
    }

    toggleBlackHole() {
        this.blackHoleActive = !this.blackHoleActive;
        this.toggleEffect('blackholeBtn', 'Black Hole');
    }

    toggleTrails() {
        this.trailsActive = !this.trailsActive;
        this.toggleEffect('trailsBtn', 'State Trails');
        if (!this.trailsActive) {
            for (let particle of this.particles) {
                particle.trail = [];
            }
        }
    }

    triggerExplosion() {
        this.explosionTime = performance.now();
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        for (let particle of this.particles) {
            const dx = particle.x - centerX;
            const dy = particle.y - centerY;
            const distance = Math.hypot(dx, dy);
            const angle = Math.atan2(dy, dx);
            const speed = Math.random() * 10 + 5;
            particle.dx = Math.cos(angle) * speed;
            particle.dy = Math.sin(angle) * speed;
        }
        
        this.activeEffect = "Quantum Collapse";
        document.getElementById('currentEffect').textContent = this.activeEffect;
        setTimeout(() => {
            if (this.activeEffect === "Quantum Collapse") {
                this.activeEffect = "None";
                document.getElementById('currentEffect').textContent = this.activeEffect;
            }
        }, 2000);
    }
    
    resize() {
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
    
    initParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push(new QuantumParticle(
                Math.random() * this.width,
                Math.random() * this.height,
                this.colorSchemes[this.currentColorScheme](),
                this.particleSpeed
            ));
        }
        document.getElementById('particleCounter').textContent = this.particleCount;
    }
    
    drawConnections() {
        this.ctx.beginPath();
        let connections = 0;
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];
                const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                
                if (distance < this.connectionRadius) {
                    connections++;
                    const opacity = 1 - (distance / this.connectionRadius);
                    this.ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.3})`;
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                }
            }
        }
        
        this.ctx.stroke();
        this.entanglementCount = connections;
        document.getElementById('entanglementCounter').textContent = connections;
    }
    
    updateFPS() {
        const now = performance.now();
        const delta = now - this.lastTime;
        this.frameCount++;
        
        if (now - this.lastFpsUpdate > 1000) {
            this.fps = Math.round(this.frameCount * 1000 / (now - this.lastFpsUpdate));
            document.getElementById('fpsCounter').textContent = this.fps;
            this.frameCount = 0;
            this.lastFpsUpdate = now;
            
            // Check for low FPS condition
            if (this.fps < 20 && this.fps > 0 && now - this.startTime > 5000) {
                if (!this.lowFpsWarning) {
                    this.lowFpsWarning = true;
                    document.getElementById('fpsWarning').style.display = 'block';
                    
                    // Optimize instead of resetting
                    this.particleCount = Math.max(50, Math.floor(this.particleCount * 0.7));
                    this.initParticles();
                    document.getElementById('particleCount').value = this.particleCount;
                    document.getElementById('particleCountValue').textContent = this.particleCount;
                    
                    setTimeout(() => {
                        document.getElementById('fpsWarning').style.display = 'none';
                        this.lowFpsWarning = false;
                    }, 3000);
                }
            }
        }
        
        this.lastTime = now;
        return delta;
    }
    
    updateQuantumState() {
        const states = [
            "|0⟩", "|1⟩", "|+⟩", "|-⟩", 
            "α|0⟩ + β|1⟩", "|ψ⟩", "|φ⟩", 
            "|00⟩ + |11⟩", "|01⟩ - |10⟩"
        ];
        
        if (!this.quantumAlgorithmActive) {
            this.quantumState = states[Math.floor(Math.random() * states.length)];
        }
        
        document.getElementById('quantumState').textContent = this.quantumState;
        setTimeout(() => this.updateQuantumState(), 2000);
    }
    
    runGroverAlgorithm() {
        this.quantumAlgorithmActive = true;
        this.quantumState = "Running Grover's Search...";
        document.getElementById('groverBtn').classList.add('active');
        this.algorithmTime = performance.now();
        
        this.visualizeQuantumCircuit("Grover");
        
        // Create search target
        this.searchTarget = {
            x: this.width/2 + (Math.random() - 0.5) * this.width * 0.7,
            y: this.height/2 + (Math.random() - 0.5) * this.height * 0.7,
            radius: 20
        };
        
        this.activeEffect = "Grover's Algorithm";
        document.getElementById('currentEffect').textContent = this.activeEffect;
    }
    
    runShorAlgorithm() {
        this.quantumAlgorithmActive = true;
        this.quantumState = "Running Shor's Factorization...";
        document.getElementById('shorBtn').classList.add('active');
        this.algorithmTime = performance.now();
        
        this.visualizeQuantumCircuit("Shor");
        
        // Algorithm effects - particles form factor patterns
        const factors = [2, 3, 5, 7, 11];
        this.factor = factors[Math.floor(Math.random() * factors.length)];
        
        this.activeEffect = "Shor's Algorithm";
        document.getElementById('currentEffect').textContent = this.activeEffect;
    }
    
    visualizeQuantumCircuit(algorithm) {
        const container = document.getElementById('circuitContainer');
        container.innerHTML = '';
        
        const qubitCount = 3;
        const lineHeight = container.clientHeight / qubitCount;
        
        for (let i = 0; i < qubitCount; i++) {
            const line = document.createElement('div');
            line.className = 'circuit-line';
            line.style.top = `${(i + 0.5) * lineHeight}px`;
            line.style.width = '100%';
            container.appendChild(line);
        }
        
        if (algorithm === "Grover") {
            this.addQuantumGate(container, 20, lineHeight * 0.5, 'H');
            this.addQuantumGate(container, 40, lineHeight * 1.5, 'H');
            this.addQuantumGate(container, 60, lineHeight * 2.5, 'H');
            
            this.addQuantumGate(container, 100, lineHeight * 1.5, 'X');
            this.addQuantumGate(container, 120, lineHeight * 0.5, '●');
            this.addQuantumGate(container, 120, lineHeight * 2.5, '○');
            this.addQuantumGate(container, 140, lineHeight * 1.5, 'X');
            
            this.addQuantumGate(container, 180, lineHeight * 0.5, 'H');
            this.addQuantumGate(container, 200, lineHeight * 1.5, 'H');
            this.addQuantumGate(container, 220, lineHeight * 2.5, 'H');
        } else if (algorithm === "Shor") {
            this.addQuantumGate(container, 20, lineHeight * 0.5, 'H');
            this.addQuantumGate(container, 40, lineHeight * 1.5, 'H');
            this.addQuantumGate(container, 60, lineHeight * 2.5, 'H');
            
            this.addQuantumGate(container, 100, lineHeight * 0.5, '●');
            this.addQuantumGate(container, 100, lineHeight * 1.5, '⊕');
            this.addQuantumGate(container, 100, lineHeight * 2.5, '⊕');
            
            this.addQuantumGate(container, 140, lineHeight * 1.5, 'U');
            this.addQuantumGate(container, 140, lineHeight * 2.5, 'U²');
            
            this.addQuantumGate(container, 180, lineHeight * 1.5, 'QFT†');
        }
    }
    
    addQuantumGate(container, left, top, symbol) {
        const gate = document.createElement('div');
        gate.className = 'gate';
        gate.style.left = `${left}px`;
        gate.style.top = `${top}px`;
        gate.textContent = symbol;
        container.appendChild(gate);
    }
    
    quantumEntanglement() {
        this.entanglementCount = Math.min(20, Math.floor(this.particles.length / 2));
        
        for (let i = 0; i < this.entanglementCount; i++) {
            const p1 = this.particles[i * 2];
            const p2 = this.particles[i * 2 + 1];
            
            p1.entangledWith = p2;
            p2.entangledWith = p1;
            
            const color = this.colorSchemes.rainbow();
            p1.color = color;
            p2.color = color;
        }
        
        document.getElementById('entanglementCounter').textContent = this.entanglementCount;
        this.activeEffect = "Quantum Entanglement";
        document.getElementById('currentEffect').textContent = this.activeEffect;
        setTimeout(() => {
            if (this.activeEffect === "Quantum Entanglement") {
                this.activeEffect = "None";
                document.getElementById('currentEffect').textContent = this.activeEffect;
            }
        }, 2000);
    }
    
    animate() {
        const delta = this.updateFPS();
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        // Background with fade effect
        this.ctx.fillStyle = this.trailsActive ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.2)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Update effects
        if (this.pulseWaveActive) this.pulseTime += delta * 0.001;
        if (this.tornadoActive) this.tornadoAngle += delta * 0.001;
        if (this.colorWaveActive) this.colorWaveOffset += delta * 0.001;
        
        // Handle algorithm timeouts
        if (this.quantumAlgorithmActive && performance.now() - this.algorithmTime > 5000) {
            this.quantumAlgorithmActive = false;
            document.getElementById('groverBtn').classList.remove('active');
            document.getElementById('shorBtn').classList.remove('active');
            if (this.activeEffect.includes("Algorithm")) {
                this.activeEffect = "None";
                document.getElementById('currentEffect').textContent = this.activeEffect;
            }
            this.searchTarget = null;
        }
        
        // Draw connections
        this.drawConnections();
        
        // Update and draw particles
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        
        for (let particle of this.particles) {
            // Draw trails
            if (this.trailsActive) {
                this.ctx.beginPath();
                this.ctx.strokeStyle = particle.color.replace('0.8', '0.2');
                this.ctx.lineWidth = particle.radius * 0.5;
                
                if (!particle.trail) particle.trail = [];
                particle.trail.push({ x: particle.x, y: particle.y });
                if (particle.trail.length > 10) particle.trail.shift();
                
                if (particle.trail.length > 1) {
                    this.ctx.moveTo(particle.trail[0].x, particle.trail[0].y);
                    for (let i = 1; i < particle.trail.length; i++) {
                        this.ctx.lineTo(particle.trail[i].x, particle.trail[i].y);
                    }
                    this.ctx.stroke();
                }
            }

            // Gravity Well
            if (this.gravityWellActive) {
                const dx = this.mousePos.x - particle.x;
                const dy = this.mousePos.y - particle.y;
                const distance = Math.hypot(dx, dy);
                if (distance < 200) {
                    const force = (200 - distance) * 0.0005;
                    particle.dx += dx * force;
                    particle.dy += dy * force;
                }
            }
            
            // Grover's algorithm effect
            if (this.searchTarget) {
                const dx = this.searchTarget.x - particle.x;
                const dy = this.searchTarget.y - particle.y;
                const distance = Math.hypot(dx, dy);
                const angle = Math.atan2(dy, dx);

                // Grover's amplification
                const amplification = Math.min(2, 1 / (distance * 0.01));
                particle.dx += Math.cos(angle) * amplification * 0.2;
                particle.dy += Math.sin(angle) * amplification * 0.2;
            }
            
            // Shor's algorithm effect
            if (this.activeEffect === "Shor's Algorithm") {
                const index = this.particles.indexOf(particle);
                const angle = (index % this.factor) * (2 * Math.PI / this.factor);
                const radius = Math.min(this.width, this.height) * 0.3;
                
                const targetX = centerX + Math.cos(angle) * radius;
                const targetY = centerY + Math.sin(angle) * radius;
                
                particle.dx += (targetX - particle.x) * 0.01;
                particle.dy += (targetY - particle.y) * 0.01;
            }
            
            // Other effects (vortex, color wave, etc.)...
            
            // Time Dilation
            if (this.timeDilationActive) {
                const distanceToCenter = Math.hypot(
                    particle.x - centerX,
                    particle.y - centerY
                );
                const timeScale = 1 - (Math.min(distanceToCenter, 300) / 300) * 0.8;
                particle.update(this.width, this.height, delta * timeScale);
            } else {
                particle.update(this.width, this.height, delta);
            }
            
            particle.draw(this.ctx, this.glowIntensity);
        }
        
        // Draw Grover's target
        if (this.searchTarget) {
            this.ctx.beginPath();
            this.ctx.arc(this.searchTarget.x, this.searchTarget.y, this.searchTarget.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(255, 50, 50, 0.3)';
            this.ctx.fill();

            // Pulsing effect
            const pulse = Math.sin(Date.now() * 0.005) * 5 + 10;
            this.ctx.beginPath();
            this.ctx.arc(this.searchTarget.x, this.searchTarget.y, this.searchTarget.radius + pulse, 0, Math.PI * 2);
            this.ctx.strokeStyle = 'rgba(255, 100, 100, 0.5)';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
        }
        
        requestAnimationFrame(() => this.animate());
    }

    randomize() {
        this.particleCount = Math.floor(Math.random() * 450) + 50;
        this.connectionRadius = Math.floor(Math.random() * 250) + 50;
        this.particleSpeed = parseFloat((Math.random() * 2.9 + 0.1).toFixed(1));
        this.glowIntensity = Math.floor(Math.random() * 40);

        this.updateControlsUI();

        if (Math.random() < 0.25) {
            const presets = ['cosmic', 'matrix', 'fireflies', 'rainbow'];
            const randomPreset = presets[Math.floor(Math.random() * presets.length)];
            this.setPreset(randomPreset);
        } else {
            const hue = Math.random() * 360;
            this.currentColorScheme = 'default';
            this.colorSchemes.default = () => `hsla(${hue}, 80%, 60%, 0.8)`;
        }

        this.gravityWellActive = Math.random() < 0.3;
        this.timeDilationActive = Math.random() < 0.3;
        this.vortexActive = Math.random() < 0.3;
        this.colorWaveActive = Math.random() < 0.3;
        this.repulsionActive = Math.random() < 0.3;
        this.pulseWaveActive = Math.random() < 0.3;
        this.tornadoActive = Math.random() < 0.3;
        this.blackHoleActive = Math.random() < 0.3;
        this.trailsActive = Math.random() < 0.3;

        this.initParticles();
        this.updateParticleSpeed();
        
        const effects = [
            'gravityBtn', 'timeBtn', 'vortexBtn', 'colorBtn',
            'repulsionBtn', 'pulseBtn', 'tornadoBtn', 'blackholeBtn', 'trailsBtn'
        ];
        
        effects.forEach(effect => {
            const button = document.getElementById(effect);
            const effectName = effect.replace('Btn', '');
            const active = this[`${effectName}Active`];
            
            if (active) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        this.activeEffect = "Randomized System";
        document.getElementById('currentEffect').textContent = this.activeEffect;
        setTimeout(() => {
            if (this.activeEffect === "Randomized System") {
                this.activeEffect = "None";
                document.getElementById('currentEffect').textContent = this.activeEffect;
            }
        }, 2000);
    }
}

// Initialize the animation when the page loads
window.addEventListener('load', () => {
    window.animation = new QuantumParticleAnimation();
});