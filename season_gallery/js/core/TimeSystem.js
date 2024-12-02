class TimeSystem {
    static getSeasonInfo(seasonValue) {
        const seasons = ['Winter', 'Spring', 'Summer', 'Fall', 'Winter'];
        const index = Math.floor(seasonValue);
        const nextIndex = (index + 1) % seasons.length;
        const progress = seasonValue - index;
        
        return {
            currentSeason: seasons[index],
            nextSeason: seasons[nextIndex],
            progress: progress
        };
    }

    static getTimeColors(time) {
        // 确保时间在0-24范围内
        time = Math.max(0, Math.min(24, time));

        const timeColors = {
            0: { primary: '#1a237e', secondary: '#000051' }, // Night
            6: { primary: '#ff7043', secondary: '#ffd54f' }, // Sunrise
            12: { primary: '#4fc3f7', secondary: '#b3e5fc' }, // Noon
            18: { primary: '#ff7043', secondary: '#bf360c' }, // Sunset
            24: { primary: '#1a237e', secondary: '#000051' }  // Night
        };

        // 找出时间区间
        const timePoints = Object.keys(timeColors).map(Number).sort((a, b) => a - b);
        let lowerTime = timePoints[0];
        let upperTime = timePoints[timePoints.length - 1];

        for (let i = 0; i < timePoints.length - 1; i++) {
            if (time >= timePoints[i] && time <= timePoints[i + 1]) {
                lowerTime = timePoints[i];
                upperTime = timePoints[i + 1];
                break;
            }
        }

        // 计算插值进度
        const progress = (time - lowerTime) / (upperTime - lowerTime);

        try {
            return {
                primary: ColorUtils.lerpColor(
                    timeColors[lowerTime].primary,
                    timeColors[upperTime].primary,
                    progress
                ),
                secondary: ColorUtils.lerpColor(
                    timeColors[lowerTime].secondary,
                    timeColors[upperTime].secondary,
                    progress
                )
            };
        } catch (e) {
            console.warn('Error calculating time colors:', e);
            // 返回默认颜色
            return {
                primary: 'rgb(0, 0, 0)',
                secondary: 'rgb(0, 0, 0)'
            };
        }
    }
}