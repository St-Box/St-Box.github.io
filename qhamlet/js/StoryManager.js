class StoryManager extends EventEmitter {
    constructor() {
        super();
        this.currentNode = 'start';
        this.storyContent = STORY_CONTENT;
        this.storyContainer = document.querySelector('.story-container');
        this.storyText = document.getElementById('storyText');
        this.choicesContainer = document.getElementById('choices');
        this.defaultTitle = "默认章节标题";
        this.titleHistory = [];
        this.titleElement = document.querySelector('.quantum-container h1.title'); // 添加标题元素的引用
        this.updateTitle('start');
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

    updateStoryDisplay(nodeId) {
        const content = this.storyContent[nodeId];
        if (!content) return;

        this.storyText.innerHTML = '';
        // 更新标题
        this.updateTitle(nodeId);

        // 处理媒体内容
        if (content.media) {
            const mediaElement = this.createMediaElement(content.media);
            if (mediaElement) {
                if (content.media.position === 'background') {
                    this.storyContainer.insertBefore(mediaElement, this.storyContainer.firstChild);
                } else {
                    this.storyText.appendChild(mediaElement);
                }
            }
        }

        // 添加文本
        const textElement = document.createElement('div');
        textElement.className = 'story-text';
        textElement.textContent = content.text;
        this.storyText.appendChild(textElement);

        this.updateChoices(content.choices);
        this.emit('storyUpdated', { nodeId, content });
    }

    updateChoices(choices) {
        this.choicesContainer.innerHTML = '';
        choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text;
            btn.onclick = () => this.makeChoice(choice.next);
            this.choicesContainer.appendChild(btn);
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
