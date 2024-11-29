const STORY_CONTENT = {
    'start': {
        text: "在丹麦埃尔西诺城堡的一个寒冷夜晚，守卫们再次看见了已故国王的幽灵。这个消息很快传到了王子哈姆雷特的耳中。在量子叠加的迷雾中，你将如何面对这个可能改变一切的时刻？",
        choices: [
            { text: "相信这是父亲的幽灵", next: 'A' },
            { text: "怀疑这是量子幻象", next: 'B' },
            { text: "认为这是克劳迪斯的阴谋", next: 'C' }
        ]
    },

    'A': {
        text: "你选择相信幽灵。当你独自面对父亲的幽灵时，他揭示了一个骇人的真相：他是被自己的兄弟谋杀的。克劳迪斯在你父亲熟睡时，将毒药倒入他的耳中。这个启示让你的世界在经典和量子态之间震荡...",
        image: {
            url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9Imdob3N0R2xvdyIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjYjQ5NGZmIiBzdG9wLW9wYWNpdHk9IjAuMyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzI0MWI0MCIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE1MTIyOCIvPjxjaXJjbGUgY3g9IjQwMCIgY3k9IjIwMCIgcj0iMTAwIiBmaWxsPSJ1cmwoI2dob3N0R2xvdykiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMC4zOzAuNzswLjMiIGR1cj0iM3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9jaXJjbGU+PHBhdGggZD0iTTM1MCwxNTAgQzQwMCwxMDAgNDUwLDE1MCA0NTAsMjAwIEM0NTAsMjUwIDQwMCwzMDAgMzUwLDI1MCBDMzAwLDMwMCAyNTAsMjUwIDI1MCwyMDAgQzI1MCwxNTAgMzAwLDEwMCAzNTAsMTUwIFoiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuMiI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZCIgdmFsdWVzPSJNMzUwLDE1MCBDNDAwLDEwMCA0NTAsMTUwIDQ1MCwyMDAgQzQ1MCwyNTAgNDAwLDMwMCAzNTAsMjUwIEMzMDAsMzAwIDI1MCwyNTAgMjUwLDIwMCBDMjUwLDE1MCAzMDAsMTAwIDM1MCwxNTAgWjtNMzYwLDE0MCBDNDEwLDkwIDQ2MCwxNDAgNDYwLDE5MCBDNDY1LDI0MCA0MTAsMjkwIDM2MCwyNDAgQzMxMCwyOTAgMjYwLDI0MCAyNjAsMTkwIEMyNjAsMTQwIDMxMCw5MCAzNjAsMTQwIFoiIGR1cj0iM3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjwvc3ZnPg==",
            position: "top",
            style: "regular",
            caption: "父亲幽灵显现的场景"
        },
        choices: [
            { text: "保持疏远，专注复仇", next: 'A1' },
            { text: "告知真相，寻求帮助", next: 'A2' }
        ]
    },

    'B': {
        text: "你怀疑眼前的幽灵可能是量子态的投影。作为一个理性的思考者，你意识到在量子力学的世界里，观测会影响结果。也许这个幽灵同时存在于多个平行宇宙中，而你的选择将决定哪个现实会坍缩成真...",
        choices: [
            { text: "进行量子观测实验", next: 'B1' },
            { text: "探索平行时间线", next: 'B2' }
        ]
    },

    'C': {
        text: "你认为这是克劳迪斯精心设计的阴谋，利用民间对幽灵的恐惧来测试你的反应。但随着调查深入，你发现事情远比表面看起来要复杂得多...",
        choices: [
            { text: "暗中调查克劳迪斯", next: 'C1' },
            { text: "设计反向陷阱", next: 'C2' }
        ]
    },

    'A1': {
        text: "你决定独自承担复仇的重任。为了不让任何人卷入危险，你开始疏远所有人，包括深爱的奥菲利娅。但你发现，在装疯卖傻的过程中，现实似乎开始模糊，真与假的界限变得不再清晰...",
        choices: [
            { text: "继续伪装，策划剧场验证", next: 'A1_1' },
            { text: "寻找确凿证据", next: 'A1_2' }
        ]
    },

    'A2': {
        text: "你选择向奥菲利娅吐露真相。她震惊之余，提出了一个大胆的想法：利用量子观测原理，通过特殊的仪式让克劳迪斯在众人面前暴露真相。但这个计划有着不可预知的风险...",
        choices: [
            { text: "接受建议，准备量子仪式", next: 'A2_1' },
            { text: "婉拒建议，选择传统方式", next: 'A2_2' }
        ]
    },

    // 结局节点
    'A1_1': {
        text: "通过精心策划的剧场表演，你成功让克劳迪斯暴露了罪行。然而，在量子叠加态崩塌的那一刻，所有的命运线都交织在了一起。复仇成功了，但代价是所有人都被卷入了悲剧的漩涡之中...",
        choices: [
            { text: "重新开始", next: 'start' }
        ]
    },

    'A2_1': {
        text: "量子仪式产生了意想不到的效果。在多重现实的交汇点，真相不仅揭示了克劳迪斯的罪行，还展现了所有可能的时间线。你意识到，复仇只是众多可能性中的一种...",
        choices: [
            { text: "重新开始", next: 'start' }
        ]
    }

    // 继续加剧情节点...
};
