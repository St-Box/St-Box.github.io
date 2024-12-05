class StoryScene extends BaseScene {
    constructor(container) {
        super(container);
        this.showQuantumAnimation = false; // 添加控制标志
        this.template = `
            <div class="history-panel" id="historyPanel">
                <h3>故事记录</h3>
                <div id="historyContent"></div>
            </div>

            <div class="control-buttons">
                <button class="control-btn" id="resetBtn">重置</button>
                <button class="control-btn" id="toggleHistory">查看历史</button>
            </div>

            <div class="current-path" id="currentPath">当前路径: 初始</div>

            <div class="quantum-container">
                <h1 class="title">量子哈姆雷特</h1>
                
                <div class="quantum-state" style="display: none;">
                    <div class="state-display">
                        <div class="state-label">量子态：</div>
                        <div id="currentState" class="state-notation">|Ψ₀⟩</div>
                    </div>
                </div>

                <div class="story-container">
                    <div class="story-text" id="storyText"></div>
                    <div class="choice-container" id="choices"></div>
                </div>
            </div>
        `;
        
        this.currentNodeId = 'start';
    }

    // 获取量子态表示方法保持不变
    getQuantumStateNotation(nodeId, isSuperposition = false) {
        // ... 保持原有代码不变 ...
    }

    bindEvents() {
        // 绑定故事事件
        this.storyManager.on('choiceMade', ({ node }) => {
            this.currentNodeId = node;
            if (this.showQuantumAnimation && this.quantum) {
                this.quantum.setCollapseState();
                const stateNotation = this.getQuantumStateNotation(node, false);
                this.container.querySelector('.state-notation').textContent = stateNotation;
            }
            this.history.addEntry(node, this.storyManager.storyContent[node].text);
        });

        // 故事重置事件
        this.storyManager.on('storyReset', () => {
            this.history.reset();
            if (this.showQuantumAnimation && this.quantum) {
                this.quantum.setStableState();
                this.container.querySelector('.state-notation').textContent = '|Ψ₀⟩';
            }
            window.sceneManager.switchTo('cover');
        });

        // Reset按钮点击事件
        this.container.querySelector('#resetBtn').addEventListener('click', () => {
            if (confirm('确定要重置故事吗？所有进度将丢失。')) {
                this.storyManager.reset();
            }
        });

        this.container.querySelector('#toggleHistory').addEventListener('click', () => {
            this.history.toggle();
        });

        // 只在启用量子动画时绑定悬停效果
        if (this.showQuantumAnimation) {
            this.container.addEventListener('mouseover', (e) => {
                if (e.target.classList.contains('choice-btn') && this.quantum) {
                    this.quantum.setSuperpositionState();
                    const stateNotation = this.getQuantumStateNotation(this.currentNodeId, true);
                    this.container.querySelector('.state-notation').textContent = stateNotation;
                }
            });

            this.container.addEventListener('mouseout', (e) => {
                if (e.target.classList.contains('choice-btn') && this.quantum) {
                    this.quantum.setStableState();
                    const stateNotation = this.getQuantumStateNotation(this.currentNodeId, false);
                    this.container.querySelector('.state-notation').textContent = stateNotation;
                }
            });
        }

        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            if (e.key === 'h' || e.key === 'H') {
                this.history.toggle();
            }
            if (e.key === 'Escape') {
                this.container.querySelector('#historyPanel').classList.remove('active');
            }
        });
    }

    async enter() {
        // 设置场景HTML
        this.container.innerHTML = this.template;
        
        // 初始化组件
        this.storyManager = new StoryManager(this.container);
        this.history = new HistoryManager();

        // 只在需要时初始化量子动画
        if (this.showQuantumAnimation) {
            this.quantum = new QuantumAnimation();
            const quantumState = this.container.querySelector('.quantum-state');
            quantumState.style.display = 'block';
            quantumState.appendChild(this.quantum.container);
        }

        // 预加载图片
        ImagePreloader.preloadImages(STORY_CONTENT);

        // 绑定事件
        this.bindEvents();

        // 显示初始故事
        this.storyManager.updateStoryDisplay('start');
    }

    // 添加控制量子动画显示的方法
    toggleQuantumAnimation(show) {
        this.showQuantumAnimation = show;
        const quantumState = this.container.querySelector('.quantum-state');
        
        if (show && !this.quantum) {
            // 初始化量子动画
            this.quantum = new QuantumAnimation();
            quantumState.style.display = 'block';
            quantumState.appendChild(this.quantum.container);
            // 重新绑定相关事件
            this.bindEvents();
        } else if (!show) {
            // 隐藏和清理量子动画
            quantumState.style.display = 'none';
            if (this.quantum) {
                this.quantum = null;
            }
        }
    }

    async exit() {
        // 清理事件监听器
        document.removeEventListener('keydown', this.handleKeyDown);
        
        // 清理DOM
        this.container.innerHTML = '';
        
        // 清理组件
        if (this.quantum) {
            this.quantum = null;
        }
        
        if (this.storyManager) {
            this.storyManager = null;
        }
        
        if (this.history) {
            this.history = null;
        }
    }

    returnToCharacterIntro() {
        window.sceneManager.switchTo('characterIntro');
    }
}