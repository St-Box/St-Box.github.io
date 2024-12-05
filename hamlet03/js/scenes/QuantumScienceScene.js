class QuantumScienceScene extends BaseScene {
    constructor(container) {
        super(container);
        this.template = `
            <div class="quantum-science-page">
                <div class="concepts-sidebar"></div>
                <div class="content-area">
                    <div class="content-header">
                        <h1>量子物理科普</h1>
                        <p>探索微观世界的奇妙现象</p>
                    </div>
                    <div class="concept-content">
                        <h2>选择左侧概念查看详情...</h2>
                    </div>
                </div>

                <div class="navigation-buttons quantum-nav-buttons"> <!-- 添加特定类名 -->
                    <button class="nav-button quantum-nav-button home-btn"> <!-- 添加特定类名 -->
                        <span class="button-icon">←</span>
                        <span class="button-text">Back to Homepage</span>
                    </button>
                </div>
            </div>
        `;
        
        this.concepts = QUANTUM_CONCEPTS;
    }

createConceptCard(concept) {
    const card = document.createElement('div');
    card.className = 'concept-card';
    card.dataset.conceptId = concept.id;
    card.innerHTML = `
        <div class="concept-background">
            <img src="${concept.image}" alt="${concept.title}">
        </div>
        <div class="concept-overlay">
            <h3 class="concept-title">${concept.title}</h3>
        </div>
    `;
    card.addEventListener('click', () => this.showConceptInfo(concept));
    return card;
}

    showConceptInfo(concept) {
        // 移除所有卡片的活跃状态
        this.container.querySelectorAll('.concept-card').forEach(card => {
            card.classList.remove('active');
        });
        
        // 添加当前卡片的活跃状态
        this.container.querySelector(`[data-concept-id="${concept.id}"]`).classList.add('active');

        // 更新内容区域
        const contentArea = this.container.querySelector('.concept-content');
        contentArea.style.opacity = '0';
        contentArea.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            contentArea.innerHTML = `
                <h2>${concept.title}</h2>
                <div class="concept-illustration">
                    <img src="${concept.detailImage}" alt="${concept.title}">
                </div>
                <div class="concept-description">${concept.description}</div>
            `;
            
            contentArea.style.opacity = '1';
            contentArea.style.transform = 'translateY(0)';
        }, 300);
    }

    async enter() {
        this.container.innerHTML = this.template;
        
        // 添加概念卡片
        const sidebar = this.container.querySelector('.concepts-sidebar');
        Object.values(this.concepts).forEach(concept => {
            sidebar.appendChild(this.createConceptCard(concept));
        });

        // 默认显示第一个概念
        if (Object.values(this.concepts).length > 0) {
            this.showConceptInfo(Object.values(this.concepts)[0]);
        }

        // // 绑定导航按钮事件
        // this.container.querySelector('.back-btn').addEventListener('click', () => {
        //     window.sceneManager.switchTo('story');  // 返回到故事场景
        // });

        this.container.querySelector('.home-btn').addEventListener('click', () => {
            window.sceneManager.switchTo('cover');  // 返回到主页
        });
    }
}