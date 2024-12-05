// js/main.js
class App {
    constructor() {
        this.container = document.getElementById('app');
        this.sceneManager = new SceneManager();
        this.starryBackground = null;
        this.initializeGlobalErrorHandling();
    }

    async initializeScenes() {
        // 注册场景时添加调试日志
        console.log('Registering scenes...');
        
        try {
            // 注册封面场景
            const coverScene = new CoverScene(this.container);
            this.sceneManager.registerScene('cover', coverScene);
            console.log('Cover scene registered');

            // 注册其他场景
            this.sceneManager.registerScene('characterIntro', new CharacterIntroScene(this.container));
            this.sceneManager.registerScene('story', new StoryScene(this.container));
            this.sceneManager.registerScene('storyBackground', new StoryBackgroundScene(this.container));
            // 验证场景是否已注册
            console.log('Available scenes:', Array.from(this.sceneManager.scenes.keys()));
        } catch (error) {
            console.error('Error registering scenes:', error);
            throw error;
        }
    }

    async init() {
        try {
            await this.initializeScenes();
            await this.initializeBackground();
            
            window.sceneManager = this.sceneManager;
            
            // 添加调试日志
            console.log('Switching to cover scene...');
            await this.sceneManager.switchTo('cover');
            
            console.log('Application initialized successfully');
        } catch (error) {
            console.error('Error during initialization:', error);
            this.handleInitializationError(error);
        }
    }

    async initializeBackground() {
        this.starryBackground = new StarryBackground();
        await this.starryBackground.init();
    } 
    
    initializeGlobalErrorHandling() {
        window.onerror = (msg, url, lineNo, columnNo, error) => {
            console.error('Error: ', msg, '\nURL: ', url, '\nLine: ', lineNo, '\nColumn: ', columnNo, '\nError object: ', error);
            return false;
        };
    }

    handleInitializationError(error) {
        // 显示用户友好的错误信息
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.innerHTML = `
            <h2>初始化失败</h2>
            <p>抱歉，应用程序加载时遇到问题。请刷新页面重试。</p>
            <button onclick="location.reload()">重新加载</button>
        `;
        this.container.appendChild(errorMessage);
    }

    // 提供一个方法来访问当前场景
    getCurrentScene() {
        return this.sceneManager.currentScene;
    }

    // 提供一个方法来手动切换场景
    async switchScene(sceneName) {
        try {
            await this.sceneManager.switchTo(sceneName);
            return true;
        } catch (error) {
            console.error('Error switching scene:', error);
            return false;
        }
    }
}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
    // 创建加载指示器
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-indicator';
    loadingIndicator.innerHTML = '<div class="spinner"></div><p>正在初始化量子世界...</p>';
    document.body.appendChild(loadingIndicator);

    // 初始化应用
    const app = new App();
    
    // 使用 Promise 处理初始化
    app.init()
        .then(() => {
            // 初始化成功后移除加载指示器
            setTimeout(() => {
                loadingIndicator.style.opacity = '0';
                setTimeout(() => {
                    loadingIndicator.remove();
                }, 500);
            }, 500);
        })
        .catch(error => {
            // 初始化失败时显示错误
            loadingIndicator.innerHTML = `
                <p class="error">初始化失败</p>
                <p>${error.message}</p>
                <button onclick="location.reload()">重试</button>
            `;
        });
});

// 添加必要的样式
const style = document.createElement('style');
style.textContent = `
    .loading-indicator {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(13, 12, 40, 0.9);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        z-index: 1000;
        transition: opacity 0.5s;
    }

    .spinner {
        width: 50px;
        height: 50px;
        border: 3px solid rgba(255,255,255,0.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: spin 1s linear infinite;
        margin-bottom: 20px;
    }

    @keyframes spin {
        to {transform: rotate(360deg);}
    }

    .error-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(13, 12, 40, 0.9);
        padding: 20px;
        border-radius: 10px;
        color: #fff;
        text-align: center;
    }

    .error-message button {
        margin-top: 15px;
        padding: 10px 20px;
        background: rgba(123, 47, 166, 0.8);
        border: none;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        transition: background 0.3s;
    }

    .error-message button:hover {
        background: rgba(123, 47, 166, 1);
    }
`;
document.head.appendChild(style);
