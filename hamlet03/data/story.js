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
        title: "Quantum Hamlet",
        media: {
                        type: 'image',
                        file: 'Story Cover.jpg',
                        position: 'top',
                        style: 'full',
                        caption: ''
                    },
        choices: [
            { text: "Begin the story", next: 'C1S1' }
        ]
    },

    'C1S1': {
        title: "Chapter 1: Hamlet's Return and the First Confrontation",
        text: "[Scene 1: Hamlet’s Return]\n\n \
        The air was thick with the scent of age and dust as Hamlet stood before the gates of the Elsin Research Institute.\n\n\
        His gaze swept over the estate—a place once teeming with life and discovery. Now, it felt like a tomb, the shadows of knowledge long forgotten.\n\n\
        It had been years since he had last walked these halls. Returning now, the weight of his father’s death pressed heavily on his chest.\n\n\
        His father, the great physicist and visionary, whose name had been dragged through the mud. His research cast aside as though it never mattered.\n\n\
        Hamlet muttered, 'How did it all come to this?'\n\n\
        He stepped through the door. The hinges groaned, echoing like a lament, mourning the loss of the institute’s brilliance.\n\n\
        Inside, the familiar creak of the floorboards reminded him of his childhood—days spent in the glow of his father’s passionate lectures on quantum physics.\n\n\
        But now, the institute felt alien. His father was gone, and with him, the spirit of discovery had faded.",
        media: {
                type: 'image',
                file: 'C1S1.png',
                position: 'float-left',
                style: 'full',
                caption: ''
                },
        choices: [
            { text: "Continue", next: 'C1S2' }
        ]
    },

    'C1S2': {
        title: "Chapter 1: Hamlet's Return and the First Confrontation",
        text:"[Scene 2: Discovery of the Secret Journal]\n \
        The lab was exactly as it had been the last time Hamlet had stepped into it—a place of scientific wonder, now silent and shrouded in dust.\n\n\
        Hamlet walked to the desk, his hands brushing the edges of papers and half-finished experiments. The instruments, once used to unlock the mysteries of the universe, now stood still, forgotten.\n\n\
        As he sifted through the clutter, a leather-bound notebook caught his eye, tucked beneath the chaos. His hands trembled as he opened it. The handwriting was unmistakably his father’s—precise and methodical. The first few pages contained calculations and theories, and then, at the last entry, Hamlet found an unfinished experiment. The breakthrough his father had been chasing—the proof of unity between quantum mechanics and the fabric of spacetime—lay before him.\n\n\
        But something was wrong. The data was flawed, corrupted. Hamlet’s breath caught. This wasn’t just a failed experiment—it was sabotage. His eyes scanned the pages, and there it was: the name he had feared. Claudius.",
        media: {
            type: 'image',
            file: 'C1S2.png',
            position: 'float-right',
            style: 'full',
            caption: ''
            },        
choices: [
            { text: "Continue", next: 'C1S3' }
        ]
    },

    'C1S3': {
        title: "Chapter 1: Hamlet's Return and the First Confrontation",
        text:"[Scene 3: The First Confrontation with Claudius]\n \
        Hamlet stormed through the halls of the institute, clutching the journal. His father’s work had been silenced. His death, shrouded in mystery. At the study, Claudius stood by the window, the evening light casting long shadows. He didn’t turn as Hamlet entered.\n\n\
        Claudius’s voice was smooth, unhurried. 'Ah, Hamlet. You’ve returned, just as I knew you would. But your father’s work is of no consequence now. It has been dismissed, forgotten.' Hamlet’s voice was sharp, trembling with fury. 'No, Claudius! You’ve buried it, destroyed it. You took everything from him—his name, his work, his legacy!'\n\n\
        Claudius turned, a cynical smile curling his lips. 'You misunderstand, Hamlet. Your father’s theories were fantasies. Dangerous ones. Science demands order, stability. His experiments sought to defy nature itself.' He stepped closer, his voice softening. 'I did what was necessary—for the good of science, for the stability of our world.'\n\n\
        Hamlet’s fists clenched. 'Necessary? Or were you just afraid? Afraid that my father’s discovery would shake the foundations of your ’order‘.' His voice grew louder. 'You murdered him—not with a knife, but with lies. You crushed his work because you were scared of the truth!'\n\n\
        Claudius’s eyes narrowed, his smile fading. 'You speak of truth, Hamlet, but you fail to see it. If you follow in your father’s footsteps, you’ll learn that chaos leads only to destruction.'\n\n\
        The tension thickened as they stood face to face. Hamlet’s heart thundered, his mind racing with the weight of revelation. His father’s truth. His revenge. His role in the battle for the soul of science.",
        media: {
            type: 'image',
            file: 'C1S3.png',
            position: 'float-right',
            style: 'full',
            caption: ''
            },
choices: [
            { text: "Continue to Chapter 2", next: 'C2S1' }
        ]
    },

    'C2S1': {
        title: "Chapter 2: The Quantum Ghost and the Philosophical Conflict",
        text: "[Scene 1: The Quantum Ghost Emerges]\n\n \
        Hamlet sat alone in the dimly lit lab, surrounded by the hum of dormant machinery and the faint blue glow of screens. \
        His father’s research notes lay scattered across the desk—chaotic sketches of spacetime distortions, theoretical formulas of quantum gravity, \
        and cryptic annotations that hinted at ideas too vast to comprehend.\n\
        He leaned closer to the primary monitor, running another simulation based on the notes. \
        Numbers and equations spiraled across the screen, but the output collapsed into a tangle of error messages, like every attempt before. Frustration weighed heavy on him.\n\n\
        Suddenly, the machine hummed louder. Unprompted, the screens flickered, and data began to realign itself. \
        Patterns emerged—fractals that seemed deliberate. Hamlet’s breath caught as a familiar equation filled the screen. \
        It was the one his father had theorized but never completed.\n\
        At that moment, the room seemed to shift. A resonance vibrated through the air, and from the speakers came a deep, calm voice.\n\n\
        **Father’s Voice**\n\
        (emanating from the machines, calm and steady)\n\
        'Hamlet... observation creates reality. But do not let revenge obscure your purpose. \
        The quantum field retains traces of my thoughts... fragments encoded in the entangled particles of this lab. I left you a path.'\n\n\
        Hamlet froze, staring at the flickering patterns. Could it really be his father? Not as a ghost of spirit, \
        but as quantum information imprinted on the machinery of the lab—a lingering echo of consciousness stored in the entangled particles.\n\n\
        **Father’s Voice**\n\
        'Quantum gravity... the unification of spacetime... hinges on understanding the observer. Without the observer, nothing is real. Through observation, you shape spacetime itself. The answers are here, waiting for you to see.'\n\n\
        Hamlet whispered to himself, trying to steady his thoughts.\n\n\
        **Hamlet**\n\
        'A projection? A remnant of you encoded in quantum entanglement? Father... you’re in the data, the fields... I don’t understand how this is possible.'\n\n\
        The screens responded as if alive. Diagrams of spacetime curvature and quantum entanglement filled every available surface. One display showed Einstein’s principle: 'Matter tells spacetime how to curve; spacetime tells matter how to move.' Beside it, an annotated addition in his father’s handwriting: 'Observation tells the universe how to exist.'\n\n\
        Hamlet’s mind raced. He recalled how quantum systems behaved—uncertain until observed, each observation collapsing probabilities into a single outcome. His father’s theory had always hinted at this: that spacetime itself might exist in a state of superposition, influenced by observers at a fundamental level.\n\n\
        But there was more. The diagrams now showed paths of information transfer between nodes, hinting at connections far beyond classical physics.\n\n\
        **Father’s Voice**\n\
        'Hamlet, spacetime is not a passive backdrop; it is an active participant. Gravitational waves ripple through it, quantum fields thread it together. \
        To unify them, you must embrace the uncertainty.'\n\n\
        The voice faded, leaving Hamlet alone with the flickering data. A resolve began to harden in him. \
        If his father’s theory was right, the implications would overturn everything Claudius and the scientific establishment stood for. But more than revenge, this was about unlocking the nature of reality itself.\n\n\
        He straightened, his hands trembling as they hovered over the console.\n\
        **Hamlet**\n\
        'Father... I will observe. I will shape reality. I will finish what you started.'\n\n\
        The room fell silent, the quantum ghost’s presence lingering as Hamlet returned to work, diving into the tangled web of equations with renewed determination.",
        media: {
            type: 'image',
            file: 'C2S1.png',
            position: 'float-left',
            style: 'full',
            caption: ''
            },
choices: [
            { text: "Continue", next: 'C2S2' }
        ]
    },

    'C2S2': {
        title: "Chapter 2: The Quantum Ghost of His Father and the Philosophical Conflict",
        text:  "[Scene 2: Ophelia’s Dilemma]\n\n \
        The morning sunlight filtered through the windows of Hamlet’s lab, painting patterns of light on the tangled wires and scattered notebooks. \
        Hamlet, however, was oblivious to the calm outside. His mind raced with the implications of the previous night. \
        Quantum entanglement, spacetime curvature, the role of the observer—all of it pointed to a reality far removed from the deterministic simplicity of classical physics.\n\n\
        As he delved into his father’s notes, adjusting simulations and running calculations, the door creaked open. Ophelia stepped in, \
        her face a mixture of concern and disbelief as she surveyed the cluttered room and the intense formulas flashing across the screens.\n\n\
        **Ophelia** (worried, with a hint of frustration)\n\
        'Hamlet, your experiment is challenging the very foundations of science! Classical physics has already explained the universe we observe. What you’re pursuing… it might just be an illusion.'\n\n\
        Hamlet turned to her, his eyes dark from sleepless nights but unwavering in their determination.\n\n\
        **Hamlet** (steady and resolute)\n\
        'Ophelia, classical physics cannot explain the singularity of a black hole. It cannot unify gravity and quantum mechanics. My father’s theory... It holds the key to the true nature of the universe.'\n\n\
        Ophelia’s voice trembled as she tried to reason with him.\n\
        **Ophelia**\n\
        'You keep saying observation changes reality, but that idea... it’s absurd! If the rules of the universe can shift so easily, how can we trust any scientific truth?'\n\n\
        Hamlet took a deep breath and moved closer, his tone softer but unyielding.\n\n\
        **Hamlet**\n\
        'Ophelia, science has never been about certainty. It’s about exploring the unknown. Observation doesn’t change reality; \
        it reveals the infinite possibilities within it. We must embrace the universe’s complexity, not run from it.'\n\n\
        Their words hung in the air like a silent clash of ideologies. Ophelia stood torn—admiring Hamlet’s passion yet fearful of where it might lead him. \
        For a moment, she hesitated, caught between her love for him and her allegiance to classical physics.",
        media: {
            type: 'image',
            file: 'C2S2.png',
            position: 'float-right',
            style: 'full',
            caption: ''
            },
choices: [
            { text: "Continue", next: 'C2S3' }
        ]
    },

    'C2S3': {
        title: "Chapter 2: The Quantum Ghost of His Father and the Philosophical Conflict",
        text: "[Scene 3: Claudius’s Control Escalates] \n\n\
        Elsewhere, Claudius received a report from one of his spies embedded in the research institute. The news was troubling: Hamlet was making progress. \
        If he succeeded in completing his father’s theory, it would shatter the foundation of classical physics and expose Claudius’s role in sabotaging his father’s experiment.\n\n\
        Claudius convened a secret meeting with his trusted allies.\n\n\
        **Claudius** (calm, calculating)\n\
        'Hamlet must be stopped. Classical physics is the cornerstone of our control over science, \
        our dominance over the academic world. If quantum physics rises unchecked, chaos will follow.'\n\n\
        One advisor suggested cutting Hamlet’s funding and seizing his equipment. Claudius dismissed the idea with a cold wave of his hand.\n\n\
        **Claudius**\n\
        'That won’t suffice. He has come too far. We need to send him a stronger message. \
        Arrange for someone to infiltrate his lab—let him see the cost of defiance.'\n\n\
        Under Claudius’s orders, an operative tampered with a critical piece of Hamlet’s equipment. \
        Days later, Hamlet discovered the sabotage when the machinery began to malfunction during a simulation. \
        Anger surged through him as he realized Claudius was behind this interference.\n\n\
        **Hamlet** (gritting his teeth, speaking to himself)\n\
        'Claudius... you can destroy my father’s legacy, but you can’t erase the truth! I will finish this experiment, no matter the cost.'",
        media: {
            type: 'image',
            file: 'C2S3.png',
            position: 'float-left',
            style: 'full',
            caption: ''
            },
choices: [
            { text: "Continue", next: 'C3S1' }
        ]
    },

    'C3S1': {
        title: "Chapter 3",
        text: `"[Scene 1: On the Edge of Quantum Discovery] \n\n\
        Night fell, and tension filled the air of the laboratory. Hamlet stood before his father’s quantum gravity apparatus,  the hum of machinery low and steady, the screen alive with dancing equations and oscillating data. 
        He took a deep breath, his finger hovering over the activation button.

        Just then, the door slammed open, and Claudius entered, flanked by his assistants.

        **Claudius**  (smirking)  
        "Hamlet, this is a fool’s errand. You are challenging the foundations of science itself! Classical physics has built civilization’s order, while your quantum chaos will only bring destruction."

        **Hamlet**  (turning, his gaze intense)  
        "The foundation of classical physics is already riddled with cracks. It cannot explain black holes or singularities, 
        nor can it unify the laws of spacetime and quantum mechanics. Quantum physics reveals the true nature of the universe—not your desire for control."

        The two stood locked in a silent clash, their presence making the lab feel charged with unseen energy.`,
        media: {
            type: 'image',
            file: 'C3S1.png',
            position: 'float-left',
            style: 'full',
            caption: ''
            },

choices: [
    { text: "Continue to Scene 2", next: 'C3S2' }
        ]
    },

    'C3S2': {
        title: "Chapter 3",
        text: `"[Scene 2: The Debate Between Classical and Quantum] \n\n\
        **Claudius**  (voice firm)  
        "Quantum theory is uncontrollable, riddled with uncertainty. Humanity needs stability, not the ephemeral chaos of wave functions! 
        The purpose of physics is to master nature, not let it master us."

        **Hamlet**  (steady, unwavering)  
        "Nature has never been under our control—we only delude ourselves into thinking it is. 
        Your ‘certainty’ is merely a refuge from complexity. Quantum physics teaches us that reality is determined by the observer. 
        This is not just a scientific truth but a philosophical one."


        **Claudius**  (furious)  
        "You’re twisting philosophy into science! Physics is empirical, not subject to an observer’s whim."

        
        **Hamlet**  
        "But you cannot deny that spacetime itself bends and warps under observation. As Einstein said, 
        'Matter tells spacetime how to curve; spacetime tells matter how to move.' 
        You fear quantum mechanics because it shatters the foundations you cling to."`,
        media: {
            type: 'image',
            file: 'C3S2.png',
            position: 'float-right',
            style: 'full',
            caption: ''
            },
choices: [
    { text: "Continue to Scene 3", next: 'C3S3' }
        ]
    },  


    'C3S3': {
        title: "Chapter 3",
        text: `"[Scene 3: The Clash and Spacetime’s Collapse]" \n\n\
        Claudius pulled a remote from his coat and pressed a button, signaling his team to sabotage the experiment. 
        Monitors blinked erratically, and alarms pierced the air. Hamlet rushed forward to intervene, his voice ringing with anger.

        **Hamlet**  (shouting)  
        "You cannot suppress the truth! The laws of the universe are etched into quantum waves, beyond your grasp!"

        The lab began to tremble as Claudius’s henchmen worked. The machinery emitted sparks, and the experiment teetered on the brink. 
        Hamlet charged toward Claudius, grappling with him to wrest control of the remote.

        The tension escalated as the lab environment itself started to warp. Light bent in strange waves, and time seemed to stutter. 
        The two combatants froze momentarily, their images blurred and flickering.

        **Hamlet**  (voice low but resolute)  
        "Now, our fates and spacetime itself are in superposition. Classical physics and quantum mechanics—our truths—will be decided by the observer."

        As the experiment surged into chaos, the narrative broke the fourth wall. The reader—the ultimate observer—was presented with choices, 
        determining the outcome of the experiment and the fates of Hamlet and Claudius:`,
        media: {
            type: 'image',
            file: 'C3S3.png',
            position: 'float-left',
            style: 'full',
            caption: ''
            },
    choices: [
        { text: "Observe with Measurement Type A", next: 'ending1' },
        { text: "Observe with Measurement Type B", next: 'ending2' },
        { text: "Not Observe and Remain The Superposition", next: 'ending3' }
            ]
    },

    
    'ending1': {
    title: "Ending 1: The Triumph of Quantum Reality",
    text: `
        The lab hummed with energy, the machinery louder than ever as the quantum gravity experiment reached its climax. 
        Hamlet’s finger pressed the activation button, and the entire room seemed to come alive—data flickering on screens, 
        the quantum field vibrating with raw power. The machines’ sound crescendoed, as if the universe itself were holding its breath.

        **Hamlet**  
        (whispering to himself)  
        "This is it, Father. The unification of all things, achieved in this moment."

        The quantum fluctuations surged, and the space around them began to twist. 
        It felt as though time itself was being torn apart, each moment existing in a state of superposition, unfolding in a thousand possible directions.

        Suddenly, a blinding light filled the room. The air became thick, heavy with the pulse of the quantum field. 
        Hamlet stood firm, his eyes fixed on the swirling patterns now covering the screens. 
        The equations his father had written, the ones he had struggled to complete, were now coming to life—each curve and number aligning in perfect harmony.

        **Father’s Voice**  
        (soft but clear, emanating from the equipment)  
        "Hamlet… you have done it. The universe is not fixed; it is malleable. The observer, through choice, shapes reality. 
        You have completed my work and, in doing so, unlocked the true nature of spacetime."

        The equipment flickered again, then stabilized. A new equation appeared on the screen—one never seen before. 
        It was the final piece of his father’s unification theory—a theory that merged quantum mechanics and gravity into one cohesive whole. 
        The very fabric of spacetime had been rewritten, and it was no longer just theory—it was real.
    `,
    choices: [
        { text: "Continue to the next phase", next: 'ending1_1' }
    ]
    },

    'ending1_1': {
        title: "The Shift in Classical Physics",
        text: `
            Meanwhile, Claudius stood frozen in the center of the lab, his face pale, eyes wide with shock and disbelief. 
            The walls of the lab seemed to vibrate in response to the new energy, and the once-fixed laws of physics began to display strange new properties. 
            Claudius instinctively stepped back, his gaze fixed on the screens, his face contorted in fear.

            **Claudius**  
            (voice trembling, unable to hide his fear)  
            "No... this cannot be. Classical physics... it was supposed to explain everything. But now... now it’s all in chaos..."

            **Hamlet**  
            (turning to face him, voice calm but resolute)  
            "This is not chaos, Claudius. This is truth. The universe was never as simple as you imagined. 
            You built your empire on the illusion of control, but control was always an illusion. We were never meant to understand everything. We were meant to explore."

            Hamlet turned back to the screen. The new theory was not just a scientific breakthrough; it was a philosophical revelation. 
            Reality was no longer fixed. Time could be rewritten, space could be bent, and the very laws that governed the cosmos were now subject to the observer’s will.
        `,
        choices: [
            { text: "The New Era Begins", next: 'ending1_2' }
        ]
    },

    'ending1_2': {
        title: "A New Era Begins",
        text: `
            As Hamlet’s theory unfolded, it was clear that the implications were profound. 
            This was not just a discovery within the lab—its effects were rippling out into the world beyond. 
            News outlets rapidly spread the word, scientists from all over the globe scrambling to understand this new development. 
            Classical physics was being supplemented and expanded upon by quantum mechanics, ushering in a new age of scientific exploration. 
            People began to question everything they knew about the universe, about time, about space, and about reality itself.

            For Hamlet, the victory was not just personal—it was a triumph of discovery, of embracing uncertainty, and of reshaping the future. 
            His father’s legacy was secure, but it was no longer just a theory—it had become reality.
        `,
        choices: [
            { text: "The Final Moment", next: 'ending1_3' }
        ]
    },

    'ending1_3': {
        title: "The Final Moment",
        text: `
            As the energy in the lab gradually dissipated, Hamlet felt a strange sense of peace. 
            What he had done was not just for revenge—it was to honor his father’s understanding of the universe: that the universe was never rigid, 
            but fluid, evolving, and ready to be explored.

            **Hamlet**  
            (whispering to himself, with a sense of finality)  
            "Thank you, Father. I have completed your work. Now, the universe... it is ours to explore."

            The screens dimmed, but the world they had revealed was only just beginning. 
            In that moment, Hamlet knew that nothing would ever be the same again. The past no longer mattered. 
            The future was now to be shaped by them, and it all began with the rise of quantum reality.
        `,
        choices: [
        ],
        isEnding: true  // 添加结局标记
    },

    'ending2': {
    title: "Ending 2: The Quantum Storm Erupts",
    text: `
        The lab was filled with a tense energy. The data on the screens flickered wildly, the hum of the machinery deafening. Hamlet pressed the activation button, and the quantum field's fluctuations surged, distorting space as if reality itself was being torn apart.

        **Hamlet**  
        (whispering to himself)  
        "This is it, Father. Everything is about to be revealed."

        Suddenly, a blinding light filled the room, and the data streams began to coalesce into the equations his father had left behind. But then, an alarm blared, and the equipment began malfunctioning. The quantum field’s instability intensified.
    `,
    choices: [
        { text: "Continue to the next phase", next: 'ending2_1' }
    ]
    },

    'ending2_1': {
        title: "Claudius's Counterattack",
        text: `
            At the peak of the quantum experiment, Claudius activated a hidden sabotage device, disrupting the core of the equipment. The data on the screens went haywire, and the experiment spiraled out of control.

            **Claudius**  
            (sneering, pleased with himself)  
            "Hamlet, this is the result of your stubbornness! Science needs order, not the chaos of a traitor like you!"

            **Hamlet**  
            (angrily responding)  
            "You can’t stop the truth with fear! Quantum physics is the future, and you’re clinging to outdated theories!"

            The two faced off, the lights of the lab flickering violently, and the space around them seemed to warp and tremble under the strain.
        `,
        choices: [
            { text: "The Failure of the Experiment", next: 'ending2_2' }
        ]
    },

    'ending2_2': {
        title: "The Failure of the Experiment and the Collapse of the Quantum Field",
        text: `
            The quantum fluctuations grew more erratic, time itself seemed to fracture, and the space began to collapse. A deafening crash reverberated through the lab, and the equipment exploded in a burst of energy. The experiment came to a halt. Hamlet was thrown to the ground by the shockwave. As he struggled to get up, he realized that the data had completely vanished from the screens.

            **Hamlet**  
            (muttering in despair)  
            "Just one step away... the truth still can’t be revealed."

            Claudius approached slowly, looking at the ruined lab with a victorious smile.

            **Claudius**  
            "You’ve lost, Hamlet. Science must follow the rules, not be played with like a toy."

            Hamlet lifted his head, still determined in his gaze.

            **Hamlet**  
            "You’ve lost too, Claudius. The truth will never be fully buried. Quantum physics’ future won’t end with this failure."
        `,
        choices: [
            { text: "Unresolved Mysteries and New Hope", next: 'ending2_3' }
        ],
    },

    'ending2_3': {
        title: "Unresolved Mysteries and New Hope",
        text: `
            The lab fell into silence. Despite the failure of the experiment, Hamlet's inner fire still burned. He knew that his father’s theory still held potential, and one day, someone would pick up where he left off.

            **Hamlet**  
            (softly to himself)  
            "Truth doesn’t disappear because of failure; it’s just waiting for the next observer."

            Claudius turned and left the lab, but Hamlet stayed behind, his gaze fixed on the destroyed equipment. He wiped the blood from his lip and made a silent vow: this wasn’t the end, but a new beginning.

            **Ending: The Victory of Failure**

            Although the experiment failed, Hamlet's efforts sparked a new wave of thought. The scientific community began to take quantum physics more seriously, and classical physics became more open and accepting. Hamlet’s failure became the catalyst for a new era, pushing the next generation of scientists to continue exploring the unknown.
        `,
        choices: [
        ],
        isEnding: true  // 添加结局标记
    },
    
    'ending3': {
    title: "Ending 3: The Eternal Superposition",
    text: `
        The story has no conclusion. The quantum field engulfed their forms, and Hamlet and Claudius ceased to be independent entities, merging into the eternal dance of countless possibilities. Time, space, and consciousness dissolved entirely, as if they were drawn into the singularity of a black hole, where all distinctions blurred and vanished into the infinite pull of uncertainty.

        What remained was the ceaseless resonance of the quantum wave function, echoing like the heartbeat of the universe. Every moment surrounded by infinite outcomes, each choice, each action suspended in a state of indeterminacy, as though caught within the light cone of an event that has no beginning or end.

        Without an observer, their story cannot be fixed or defined. It exists in superposition, suspended forever between endless possibilities, unable to collapse into a singular result. The truth of this experiment will never manifest unless there is intervention, unless eyes watch this moment—otherwise, it will remain forever in the chaotic flux of quantum superposition, where even the light cones of their potential futures become distorted and infinite.
    `,
    choices: [
        
    ],
    isEnding: true  // 添加结局标记
},
};