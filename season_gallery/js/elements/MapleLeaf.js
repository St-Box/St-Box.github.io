class MapleLeaf extends NatureElement {
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.scale(this.size, this.size);

        ctx.beginPath();
        ctx.moveTo(0, -3);
        ctx.bezierCurveTo(-2, -3, -4, -2, -4, 0);
        ctx.bezierCurveTo(-4, 2, -2, 3, 0, 3);
        ctx.bezierCurveTo(2, 3, 4, 2, 4, 0);
        ctx.bezierCurveTo(4, -2, 2, -3, 0, -3);
        
        ctx.fillStyle = `rgba(255, 69, 0, ${this.opacity})`;
        ctx.fill();
        ctx.restore();
    }
}