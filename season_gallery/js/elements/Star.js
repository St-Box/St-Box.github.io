class Star {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 1.5 + 0.5;
        this.blinkSpeed = Math.random() * 0.02 + 0.01;
        this.offset = Math.random() * Math.PI * 2;
    }

    draw(ctx) {
        const brightness = Math.sin(Date.now() * this.blinkSpeed + this.offset) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        ctx.fill();
    }
}