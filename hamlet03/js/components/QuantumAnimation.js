class QuantumAnimation {
    constructor(particleCount = 20, radius = 30) {
        this.particleCount = particleCount;
        this.radius = radius;
        
        console.log("QuantumAnimation instance is being created...");
        this.container = document.createElement('div');
        this.container.className = 'quantum-animation';
        this.particles = [];
        this.currentState = 'stable';
        this.init();
    }

    init() {
        console.log("Initializing quantum animation...");
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
    
            const angle = (i / 20) * Math.PI * 2;
            
            particle.style.animationDuration = `${Math.random() * 2 + 2}s`; // 随机 2-4 秒
            const radius = Math.random() * 20 + 20; // 随机半径 20-40
            particle.style.transform = `rotate(${angle}rad) translate(${radius}px) rotate(${-angle}rad)`;
            particle.style.left = `${50 + Math.cos(angle) * radius}%`;
            particle.style.top = `${50 + Math.sin(angle) * radius}%`;
    
            console.log(`Particle ${i}: left=${particle.style.left}, top=${particle.style.top}`);
            this.container.appendChild(particle);
            this.particles.push(particle);
        }
    
        this.setStableState();
    }

    createRipple() {
        const ripple = this.container.querySelector('.ripple') || document.createElement('div');
        ripple.className = 'ripple';
        this.container.appendChild(ripple);
    
        // 强制重新渲染以重启动画
        ripple.style.animation = 'none';
        void ripple.offsetWidth; // 强制触发浏览器重绘
        ripple.style.animation = 'ripple-effect 1s ease-out forwards';
    }

    setStableState() {
        this.container.className = 'quantum-animation stable-state';
        this.currentState = 'stable';
         this.particles.forEach(particle => {
        const randomX = Math.random() * 100 - 50; // 随机 X 偏移
        const randomY = Math.random() * 100 - 50; // 随机 Y 偏移
        particle.style.transform = `translate(${randomX}px, ${randomY}px)`;
        particle.style.transition = 'transform 1s ease-out'; // 添加过渡效果
    });
    }

    setSuperpositionState() {
        this.container.className = 'quantum-animation superposition-state';
        this.currentState = 'superposition';
    }

    setCollapseState() {
        this.container.className = 'quantum-animation collapse-state';
        this.currentState = 'collapse';

        this.particles.forEach(particle => {
            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.transform = 'translate(-50%, -50%)';
        });

        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                this.createRipple();
            }, i * 200);
        }

       setTimeout(() => {
    this.particles.forEach(particle => {
        const randomX = Math.random() * 100 - 50; // 随机 X 偏移
        const randomY = Math.random() * 100 - 50; // 随机 Y 偏移
        particle.style.transform = `translate(${randomX}px, ${randomY}px)`;
        particle.style.transition = 'transform 1s ease-out'; // 添加过渡效果
    });

    // 可选：重置状态为 stable
    setTimeout(() => {
        this.setStableState();
    }, 1000);
}, 1500); // 坍缩完成后执行
    }
}
