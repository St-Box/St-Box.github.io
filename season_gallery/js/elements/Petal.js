class Petal extends NatureElement {
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 2, this.size, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 192, 203, ${this.opacity})`;
        ctx.fill();
        ctx.restore();
    }
}