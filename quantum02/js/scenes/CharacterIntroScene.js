class CharacterIntroScene extends BaseScene {
    constructor(container) {
        super(container);
        this.template = `
            <div class="character-intro-scene">
                <div class="intro-header">
                    <h1>量子哈姆雷特：人物志</h1>
                    <p class="intro-subtitle">在量子叠加的世界中，每个角色都有着自己的命运轨迹...</p>
                </div>
                <div class="characters-container"></div>
                <div class="character-info">
                    <div class="character-detail">
                        <h2 class="detail-character-name"></h2>  <!-- 修改这个class名 -->
                        <p class="character-description">Click the character portrait to view the details...</p>
                    </div>
                </div>
                <div class="navigation-buttons">
                    <button class="nav-button back-btn">
                        <span class="button-icon">←</span>
                        <span class="button-text">Back</span>
                    </button>
                    <button class="nav-button start-btn">
                        <span class="button-text">Story Begin</span>
                        <span class="button-icon">→</span>
                    </button>
                </div>
            </div>
        `;
    }

    createCharacterElement(character) {
        const element = document.createElement('div');
        element.className = 'character-card';
        element.dataset.characterId = character.id;
        element.innerHTML = `
            <div class="character-avatar">
                <img src="${character.image}" alt="${character.name}">
            </div>
            <div class="character-card-name">${character.name}</div>  <!-- 修改这个class名 -->
        `;
        element.addEventListener('click', () => this.showCharacterInfo(character));
        return element;
    }

    showCharacterInfo(character) {
        // 更新详情区域的名称
        const detailNameElement = this.container.querySelector('.detail-character-name');
        const descElement = this.container.querySelector('.character-description');
        
        // 移除所有卡片的活跃状态
        this.container.querySelectorAll('.character-card').forEach(card => {
            card.classList.remove('active');
        });
        
        // 添加当前卡片的活跃状态
        this.container.querySelector(`[data-character-id="${character.id}"]`).classList.add('active');

        // 更新详情区域的角色信息
        detailNameElement.textContent = character.name;
        
        // 添加淡出效果
        descElement.style.opacity = '0';
        setTimeout(() => {
            descElement.textContent = character.description;
            descElement.style.opacity = '1';
        }, 300);
    }


    async enter() {
        // 设置场景HTML
        this.container.innerHTML = this.template;

        // 获取角色容器
        const charactersContainer = this.container.querySelector('.characters-container');

        // 使用 CHARACTERS 对象中的数据
        Object.values(CHARACTERS).forEach(character => {
            charactersContainer.appendChild(this.createCharacterElement(character));
        });

        // 绑定导航按钮事件
        this.container.querySelector('.back-btn').addEventListener('click', () => {
            window.sceneManager.switchTo('storyBackground');
        });

        this.container.querySelector('.start-btn').addEventListener('click', () => {
            window.sceneManager.switchTo('story');
        });

        // 添加进入动画
        setTimeout(() => {
            this.container.querySelector('.character-intro-scene').classList.add('visible');
        }, 100);
    }

    async exit() {
        // 添加退出动画
        this.container.querySelector('.character-intro-scene').classList.remove('visible');
        await new Promise(resolve => setTimeout(resolve, 500));
        this.container.innerHTML = '';
    }
}