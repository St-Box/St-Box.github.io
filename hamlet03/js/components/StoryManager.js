class StoryManager extends EventEmitter {
    constructor(container) {
        super();
        this.container = container;
        this.currentNode = 'start';
        this.storyContent = STORY_CONTENT;
        this.titleHistory = [];
        this.defaultTitle = "QUANTUM HAMLET";
        this.lastEndingId = null; // 添加这个属性来存储最后的结局ID

        this.init();
    }

    init() {
        this.storyContainer = this.container.querySelector('.story-container');
        this.storyText = this.container.querySelector('#storyText');
        this.choicesContainer = this.container.querySelector('#choices');
        this.titleElement = this.container.querySelector('.title');
        this.updateStoryDisplay('start');
    }

    updateTitle(nodeId) {
        const content = this.storyContent[nodeId];
        let newTitle;

        if (content && content.title) {
            // 使用场景指定的标题
            newTitle = content.title;
        } else if (this.titleHistory.length > 0) {
            // 如果没有指定标题，保持使用最近的一个标题？
            // newTitle = this.titleHistory[this.titleHistory.length - 1];
            newTitle = this.defaultTitle;

        } else {
            // 如果没有历史标题，使用默认标题
            newTitle = this.defaultTitle;
        }

         // 同时更新页面标题和 h1 元素
         document.title = newTitle;
         if (this.titleElement) {
             this.titleElement.textContent = newTitle;
         }
         
         console.log('Title updated to:', newTitle);
 
         if (content && content.title) {
             this.titleHistory.push(newTitle);
         }
    }

    createMediaElement(mediaData) {
        if (!mediaData) return null;

        const container = document.createElement('div');
        container.className = `story-media-container ${mediaData.position || 'top'}`;

        let mediaElement;
        const mediaPath = MEDIA_PATHS[mediaData.type + 's'] + mediaData.file;

        switch (mediaData.type) {
            case 'image':
                mediaElement = document.createElement('img');
                mediaElement.src = mediaPath;
                mediaElement.className = `story-image style-${mediaData.style || 'regular'}`;
                mediaElement.alt = mediaData.caption || '故事插图';
                break;

            case 'video':
                mediaElement = document.createElement('video');
                mediaElement.src = mediaPath;
                mediaElement.className = 'story-video';
                if (mediaData.autoplay) mediaElement.autoplay = true;
                if (mediaData.loop) mediaElement.loop = true;
                if (mediaData.muted) mediaElement.muted = true;
                if (mediaData.controls) mediaElement.controls = true;
                break;

            case 'gif':
                mediaElement = document.createElement('img');
                mediaElement.src = mediaPath;
                mediaElement.className = `story-gif style-${mediaData.style || 'regular'}`;
                break;
        }

        container.appendChild(mediaElement);

        if (mediaData.caption) {
            const caption = document.createElement('div');
            caption.className = 'media-caption';
            caption.textContent = mediaData.caption;
            container.appendChild(caption);
        }

        // 添加加载完成后的动画
        mediaElement.onload = () => {
            setTimeout(() => container.classList.add('visible'), 100);
        };

        return container;
    }


    // 添加 handleChoice 方法
    handleChoice(nextNode) {
        const nextContent = this.storyContent[nextNode];
        if (!nextContent) {
            console.error(`Node ${nextNode} not found in story content`);
            return;
        }

        // 检查是否是结局节点
        if (nextContent.isEnding) {
            this.handleEnding(nextNode);
        } else {
            // 普通节点的处理
            this.updateStoryDisplay(nextNode);
        }
    }

    //处理结局
    handleEnding(nodeId) {
        this.lastEndingId = nodeId; // 记录结局ID
        const content = this.storyContent[nodeId];
        this.updateStoryDisplay(nodeId);

        // 清空选项容器
        this.choicesContainer.innerHTML = '';

        // 创建结局按钮容器
        const endingButtonsContainer = document.createElement('div');
        endingButtonsContainer.className = 'ending-buttons';

        // 创建按钮
        const buttons = [
            // {
            //     text: 'Restart the Story',
            //     class: 'restart-btn',
            //     action: () => {
            //         if (confirm('Are you sure to restart the story?？')) {
            //             this.reset();
            //         }
            //     }
            // },
            {
                text: 'Learn More about Quantum Physics',
                class: 'science-btn',
                action: () => {
                    window.sceneManager.switchTo('quantumScience');
                }
            },
            // {
            //     text: 'Back to Homepage',
            //     class: 'home-btn',
            //     action: () => {
            //         if (confirm('Are you sure to go back to homepage?')) {
            //             window.sceneManager.switchTo('cover');
            //         }
            //     }
            // }
        ];

        // 添加按钮
        buttons.forEach(button => {
            const btnElement = document.createElement('button');
            btnElement.className = `choice-btn ${button.class}`;
            btnElement.textContent = button.text;
            btnElement.addEventListener('click', button.action);
            endingButtonsContainer.appendChild(btnElement);
        });

        // 添加结局效果
        endingButtonsContainer.style.opacity = '0';
        endingButtonsContainer.style.transform = 'translateY(20px)';
        
        // 将容器添加到选项区域
        this.choicesContainer.appendChild(endingButtonsContainer);

        // 触发渐入动画
        setTimeout(() => {
            endingButtonsContainer.style.transition = 'all 0.5s ease';
            endingButtonsContainer.style.opacity = '1';
            endingButtonsContainer.style.transform = 'translateY(0)';
        }, 100);

        // 发出结局事件
        this.emit('endingReached', { nodeId, content });
    }
    returnToLastEnding() {
        if (this.lastEndingId) {
            this.handleEnding(this.lastEndingId);
        } else {
            // 如果没有保存的结局，则返回到开始
            this.reset();
        }
    }
    
    updateStoryDisplay(nodeId) {
        const content = this.storyContent[nodeId];
        if (!content) return;
    
         // 立即滚动到顶部
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // 如果有特定的故事容器，也将其滚动到顶部
    if (this.storyContainer) {
        this.storyContainer.scrollTop = 0;
    }

    this.storyText.innerHTML = '';
    this.updateTitle(nodeId);
    
        // 处理媒体内容
        if (content.media) {
            const mediaElement = this.createMediaElement(content.media);
            if (mediaElement) {
                const mediaContainer = document.createElement('div');
                mediaContainer.className = 'story-media-container';
                mediaContainer.appendChild(mediaElement);
                
                if (content.media.position === 'background') {
                    this.storyContainer.insertBefore(mediaContainer, this.storyContainer.firstChild);
                } else {
                    this.storyText.appendChild(mediaContainer);
                }
                
                setTimeout(() => {
                    mediaContainer.classList.add('visible');
                }, 100);
            }
        }
    
        // 添加文本
        const textElement = document.createElement('div');
        textElement.className = 'story-text';
        textElement.textContent = content.text;
        this.storyText.appendChild(textElement);
    
        // 确保新内容在滚动后再显示
        setTimeout(() => {
            textElement.classList.add('visible');
        }, content.media ? 300 : 100);
    
        // 检查是否是特定场景或有多个选项
        if (nodeId === 'C3S3') {  // 特别处理 C3S3 场景
            this.addContinueButton(content.choices);
        } else {
            // 普通场景的选项处理
            this.updateChoices(content.choices);
        }
    
        this.emit('storyUpdated', { nodeId, content });
    }
    
    // 修改 addContinueButton 方法，确保正确创建和显示 Continue 按钮
    addContinueButton(choices) {
        this.choicesContainer.innerHTML = ''; // 清空现有选项
        
        const continueButton = document.createElement('button');
        continueButton.className = 'continue-btn';
        continueButton.textContent = 'Check Their Status...';
        continueButton.style.opacity = '0';
        continueButton.style.transition = 'all var(--transition-speed) ease';
        
        continueButton.addEventListener('click', () => {
            console.log('Continue button clicked'); // 添加调试日志
            this.showChoicesModal(choices);
        });
        
        this.choicesContainer.appendChild(continueButton);
        
        // 确保按钮淡入显示
        setTimeout(() => {
            continueButton.style.opacity = '1';
        }, 400);
    }
    
    // 确保 showChoicesModal 方法正确实现
    showChoicesModal(choices) {
        console.log('Showing choices modal'); // 添加调试日志
        
        const modalHTML = `
            <div class="modal-overlay" id="choicesModal">
                <div class="choices-modal">
                    <div class="modal-image">
                        <img src="data/images/quantum-choice.jpg" alt="">
                    </div>
                    <h3 class="modal-title">To Observe, or Not to Observe?\nThat Is the Question...</h3>
                    <div class="choices-container">
                        ${choices.map((choice, index) => `
                            <button class="choice-btn modal-choice" 
                                    data-next="${choice.next}"
                                    style="animation: fadeIn 0.5s ease forwards ${index * 0.1}s;">
                                ${choice.text}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    
        // 移除可能存在的旧模态窗口
        const existingModal = document.getElementById('choicesModal');
        if (existingModal) {
            existingModal.remove();
        }
    
        // 添加新的模态窗口
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // 确保模态窗口显示
        const modal = document.getElementById('choicesModal');
        modal.style.display = 'flex';
        modal.style.opacity = '0';
        
        // 添加淡入效果
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.style.transition = 'opacity 0.3s ease';
        }, 10);
    
        // 添加选项点击事件
        modal.querySelectorAll('.modal-choice').forEach(button => {
            button.addEventListener('click', () => {
                const nextNode = button.dataset.next;
                // 添加淡出效果
                modal.style.opacity = '0';
                setTimeout(() => {
                    modal.remove();
                    this.handleChoice(nextNode);
                }, 300);
            });
        });
    }

    // 单个选项的处理
    updateChoices(choices) {
        this.choicesContainer.innerHTML = '';
        if (!choices || choices.length === 0) return;

        choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice.text;
            button.style.opacity = '0';
            button.style.transform = 'translateY(20px)';
            button.style.transition = 'all var(--transition-speed) ease';
            
            button.addEventListener('click', () => {
                this.handleChoice(choice.next);
            });
            
            this.choicesContainer.appendChild(button);
            
            setTimeout(() => {
                button.style.opacity = '1';
                button.style.transform = 'translateY(0)';
            }, 400 + (index * 100));
        });
    }


    makeChoice(nextNode) { //点击选择
        this.currentNode = nextNode;
        // 确保在更新显示之前更新标题
        this.updateTitle(nextNode);
        this.updateStoryDisplay(nextNode);
        this.emit('choiceMade', { node: nextNode });
    }

    reset() {               //重置
        this.currentNode = 'start';
        this.titleHistory = [];  // 重置标题历史
        this.updateStoryDisplay('start');
        this.emit('storyReset');
    }
}
