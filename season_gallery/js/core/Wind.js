class Wind {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.targetX = 0;
        this.targetY = 0;
    }

    update() {
        this.x += (this.targetX - this.x) * 0.1;
        this.y += (this.targetY - this.y) * 0.1;
    }

    setTarget(x, y) {
        const windStrength = 0.5;
        this.targetX = ((x - window.innerWidth / 2) / (window.innerWidth / 2)) * windStrength;
        this.targetY = ((y - window.innerHeight / 2) / (window.innerHeight / 2)) * windStrength;
    }
}