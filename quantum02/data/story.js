const MEDIA_PATHS = {
    images: 'data/images/',
    videos: 'data/videos/',
    gifs: 'data/gifs/'
};

// 'start': {
//         title:"Quantum Hamlet",
//         text: "The story of the quantum realm has begun. The future is depended on your observation.",
//         media: {
//             type: 'image',
//             file: 'cover.jpg',
//             position: 'top',
//             style: 'full',
//             caption: ''
//         },
//         choices: [
//             { text: "开始剧本", next: 'A' }
//         ]
//     },

const STORY_CONTENT = {
'start': {
        title:"Quantum Hamlet",
        text: "The story of the quantum realm has begun. The future is depended on your observation.",
        media: {
            type: 'image',
            file: 'cover.jpg',
            position: 'top',
            style: 'full',
            caption: ''
        },
        choices: [
            { text: "开始剧本", next: 'C1S1' }
        ]
    },

    'C1S1': {
        title: "Chapter 1: Hamlet's Return and the First Confrontation",
        text: "[Scene 1: Hamlet’s Return]\n\n \
The air was thick with the scent of age and dust as Hamlet stood before the gates of the Elsin Research Institute. \
His gaze swept over the estate—a place once teeming with life and discovery. Now, it felt like a tomb, the shadows of knowledge long forgotten. \
\nIt had been years since he had last walked these halls, and now, returning, the weight of his father’s death pressed heavily on his chest. \
His father, the great physicist and visionary, whose name had been dragged through the mud, whose research had been cast aside as though it never mattered. \
Hamlet’s heart filled with both anger and confusion. \
\n'How did it all come to this?' he muttered, stepping through the door, which groaned under the pressure of his weight, as if mourning its own loss.\
 Inside, the familiar creak of the floorboards beneath his feet reminded him of his childhood, of days spent in the glow of a father’s passionate \
 lectures on quantum physics. Now, it felt like a different world. His father was gone, and with him, the world of discovery had begun to fade.",
 media: {
    type: 'image',
    file: 'castle.jpg',
    position: 'top',
    style: 'medium',
    caption: ''
},       
    choices: [
            { text: "Continue", next: 'C1S2' }
        ]
    },

    'C1S2': {
        title: "Chapter 1: Hamlet's Return and the First Confrontation",
text:"[Scene 2: Discovery of the Secret Journal]\n \
The lab was exactly as it had been the last time Hamlet had stepped into it—a place of scientific wonder, now silent, \
shrouded in dust and forgotten dreams. He walked to the desk, his hands brushing the edges of papers and half-finished experiments. \
The instruments once used to unlock the mysteries of the universe stood still, gathering dust. The world had moved on, and with it, \
his father’s work had been abandoned.   \
\nAs Hamlet sifted through the clutter, he came upon a leather-bound notebook, tucked away beneath the clutter. \
It was his father’s handwriting, unmistakable and precise. His hands trembled slightly as he opened the first page. \
What he read sent a chill down his spine: calculations, theories, and—there, at the last entry—an unfinished experiment. \
\nA breakthrough that could have changed the world, a proof of the unity between quantum mechanics and the fabric of spacetime. \
His father had been on the verge of proving it. But the data was flawed—corrupted.  \
\nHamlet's breath caught in his throat. This wasn’t just a failed experiment. This was a betrayal. Someone had tampered with the data. \
Someone had intentionally sabotaged his father’s work. And as his eyes scrolled down the pages, the name that floated to the surface, \
unbidden but undeniable, was the one he had feared—Claudius.",        
choices: [
            { text: "Continue", next: 'C1S3' }
        ]
    },

    'C1S3': {
        title: "Chapter 1: Hamlet's Return and the First Confrontation",
text:"[Scene 3: The First Confrontation with Claudius]\n \
Hamlet stormed through the halls of the Institute, the journal clutched tightly in his hand. \
The weight of the discovery was overwhelming. His father’s work had been silenced, his death \
shrouded in mystery—and Claudius, the man who now held the reins of power, was the key.\n\
He reached the study, where Claudius stood by the window, the evening light casting long shadows \
across the room. He didn’t turn as Hamlet entered, but his presence was a silent challenge.\
\n'Ah, Hamlet,' Claudius said, his voice smooth, as though he had been expecting him. 'You’ve returned, \
just as I knew you would. But you must understand, your father’s work is of no consequence here. It has been dismissed, forgotten.'\
Hamlet's voice was sharp, filled with the anger he could no longer keep contained. 'No, Claudius! You’ve buried it, \
destroyed it. You’ve taken everything from him. His name, his work, his legacy—it’s all been erased!'\
\nClaudius turned to face him, a small, cynical smile curling at the corners of his lips. 'You misunderstand, Hamlet. Your father’s \
theories were never meant to stand. They were fantasies. Dangerous ones, at that. Science is about order, stability. We cannot entertain such... chaos. \
Your father’s experiments—he was trying to defy nature itself. And I—' His voice softened as he stepped closer, '—I did what was necessary. \
For the good of science, for the stability of our world.'\
\nHamlet’s fist clenched. 'Necessary? Or is it just your fear of the unknown, Claudius? \
You’re afraid that what my father discovered would shake the very foundation of your precious ‘order.’'His voice grew louder. '\
You murdered him, not with a knife, but with your lies. You crushed his work, and you did it because you were scared. Scared of what the truth \
could do to your world.' \
\nClaudius’ eyes narrowed, his smile disappearing. 'You speak of truth, Hamlet, but you fail to see it. You’ve let your father’s madness cloud your judgment.\
 If you choose to follow in his footsteps, you’ll learn that chaos will only lead to destruction. There’s no place for it in our world.'\
\nThe tension in the room thickened as they stood facing each other, neither willing to back down. Hamlet’s heart thundered in his chest, \
his mind racing with the weight of the revelations he had uncovered. He could feel the conflict boiling within him—his father’s truth, \
his revenge, and his place in the battle for science’s soul.",        choices: [
            { text: "Continue to Chapter 2", next: 'C2S1' }
        ]
    },

    'C2S1': {
        title: "Chapter 2: The Quantum Ghost of His Father and the Philosophical Conflict",
        text:"Scene 1: The Quantum Ghost Appears\n \
        Hamlet continued to immerse himself in his father’s experiment records, yet he found himself increasingly trapped. \
        Despite the many clues in his father's notebooks, every time he attempted to verify his father's theory on quantum gravity and spacetime unification, \
        the data remained unstable, filled with unexplained fluctuations. It seemed as if some invisible force was interfering with his progress,\
         and the truth he sought was becoming more elusive.\n \
        One night, as Hamlet sat in the lab, staring at the chaotic data before him, he leaned forward, his mind weary. \
        Suddenly, the data on the screen began to shift. The fluctuations started forming a pattern, and eventually, \
        they aligned into a set of mathematical equations—his father’s unfinished research. Hamlet froze, astonished. \
        The equations weren’t just a random pattern, they were something more—a message, a feedback loop from his father.\
        \nHamlet (whispers to himself, almost in disbelief) \
        This... this is my father's formula? How could there be such fluctuations? \
        Could my father’s mind still be present in this data? \
        As Hamlet pondered these thoughts, the hum of the lab equipment grew louder, \
        and a voice emerged from the machines—clear and deep—seemingly transmitted through the quantum waves of the data. \
        It was his father’s voice, transcending time and space.\
        \nFather’s Voice\
        (emanating from the machines, calm and reassuring)\
        Hamlet... you must understand, the truth is not fixed. It depends on the observer’s choice.\
        You can determine the course of history, but you must dare to observe, dare to face uncertainty.\
        Do not let vengeance cloud your vision. Continue my work, not only for revenge, but to understand the deep secrets of the universe.\
        Hamlet’s heart raced, his rational mind and emotions swirling together. He had heard his father’s voice, but not from a physical presence—his father, \
        somehow, had crossed into a quantum state, still able to communicate through the very data he had left behind.",        choices: [
            { text: "Continue", next: 'C2S2' }
        ]
    },

    'C2S2': {
        title: "Chapter 2: The Quantum Ghost of His Father and the Philosophical Conflict",

        choices: [
            { text: "Continue", next: 'C2S3' }
        ]
    },

    'C2S3': {
        title: "Chapter 2: The Quantum Ghost of His Father and the Philosophical Conflict",
        text: "Hamlet reached a profound realization. Just as in quantum physics, where wave-particle duality allows particles to exist in multiple states depending on the observer's choice, his own choices shaped the reality around him. 'To observe, or not to observe?' It was more than a question of existence—it was a question of control, of how he would engage with the universe and his own future.",
        choices: [
            { text: "Continue", next: 'C2S4' }
        ]
    },

    'C2S4': {
        title: "Chapter 2: The Quantum Ghost of His Father and the Philosophical Conflict",
        text: "As Hamlet's research progressed, Claudius's interventions grew more direct, blocking resources and sending spies. But Hamlet's resolve only grew stronger. His father's voice came through the machines once more: 'Remember, you can choose how to face Claudius's threats. What you face is not just an enemy, but a choice in destiny. How you observe, how you act, will change the path ahead.'",
        choices: [
            { text: "End of story", next: 'end' }
        ],
        media: {
            type: 'gif',
            file: 'dual.gif',
            position: 'float-left',
            style: 'full',
            caption: ''
        },    
    },

    'end': {
        title: "The End",
        text: "You have completed the story of Quantum Hamlet. The future remains uncertain, shaped by the choices of those who dare to observe.",
        choices: [
            { text: "Start over", next: 'start' }
        ]
    }
};