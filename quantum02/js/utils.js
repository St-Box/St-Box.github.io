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


// 在 utils.js 中修改或添加  星星效果
// utils.js
class StarryBackground {
    // 所有可配置的参数
    static DEFAULT_CONFIG = {
        // 星星基础配置
        stars: {
            total: 150,          // 星星总数
            distribution: {      // 星星大小分布
                small: 0.3,      // % 的概率是小星星
                medium: 0.3,     // % 的概率是中等星星
                large: 0.4       // % 的概率是大星星
            },
            sizes: {            // 星星大小（像素）
                small: 2,
                medium: 3,
                large: 4
            },
            colors: {           // 星星颜色
                base: '#ffffff',
                glow: 'rgba(255, 255, 255, 0.5)'
            }
        },

        // 闪烁动画配置
        twinkle: {
            types: {
                slow: {
                    duration: 3,     // 动画持续时间（秒）
                    opacity: {
                        min: 0.3,
                        max: 1
                    }
                },
                medium: {
                    duration: 2,
                    opacity: {
                        min: 0.2,
                        max: 0.5
                    }
                },
                fast: {
                    duration: 1,
                    opacity: {
                        min: 0.4,
                        max: 0.8
                    }
                }
            },
            distribution: {      // 闪烁类型分布
                slow: 0.3,
                medium: 0.4,
                fast: 0.3
            }
        },

        // 流星配置
        shootingStars: {
            enabled: true,           // 是否启用流星
            frequency: 8000,         // 检查间隔（毫秒）
            chance: 0.6,             // 出现概率 (0-1)
            duration: 1.5,             // 动画持续时间（秒）
            length: 100,             // 流星长度（像素）
            angle: 45,               // 流星角度（度）
            color: '#ffffff'         // 流星颜色
        }
    };

    constructor(customConfig = {}) {
        // 合并默认配置和自定义配置
        this.config = this.mergeConfig(StarryBackground.DEFAULT_CONFIG, customConfig);
        this.starsContainer = document.getElementById('stars');
        this.init();
    }

    mergeConfig(defaultConfig, customConfig) {
        // 深度合并配置对象
        return Object.assign({}, defaultConfig, customConfig);
    }

    createStar() {
        const star = document.createElement('div');
        star.className = 'star';

        // 随机位置
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        // 根据配置决定大小
        const sizeRandom = Math.random();
        const { distribution, sizes } = this.config.stars;
        
        if (sizeRandom < distribution.small) {
            star.classList.add('small');
            star.style.width = `${sizes.small}px`;
            star.style.height = `${sizes.small}px`;
        } else if (sizeRandom < distribution.small + distribution.medium) {
            star.classList.add('medium');
            star.style.width = `${sizes.medium}px`;
            star.style.height = `${sizes.medium}px`;
        } else {
            star.classList.add('large');
            star.style.width = `${sizes.large}px`;
            star.style.height = `${sizes.large}px`;
        }

        // 设置闪烁动画
        const twinkleRandom = Math.random();
        const { distribution: twinkleDistribution } = this.config.twinkle;
        
        if (twinkleRandom < twinkleDistribution.slow) {
            star.classList.add('twinkle-1');
            star.style.animationDuration = `${this.config.twinkle.types.slow.duration}s`;
        } else if (twinkleRandom < twinkleDistribution.slow + twinkleDistribution.medium) {
            star.classList.add('twinkle-2');
            star.style.animationDuration = `${this.config.twinkle.types.medium.duration}s`;
        } else {
            star.classList.add('twinkle-3');
            star.style.animationDuration = `${this.config.twinkle.types.fast.duration}s`;
        }

        // 随机动画延迟
        star.style.animationDelay = `${Math.random() * 5}s`;

        return star;
    }

    createStarryBackground() {
        this.starsContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < this.config.stars.total; i++) {
            fragment.appendChild(this.createStar());
        }
        
        this.starsContainer.appendChild(fragment);
    }

    createShootingStar() {
        if (!this.config.shootingStars.enabled) return;

        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const angle = Math.random() * this.config.shootingStars.angle;

        Object.assign(shootingStar.style, {
            left: `${startX}%`,
            top: `${startY}%`,
            width: `${this.config.shootingStars.length}px`,
            animation: `shooting-star ${this.config.shootingStars.duration}s linear forwards`,
            transform: `rotate(${angle}deg)`
        });

        this.starsContainer.appendChild(shootingStar);
        shootingStar.addEventListener('animationend', () => shootingStar.remove());
    }

    startShootingStars() {
        if (!this.config.shootingStars.enabled) return;

        setInterval(() => {
            if (Math.random() < this.config.shootingStars.chance) {
                this.createShootingStar();
            }
        }, this.config.shootingStars.frequency);
    }

    init() {
        this.createStarryBackground();
        this.startShootingStars();
    }
}