const STORY_CONTENT = {
    'start': {
        text: "深夜的城堡中,你遇到了父亲的身影。但这个形象似乎同时存在又不存在,像是某种量子态的投影...",
        choices: [
            { text: "尝试与量子态沟通", next: 'B' },
            { text: "展开科学调查", next: 'C' },
            { text: "装疯卖傻以掩护调查", next: 'D' }
        ]
    },

    'B': {
        text: "你尝试与父亲的量子态对话。这个身影忽明忽暗,似乎存在于多个时空中...",
        choices: [
            { text: "询问死亡真相", next: 'B1' },
            { text: "探索其他时空", next: 'B2' }
        ]
    },

    'C': {
        text: "你开始调查王国的量子技术。在图书馆中,你发现了一些奇怪的实验记录...",
        choices: [
            { text: "深入研究量子理论", next: 'C1' },
            { text: "追查实验的参与者", next: 'C2' }
        ]
    },

    'D': {
        text: "你假装精神失常,在城堡中自由行动。某天,你发现了一面能显示多重时空的魔镜...",
        choices: [
            { text: "利用魔镜探查真相", next: 'D1' },
            { text: "与奥菲莉娅分享发现", next: 'D2' }
        ]
    },

    'B1': {
        text: "父亲的量子态告诉你一个惊人的事实:他同时存在于生与死的状态,是克劳狄斯的量子武器造成的...",
        choices: [
            { text: "寻找逆转量子武器的方法", next: 'E' },
            { text: "设法营救父亲的意识", next: 'F' }
        ]
    },

    'B2': {
        text: "你意外进入了一个平行时空,在那里看到了另一个版本的自己...",
        choices: [
            { text: "与另一个自己合作", next: 'G' },
            { text: "独自继续调查", next: 'C1' }
        ]
    },

    'C1': {
        text: "研究量子理论让你对现实有了新的认识。你发现城堡中的某些地点是量子节点...",
        choices: [
            { text: "实验量子传送", next: 'H' },
            { text: "制造量子探测器", next: 'I' }
        ]
    },

    'C2': {
        text: "你发现宫廷科学家波罗纽斯参与了量子实验,而他的女儿奥菲莉娅似乎也知道一些秘密...",
        choices: [
            { text: "与奥菲莉娅结盟", next: 'D2' },
            { text: "监视波罗纽斯", next: 'J' }
        ]
    },



    'E': {
        text: "在搜寻对抗量子武器的过程中,你发现了王室实验室的位置。这里储存着许多危险的量子装置...",
        choices: [
            { text: "销毁量子武器", next: 'E1' },
            // { text: "学习使用量子武器", next: 'E2' },
            { text: "触摸量子时空装置",next:'B2'}
        ]
    },

    'F': {
        text: "你试图将父亲的量子态意识转移到某个载体中。魔镜似乎对量子态有反应...",
        choices: [
            { text: "使用魔镜做实验", next: 'K' }
        ]
    },

    'G': {
        text: "另一个时空的你提出了一个大胆的计划:同时在多个时空中行动,让克劳狄斯陷入量子悖论...",
        choices: [
            { text: "执行多重时空计划", next: 'L' }
        ]
    },

    'H': {
        text: "量子传送试验意外成功,但你发现自己来到了父亲死亡的那个夜晚...",
        choices: [
            { text: "尝试改变历史", next: 'M' }
        ]
    },

    'I': {
        text: "量子探测器显示奥菲莉娅身上有强烈的量子纠缠信号,她可能与另一个时空的自己产生了联系...",
        choices: [
            { text: "与奥菲莉娅合作研究量子纠缠", next: 'N' }
        ]
    },

    'J': {
        text: "跟踪波罗纽斯时,你发现他在秘密记录所有的量子实验。这些记录可能是关键证据...",
        choices: [
            { text: "窃取实验记录", next: 'O' }
        ]
    },

    'K': {
        text: "父亲的意识成功转移到魔镜中,但代价是镜中的你与他互换了位置...",
        choices: [
            { text: "接受命运,在镜中探索真相", next: 'P' },
            { text: "寻找逆转的方法", next: 'Q' }
        ]
    },

    'L': {
        text: "多重时空计划开始执行,但克劳狄斯似乎预料到了这一点。他启动了某种量子防御系统...",
        choices: [
            { text: "继续执行计划", next: 'R' }
        ]
    },

    'M': {
        text: "改变历史的尝试创造了一个新的时间分支,但也引发了量子悖论。现在父亲同时存在于三个状态:活着、死去、以及量子态...",
        choices: [
            { text: "设法解决悖论", next: 'S' }
        ]
    },

    'N': {
        text: "与奥菲莉娅研究量子纠缠让你意识到一个可怕的真相:她在所有时空中的命运都是纠缠的,改变一个时空中的结局可能影响所有结局...",
        choices: [
            { text: "尝试拯救所有时空的奥菲莉娅", next: 'T' }
        ]
    },

    'O': {
        text: "实验记录揭示了一个惊人的计划:克劳狄斯想要创造一个完全量子化的王国,让所有臣民都处于量子叠加态...",
        choices: [
            { text: "阻止克劳狄斯的计划", next: 'U' }
        ]
    },

    'P': {
        text: "在镜中世界,你发现自己能同时观察到所有时空的事件。你看到克劳狄斯正在不同的时空中执行同一个计划...",
        choices: [
            { text: "专注观察克劳狄斯的行动", next: 'V' }
        ]
    },

    'Q': {
        text: "寻找逆转方法的过程中,你意外发现镜中世界才是最初的现实,而外面的世界是量子投影...",
        choices: [
            { text: "接受这个真相并重新制定计划", next: 'W' }
        ]
    },

    'R': {
        text: "多重时空计划陷入混乱,但意外触发了奥菲莉娅所有时空版本的共鸣。她似乎成为了连接各个时空的关键...",
        choices: [
            { text: "与奥菲莉娅合作", next: 'X' },
            { text: "独自应对危机", next: 'Y' }
        ]
    },

    'S': {
        text: "量子悖论开始影响整个王国,现实变得越来越不稳定。克劳狄斯趁机准备启动他的终极计划...",
        choices: [
            { text: "立即阻止克劳狄斯", next: 'S_1' }
        ]
    },
    'S_1': {  //Y的复制
        text: "一番对决之后，你战胜了克劳狄斯，他的命运现在掌握在你手中了。独自面对危机让你意识到复仇的空虚。也许还有其他方式来实现正义...\n你的选择是:",
        choices: [
            { text: "寻求和解之道", next: 'GG' },
            { text: "坚持复仇计划", next: 'HH' }
        ]
    },

    'T': {
        text: "尝试拯救奥菲莉娅的过程让你领悟到量子纠缠的真正意义：所有人的命运都是相连的...",
        choices: [
            { text: "说服奥菲莉娅一起拯救王国", next: 'AA' }
        ]
    },

    'U': {
        text: "阻止克劳狄斯的过程中,你发现他的计划其实源于对死亡的恐惧。他想通过量子化来获得永生...",
        choices: [
            { text: "通过镜中世界观察克劳狄斯的计划", next: 'V' },
            { text: "与克劳狄斯进行对决，试图强行终止计划", next: 'S_1' }
        ]
    },

    'V': {
        text: "通过镜中世界的观察,你终于理解了克劳狄斯计划的全貌：他要将整个王国转化为一个巨大的量子计算机,所有人都将成为其中的量子比特...",
        choices: [
            { text: "寻求其他时空的盟友", next: 'DD' }
        ]
    },

    'W': {
        text: "既然镜中世界才是真实,这意味着你父亲的量子态可能是最接近他真实存在的状态...",
        choices: [
            { text: "尝试在量子态中与父亲重聚", next: 'EE' }
        ]
    },

    'X': {
        text: "奥菲莉娅展示了她作为量子纠缠核心的能力：她可以协调所有时空的行动,创造完美的时机...",
        choices: [
            { text: "发起最后的行动", next: 'FF' }
        ]
    },

    'Y': {
        text: "独自面对危机让你意识到复仇的空虚。也许还有其他方式来实现正义...",
        choices: [
            { text: "寻求和解之道", next: 'GG' },
            { text: "坚持复仇计划", next: 'HH' }
        ]
    },
    // 结局节点
    'DD': {
        text: "来自多个时空的盟友集结完毕。就在此时,量子计算机计划已经开始启动,整个王国正在被改写成量子数据...",
        choices: [
            { text: "启动拯救计划", next: 'ENDING1' }
        ]
    },

    'EE': {
        text: "在量子态的永恒当下中,你终于理解了父亲一直想告诉你的事:生命的本质不在于形态,而在于联结...",
        choices: [
            { text: "接受量子永生", next: 'ENDING2' }
        ]
    },

    'FF': {
        text: "通过奥菲莉娅的量子纠缠能力,所有时空的行动完美同步。这不仅是一次复仇,而是整个王国的觉醒时刻...",
        choices: [
            { text: "引导集体觉醒", next: 'ENDING3' }
        ]
    },

    'GG': {
        text: "在认识到所有存在都是量子纠缠的一部分后,你找到了超越复仇的道路。克劳狄斯的计划或许可以被导向更好的方向...",
        choices: [
            { text: "实现和解转化", next: 'ENDING4' }
        ]
    },

    'HH': {
        text: "最终的复仇计划启动了,但当克劳狄斯的量子态崩溃时,你发现这个代价远超预期...",
        choices: [
            { text: "面对复仇的代价", next: 'ENDING5' }
        ]
    },

    'ENDING1': {
        text: "在多个时空的协同努力下,你成功阻止了量子计算机计划。但为了稳定现实,你不得不牺牲自己,永远留在量子态中守护这个世界。城堡的每面镜子中,都能隐约看到你的身影,就像曾经的父亲一样。而这次,这个选择是你自己做出的。",
        choices: []
    },

    'ENDING2': {
        text: "在量子态的永恒中,你与父亲的意识融合,成为了时空的观察者。你们既不完全存在,也不完全消失,而是成为了连接过去与未来的桥梁。后人说,在月光下的城堡中,依然能看到两个身影在温柔地交谈,讨论着生命的奥秘。",
        choices: []
    },

    'ENDING3': {
        text: "奥菲莉娅的量子纠缠引发了连锁反应,整个王国的居民都觉醒了量子意识。这不是克劳狄斯想要的控制,而是一种真正的进化。在这个新的存在状态中,每个人都能感受到彼此的联系,过去的恩怨在更宏大的视角下化解。你终于明白,复仇不是终点,而进化才是。",
        choices: []
    },

    'ENDING4': {
        text: "你说服克劳狄斯将量子计算机用于沟通和理解,而非控制。王国转变为一个量子意识的实验场,在这里,生死的界限变得模糊,但理解变得更加深刻。你的父亲依然以量子态存在,但这不再是一个悲剧,而是一种新的存在方式。在某种意义上,所有人都得到了救赎。",
        choices: []
    },

    'ENDING5': {
        text: "复仇成功了,克劳狄斯的量子态彻底崩溃。但这也导致了量子纠缠链的断裂,包括你父亲的量子态也永远消失了。奥菲莉娅也因量子纠缠效应消逝。你获得了正义,却失去了所有可能的其他可能性。在空旷的王宫中,你终于明白了复仇的代价。",
        choices: []
    }

    // 继续加剧情节点...
};
