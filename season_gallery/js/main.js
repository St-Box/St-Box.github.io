class SeasonalArtGallery {
    constructor() {
        this.canvas = document.getElementById('seasonCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.seasonSlider = document.getElementById('seasonSlider');
        this.timeSlider = document.getElementById('timeSlider');
        this.autoToggle = document.getElementById('autoToggle');

        this.width = 0;
        this.height = 0;
        this.isAuto = true;
        this.currentSeason = 0;
        this.currentTime = 12;

        this.wind = new Wind();
        this.natureElements = [];
        this.stars = Array(100).fill().map(() => new Star());
        this.ripples = [];

        this.elementPools = {
            petal: new ObjectPool(() => new Petal()),
            snowflake: new ObjectPool(() => new Snowflake()),
            firefly: new ObjectPool(() => new Firefly()),
            mapleLeaf: new ObjectPool(() => new MapleLeaf())
        };

        this.initializeEventListeners();
        this.resizeCanvas();
        this.animate();
    }

    initializeEventListeners() {
        window.addEventListener('resize', () => this.resizeCanvas());
        this.canvas.addEventListener('mousemove', (e) => this.wind.setTarget(e.clientX, e.clientY));
        this.canvas.addEventListener('click', (e) => this.addRipple(e.clientX, e.clientY));

        this.seasonSlider.addEventListener('input', (e) => {
            this.currentSeason = parseFloat(e.target.value);
            this.isAuto = false;
            this.autoToggle.classList.remove('active');
        });

        this.timeSlider.addEventListener('input', (e) => {
            this.currentTime = parseFloat(e.target.value);
            this.isAuto = false;
            this.autoToggle.classList.remove('active');
        });

        this.autoToggle.addEventListener('click', () => {
            this.isAuto = !this.isAuto;
            this.autoToggle.classList.toggle('active');
        });
    }

    resizeCanvas() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
        this.stars = Array(100).fill().map(() => new Star());
    }

    addNatureElement(season, time) {
        if (time >= 6 && time <= 18) {
            let element;
            if (season < 1) {
                element = this.elementPools.snowflake.get();
            } else if (season < 2) {
                element = this.elementPools.petal.get();
            } else if (season < 3) {
                element = this.elementPools.firefly.get();
            } else {
                element = this.elementPools.mapleLeaf.get();
            }
            
            if (element) {
                element.reset();
                this.natureElements.push(element);
            }
        }
    }

    addRipple(x, y) {
        this.ripples.push(new Ripple(x, y));
    }

    drawBackground(seasonValue, timeValue) {
        const colors = TimeSystem.getTimeColors(timeValue);
        const gradient = this.ctx.createLinearGradient(0, 0, this.width, this.height);
        
        gradient.addColorStop(0, colors.primary);
        gradient.addColorStop(1, colors.secondary);
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    updateAndDraw() {
        // 更新风力
        this.wind.update();

        // 夜晚绘制星星
        if (this.currentTime <= 6 || this.currentTime >= 18) {
            this.stars.forEach(star => star.draw(this.ctx));
        }

        // 更新和绘制自然元素
        this.natureElements = this.natureElements.filter(element => {
            const alive = element.update(this.wind);
            if (alive) {
                element.draw(this.ctx);
                return true;
            }
            return false;
        });

        // 更新和绘制涟漪
        this.ripples = this.ripples.filter(ripple => {
            const alive = ripple.update();
            if (alive) {
                ripple.draw(this.ctx);
                return true;
            }
            return false;
        });

        // 随机添加新的自然元素
        if (Math.random() < 0.1) {
            this.addNatureElement(this.currentSeason, this.currentTime);
        }
    }

    animate() {
        if (this.isAuto) {
            const now = new Date();
            this.currentTime = now.getHours() + now.getMinutes() / 60;
            this.currentSeason = (now.getMonth() + 1) / 3;
            
            this.timeSlider.value = this.currentTime;
            this.seasonSlider.value = this.currentSeason;
        }

        this.ctx.clearRect(0, 0, this.width, this.height);
        this.drawBackground(this.currentSeason, this.currentTime);
        this.updateAndDraw();
        
        requestAnimationFrame(() => this.animate());
    }
}

// 初始化应用
window.onload = () => {
    new SeasonalArtGallery();
};