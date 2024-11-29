// 工具函数集合
class Utils {
    // 创建星空背景
    static createStars() {
        const stars = document.getElementById('stars');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.width = `${Math.random() * 3}px`;
            star.style.height = star.style.width;
            star.style.backgroundColor = '#fff';
            star.style.borderRadius = '50%';
            star.style.opacity = Math.random();
            star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
            stars.appendChild(star);
        }
    }
}

// 图片预加载器
class ImagePreloader {
    static preloadImages(storyContent) {
        const imageUrls = new Set();
        
        Object.values(storyContent).forEach(node => {
            if (node.image && node.image.url) {
                imageUrls.add(node.image.url);
            }
        });

        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }
}

// 事件管理器
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
}