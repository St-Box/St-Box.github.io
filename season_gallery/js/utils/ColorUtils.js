const ColorUtils = {
    lerp(start, end, t) {
        t = Math.max(0, Math.min(1, t)); // 确保t在0-1之间
        return start * (1 - t) + end * t;
    },

    lerpColor(color1, color2, t) {
        try {
            const c1 = this.hexToRgb(color1);
            const c2 = this.hexToRgb(color2);
            
            if (!c1 || !c2) return 'rgb(0, 0, 0)'; // 确保在转换失败时返回默认颜色
            
            t = Math.max(0, Math.min(1, t)); // 确保t在0-1之间
            
            const r = Math.round(this.lerp(c1.r, c2.r, t));
            const g = Math.round(this.lerp(c1.g, c2.g, t));
            const b = Math.round(this.lerp(c1.b, c2.b, t));
            
            return `rgb(${r}, ${g}, ${b})`;
        } catch (e) {
            console.warn('Color interpolation failed:', e);
            return 'rgb(0, 0, 0)'; // 发生错误时返回默认颜色
        }
    },

    hexToRgb(hex) {
        if (!hex) return null;
        
        // 移除可能的前导#号
        hex = hex.replace(/^#/, '');
        
        // 处理简写形式 (#RGB)
        if (hex.length === 3) {
            hex = hex.split('').map(char => char + char).join('');
        }
        
        // 验证hex格式
        if (!/^[0-9a-fA-F]{6}$/.test(hex)) {
            console.warn('Invalid hex color:', hex);
            return null;
        }
        
        return {
            r: parseInt(hex.slice(0, 2), 16),
            g: parseInt(hex.slice(2, 4), 16),
            b: parseInt(hex.slice(4, 6), 16)
        };
    }
};