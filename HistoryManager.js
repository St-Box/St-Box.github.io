class HistoryManager {
    constructor() {
        this.history = [];
        this.historyPanel = document.getElementById('historyPanel');
        this.historyContent = document.getElementById('historyContent');
        this.currentPath = document.getElementById('currentPath');
        this.pathArray = ['初始'];
    }

    addEntry(choice, text) {
        const entry = {
            choice,
            text,
            timestamp: new Date().toLocaleTimeString()
        };
        this.history.push(entry);
        this.pathArray.push(choice);
        this.updateDisplay();
    }

    updateDisplay() {
        // 更新历史面板
        this.historyContent.innerHTML = this.history.map((entry, index) => `
            <div class="history-entry">
                <div class="history-time">${entry.timestamp}</div>
                <div class="history-choice">选择: ${entry.choice}</div>
                <div class="history-text">${entry.text.substring(0, 50)}...</div>
            </div>
        `).join('');

        // 更新路径显示
        this.currentPath.textContent = '当前路径: ' + this.pathArray.join(' → ');
    }

    toggle() {
        this.historyPanel.classList.toggle('active');
    }

    reset() {
        this.history = [];
        this.pathArray = ['初始'];
        this.updateDisplay();
    }
}