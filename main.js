class App {
    constructor() {
        try {
            this.quantum = new QuantumAnimation();
            console.log("QuantumAnimation initialized successfully");
        } catch (error) {
            console.error("Error initializing QuantumAnimation:", error);
        }

        this.story = new StoryManager();
        this.history = new HistoryManager();
        this.bindEvents();
    }

    init() {
        Utils.createStars();
        ImagePreloader.preloadImages(STORY_CONTENT);
        this.story.updateStoryDisplay('start');
        
        // 确保量子动画被正确添加到DOM中
        const quantumState = document.querySelector('.quantum-state');
        if (quantumState && this.quantum.container) {
            quantumState.appendChild(this.quantum.container);
        } else {
            console.error('Quantum animation container not found');
        }
    }

    bindEvents() {
        // 绑定故事事件
        this.story.on('choiceMade', ({ node }) => {
            this.quantum.setCollapseState();
            this.history.addEntry(node, this.story.storyContent[node].text);
        });

        this.story.on('storyReset', () => {
            this.history.reset();
            this.quantum.setStableState();
        });

        // 绑定UI事件
        document.getElementById('resetBtn').addEventListener('click', () => {
            if (confirm('确定要重置故事吗？所有进度将丢失。')) {
                this.story.reset();
            }
        });

        document.getElementById('toggleHistory').addEventListener('click', () => {
            this.history.toggle();
        });

        // 选项悬停效果
        document.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains('choice-btn')) {
                this.quantum.setSuperpositionState();
                document.getElementById('currentState').textContent = "量子态：|ψ⟩ = Σ|φᵢ⟩";
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.classList.contains('choice-btn')) {
                this.quantum.setStableState();
                document.getElementById('currentState').textContent = "量子态：|ψ⟩";
            }
        });

        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            if (e.key === 'h' || e.key === 'H') {
                this.history.toggle();
            }
            if (e.key === 'Escape') {
                this.historyPanel.classList.remove('active');
            }
        });
    }


}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});