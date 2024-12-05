class StoryBackgroundScene extends BaseScene {
    
//     <div class="background-image">
//     <img src="data/images/background/castle.jpg" alt="埃尔西诺城堡">
// </div>
constructor(container) {
    super(container);
    this.template = `
        <div class="background-scene">
            <div class="background-content">
                <div class="story-background-container">
                    <div class="scroll-content">

                        <div class="background-text">
                            <h2>Story Background</h2>
                            <div class="story-description">
                                <div class="setting-text">

                                    <h3>The Elsin Institute</h3>

                                    <p>The Elsin Institute, located at the forefront of global physics research, is a stage for the collision of quantum physics and classical physics. 
                                    Founded in the 1970s, the Institute was established by Hamlet's father, a leading figure in the world of physics, 
                                    who dedicated his life to researching quantum gravity and the unification of space-time theories. 
                                    As one of the few institutions in the world focusing on quantum gravity and space-time structure, 
                                    the Elsin Institute's academic achievements once significantly influenced the development of physics worldwide. 
                                    Hamlet's father frequently delivered keynotes at international physics conferences and received numerous academic honors. 
                                    However, as the dominance of classical physics began to be challenged, 
                                    the Institute gradually became the epicenter of a fierce intellectual clash between the two schools of thought.</p>

                                    <p>Over the past few decades, the Elsin Institute has made groundbreaking progress in quantum physics. 
                                    It became a battleground for the intense rivalry between classical and quantum physicists. 
                                    On one side, classical physicists like Claudius firmly believe that the theories of Newton and Einstein provide 
                                    the definitive framework for understanding the world, asserting that every phenomenon can be explained through precise causal relationships and deterministic principles. 
                                    On the other side, quantum physicists argue that the true nature of the universe surpasses the understanding of classical physics, 
                                    with the quantum world full of uncertainty, entanglement, and strange phenomena that classical laws cannot fully describe.</p>

                                    <p>The Elsin Institute, once founded by Hamlet's father as a place for revolutionary scientific breakthroughs, 
                                    has now become a battlefield for power struggles. Both political and academic pressures have increasingly influenced research directions and funding. 
                                    After Hamlet's father passed away, the future of the Institute became clouded, and progress in quantum gravity and space-time unification faced unprecedented resistance. 
                                    Hamlet now inherits his father's theoretical work, aiming to continue the unfinished research and uncover the truth behind his father's death.</p>

                                    <h3>Limitations of Classical Physics</h3>

                                    <p>Supporters of classical physics argue that quantum physics is too abstract and lacks practical, verifiable applications. 
                                    The vagueness and uncertainty inherent in quantum physics challenge the fundamental assumptions of classical physics, 
                                    which holds that all physical phenomena can be precisely described and predicted. 
                                    As a representative of classical physics, Claudius believes that quantum physics is not just an academic venture but a force that could shake the foundations of physics and impact humanity's understanding and control over the natural world. 
                                    To protect the traditional framework of physics, Claudius is willing to go to great lengths to suppress quantum gravity research, even resorting to data manipulation and blocking relevant studies to safeguard the dominance of classical physics.</p>

                                    <h3>Social and Political Context</h3>

                                    <p>In this world of ever-colliding science and philosophy, Claudius' role is not only to serve as Hamlet's obstacle in revenge 
                                    but also as a symbol of "power and control." 
                                    As Hamlet's uncle, Claudius understands the potential of quantum physics and the changes it could bring. 
                                    However, his aim is not to promote scientific progress but to preserve his position of power in the academic and social spheres.</p>

                                    <p>Claudius believes that once quantum physics is proven and verified, it will completely overturn the classical worldview, 
                                    undermining the influence and status he has built over the years in physics. 
                                    Thus, he not only suppresses quantum research through technical means but also manipulates the academic community to prevent the release of Hamlet's father's groundbreaking quantum gravity experiments. 
                                    When Hamlet's father was on his deathbed, Claudius orchestrated altering experimental data, effectively eliminating a theory that could challenge classical physics.</p>

                                    <p>In this environment, Hamlet must face the mystery surrounding his father's death and Claudius's suppression and persecution. 
                                    Every step is fraught with danger, and this confrontation will not only determine Hamlet's fate but also have profound implications on the future of the scientific world.</p>

                                </div>
                            </div>
                        </div>
                        
                        <div class="background-navigation">
                            <button class="nav-button back-button" title="返回封面">
                                <span class="button-icon">←</span>
                                <span class="button-text">Back</span>
                            </button>
                            <button class="nav-button next-button" title="认识角色">
                                <span class="button-text">Character Introduction</span>
                                <span class="button-icon">→</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>`;
}

    async enter() {
        // 设置场景HTML
        this.container.innerHTML = this.template;

        // 添加渐入效果
        setTimeout(() => {
            this.container.querySelector('.background-content').classList.add('visible');
        }, 100);

        // 绑定按钮事件
        this.container.querySelector('.back-button').addEventListener('click', () => {
            this.handleBack();
        });

        this.container.querySelector('.next-button').addEventListener('click', () => {
            this.handleNext();
        });
    }

    async handleBack() {
        const content = this.container.querySelector('.background-content');
        content.classList.add('fade-out');
        setTimeout(() => {
            window.sceneManager.switchTo('cover');
        }, 500);
    }

    async handleNext() {
        const content = this.container.querySelector('.background-content');
        content.classList.add('fade-out');
        setTimeout(() => {
            window.sceneManager.switchTo('characterIntro');
        }, 500);
    }

    async exit() {
        await new Promise(resolve => setTimeout(resolve, 500));
        this.container.innerHTML = '';
    }
}