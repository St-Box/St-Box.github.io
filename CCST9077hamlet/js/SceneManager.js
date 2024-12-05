// js/SceneManager.js
class SceneManager {
    constructor() {
        this.scenes = new Map();
        this.currentScene = null;
        this.currentSceneName = null;
        this.changeListeners = [];
    }

    registerScene(name, scene) {
        this.scenes.set(name, scene);
    }

    onSceneChange(callback) {
        this.changeListeners.push(callback);
    }

    async switchTo(sceneName) {
        try {
            const nextScene = this.scenes.get(sceneName);
            
            if (!nextScene) {
                throw new Error(`Scene '${sceneName}' not found`);
            }

            // 保存场景切换前的场景名
            const prevSceneName = this.currentSceneName;

            // 如果有当前场景，先执行退出
            if (this.currentScene) {
                await this.currentScene.exit();
            }

            // 切换到新场景
            this.currentScene = nextScene;
            this.currentSceneName = sceneName;

            // 执行进入新场景
            await nextScene.enter();

            // 通知所有监听器
            this.changeListeners.forEach(listener => {
                listener(prevSceneName, sceneName);
            });

        } catch (error) {
            console.error(`Error switching to scene '${sceneName}':`, error);
            throw error;
        }
    }

    getCurrentScene() {
        return this.currentScene;
    }

    getCurrentSceneName() {
        return this.currentSceneName;
    }
}