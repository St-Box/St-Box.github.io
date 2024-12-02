class NatureElement {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.life = 1;
    }

    update(wind) {
        this.x += this.speedX + wind.x;
        this.y += this.speedY + wind.y;
        this.rotation += this.rotationSpeed;
        this.life -= 0.003;
        this.opacity = this.life;

        return !(this.life <= 0 || this.x < 0 || 
                this.x > window.innerWidth || 
                this.y < 0 || 
                this.y > window.innerHeight);
    }
}