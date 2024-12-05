class CoverScene extends BaseScene {
    constructor(container) {
        super(container);
        this.template = `
            <div class="cover-scene">
                <div class="cover-content">
                    <div class="title-container">
                        <h1 class="main-title">
                            <span class="quantum">QUANTUM</span>
                            <span class="hamlet">HAMLET</span>
                        </h1>
                        <p class="subtitle">To observe, or not to observe? That is the question...\n</p>
                    </div>
                    
                    <div class="enter-button-container">
                        <button class="enter-button">
                            <span class="enter-text">ENTER QUANTUM WORLD</span>
                            <span class="enter-icon">→</span>
                        </button>
                    </div>

                    <div class="quantum-particles"></div>
                </div>
            </div>
        `;
    }

    createParticles() {
        const container = this.container.querySelector('.quantum-particles');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.setProperty('--delay', `${Math.random() * 4}s`);
            particle.style.setProperty('--size', `${Math.random() * 3 + 1}px`);
            container.appendChild(particle);
        }
    }

    async enter() {
        // 设置场景HTML
        this.container.innerHTML = this.template;
        
        // 创建粒子
        this.createParticles();

        // 添加进入按钮事件
        const enterButton = this.container.querySelector('.enter-button');
        enterButton.addEventListener('click', () => {
            enterButton.classList.add('clicked');
            setTimeout(() => {
                window.sceneManager.switchTo('storyBackground');  // 改为跳转到背景介绍场景
            }, 1000);
        });

        // 添加标题动画类
        setTimeout(() => {
            this.container.querySelector('.cover-content').classList.add('visible');
        }, 100);
    }

    async exit() {
        // 淡出效果
        this.container.querySelector('.cover-content').classList.remove('visible');
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.container.innerHTML = '';
    }
}