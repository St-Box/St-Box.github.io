class StoryManager extends EventEmitter {
    constructor() {
        super();
        this.currentNode = 'start';
        this.storyContent = STORY_CONTENT;
        this.storyContainer = document.querySelector('.story-container');
        this.storyText = document.getElementById('storyText');
        this.choicesContainer = document.getElementById('choices');
    }

    createImageElement(imageData) {
        if (!imageData) return null;

        const container = document.createElement('div');
        container.className = 'story-image-container';

        const img = document.createElement('img');
        img.className = `story-image style-${imageData.style || 'regular'}`;
        img.src = imageData.url;
        img.alt = imageData.caption || '故事插图';

        container.appendChild(img);

        if (imageData.caption) {
            const caption = document.createElement('div');
            caption.className = 'image-caption';
            caption.textContent = imageData.caption;
            container.appendChild(caption);
        }

        img.onload = () => {
            setTimeout(() => container.classList.add('visible'), 100);
        };

        return container;
    }

    updateStoryDisplay(nodeId) {
        const content = this.storyContent[nodeId];
        if (!content) return;

        this.storyText.innerHTML = '';

        if (content.image && content.image.position === 'top') {
            const imageElement = this.createImageElement(content.image);
            if (imageElement) this.storyText.appendChild(imageElement);
        }

        const textElement = document.createElement('div');
        textElement.className = 'story-text';
        textElement.textContent = content.text;
        this.storyText.appendChild(textElement);

        if (content.image && content.image.position !== 'top') {
            const imageElement = this.createImageElement(content.image);
            if (imageElement) {
                if (content.image.position === 'background') {
                    this.storyContainer.insertBefore(imageElement, this.storyContainer.firstChild);
                } else {
                    this.storyText.appendChild(imageElement);
                }
            }
        }

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

    makeChoice(nextNode) {
        this.currentNode = nextNode;
        this.updateStoryDisplay(nextNode);
        this.emit('choiceMade', { node: nextNode });
    }

    reset() {
        this.currentNode = 'start';
        this.updateStoryDisplay('start');
        this.emit('storyReset');
    }
}
