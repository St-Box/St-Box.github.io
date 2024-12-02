class Firefly extends NatureElement {
    constructor() {
        super();
        this.glowSize = Math.random() * 20 + 10;
        this.baseOpacity = Math.random() * 0.5 + 0.5;
        this.pulseSpeed = Math.random() * 0.05 + 0.02;
        this.pulseOffset = Math.random() * Math.PI * 2;
    }

    draw(ctx) {
        const pulseOpacity = Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.3 + 0.7;
        const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.glowSize
        );
        gradient.addColorStop(0, `rgba(255, 255, 150, ${this.opacity * pulseOpacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 150, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(this.x - this.glowSize, this.y - this.glowSize, 
                    this.glowSize * 2, this.glowSize * 2);
    }
}