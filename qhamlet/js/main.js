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
        this.currentNodeId = 'start';
        this.bindEvents();
        this.starryBackground = new StarryBackground(); //星空背景
    }

    init() {
        Utils.createStars();
        ImagePreloader.preloadImages(STORY_CONTENT);
        this.story.updateStoryDisplay('start');
        // 确保初始化时更新标题和故事显示
        this.story.updateStoryDisplay('start');
        this.starryBackground.init();
        
        // 确保量子动画被正确添加到DOM中
        const quantumState = document.querySelector('.quantum-state');
        if (quantumState && this.quantum.container) {
            quantumState.appendChild(this.quantum.container);
        } else {
            console.error('Quantum animation container not found');
        }
    }
    // 获取量子态表示
    getQuantumStateNotation(nodeId, isSuperposition = false) {
        if (isSuperposition) {
            // 在叠加态时，显示当前状态和可能的下一个状态的叠加
            const currentContent = STORY_CONTENT[nodeId];
            if (currentContent && currentContent.choices) {
                const nextStates = currentContent.choices.map(choice => choice.next);
                const superpositionTerms = nextStates.map(state => `|Ψ${state}⟩`).join(' + ');
                return `|Ψ⟩ = ${superpositionTerms}`;
            }
            return `|Ψ⟩ = Σ|Ψᵢ⟩`;
        } else {
            // 在稳定态时，显示当前状态
            if (nodeId === 'start') {
                return '|Ψ₀⟩';
            }
            return `|Ψ${nodeId}⟩`;
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
                const stateNotation = this.getQuantumStateNotation(this.currentNodeId, true);
                document.getElementById('currentState').textContent = `${stateNotation}`;
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.classList.contains('choice-btn')) {
                this.quantum.setStableState();
                const stateNotation = this.getQuantumStateNotation(this.currentNodeId, false);
                document.getElementById('currentState').textContent = `${stateNotation}`;
            }
        });
         // 在做出选择时更新当前节点ID
         this.story.on('choiceMade', ({ node }) => {
            this.currentNodeId = node;
            this.quantum.setCollapseState();
            const stateNotation = this.getQuantumStateNotation(node, false);
            document.getElementById('currentState').textContent = `${stateNotation}`;
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

        // 添加标题更新的调试
        this.story.on('choiceMade', ({ node }) => {
            console.log('Choice made, updating to node:', node);
        });
    }


}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
