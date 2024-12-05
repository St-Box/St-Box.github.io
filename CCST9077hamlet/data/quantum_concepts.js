const QUANTUM_CONCEPTS = {
    quantum_gravity: {
        id: 'quantum_gravity',
        title: 'Quantum Gravity and the Theory of Spacetime Unification',
        image: 'data/images/concepts/gravity01.jpg',
        detailImage: 'data/images/concepts/gravity01.jpg',
        description: `
            <p>Scientific Background: Quantum gravity is a theory that aims to combine quantum mechanics and general relativity to describe how gravity and quantum effects interact under extreme conditions, such as near the singularity of a black hole. General relativity successfully describes gravity and the curvature of spacetime on a macroscopic scale, but it fails to account for quantum effects at the microscopic level. Quantum gravity theories attempt to fill this gap, with common frameworks including string theory and loop quantum gravity. String theory posits that fundamental particles are not point-like but consist of one-dimensional "strings," with their vibrational modes determining the properties of particles. Loop quantum gravity, on the other hand, suggests that spacetime itself is quantized, made up of discrete quantum units.</p>
            
            <p>Story Connection: Quantum gravity seeks to unify quantum mechanics and general relativity by describing the quantum nature of spacetime. In the story, Hamlet's father’s research involves this field, aiming to unravel the deep mysteries of the universe, especially the behavior of spacetime under extreme conditions, such as near black holes or singularities. Hamlet's father's death may be linked to the quantum gravity experiments he conducted, possibly near black holes, spacetime distortions, or singularities, as he attempted to unlock the secrets of spacetime. His research involves not only physics but also hints at the manipulation of fate and the "bending" of spacetime. This creates a powerful scientific background for Hamlet to uncover the truth behind his father's death and motivates his quest to explore how controlling spacetime might alter his own and others’ destinies.</p>
        `
    },
    superposition: {
        id: 'superposition',
        title: 'Quantum Superposition and Observation',
        image: 'data/images/concepts/superposition.jpg',
        detailImage: 'data/images/concepts/superposition.jpg',
        description: `
            <p>Scientific Background: Quantum superposition is a fundamental feature of quantum mechanics, stating that, without observation, particles can exist in multiple states simultaneously. For instance, a particle can be in two positions or two energy states at the same time, and it will "collapse" to one definite state when measured. This core concept in quantum mechanics represents the distinction between the "deterministic" nature of classical physics and the "uncertainty" of the quantum world. Quantum superposition is one of the most notable differences between quantum mechanics and classical physics.</p>
            
            <p>Schrödinger's Cat Experiment: To illustrate quantum superposition, physicist Erwin Schrödinger proposed the famous "Schrödinger's cat" thought experiment. The experiment imagines placing a cat in a sealed box with a radioactive atom, a detector, a cyanide bottle, and a hammer. If the detector detects the decay of the radioactive atom, it triggers the hammer to break the cyanide bottle, releasing poison and causing the cat to die. If the atom doesn't decay, the cat remains alive. According to quantum mechanics, before observation, the atom is in a superposition of both "decayed" and "undecayed" states, and thus the cat is in a superposition of both "alive" and "dead." Only when someone opens the box and observes the system does the cat's state "collapse" into one definite outcome, either alive or dead.</p>

            <p>This thought experiment is used to highlight an important feature of quantum superposition: until observed, the system can exist in multiple possible states, and only upon observation does the system choose one specific state. Although Schrödinger's cat is a theoretical construct, it helps us understand the quantum measurement problem and the role of the observer in the quantum world.</p>

            <p>Story Connection: Multiple Endings and the Audience's Observation: In the climax of the story, Hamlet's confrontation with Claudius could be portrayed through quantum superposition. The possible outcomes of the story rely not only on Hamlet's choices but also on the "observation" of the reader or audience. Just as in quantum superposition, before the confrontation, all possible endings exist simultaneously. It is only when the story is "observed" that it collapses into a definite outcome.</p>

        `
    },
    entanglement: {
        id: 'entanglement',
        title: 'Quantum Entanglement',
        image: 'data/images/concepts/entanglement.jpg',
        detailImage: 'data/images/concepts/entanglement.jpg',
        description: `
            <p>Scientific Background: Quantum entanglement is a phenomenon in quantum mechanics where two or more particles’ quantum states are tightly linked, such that measuring one particle instantly determines the state of the other, no matter how far apart they are. 
            This phenomenon defies classical physics, which assumes that information cannot travel faster than the speed of light, and it violates the "locality" principle. 
            Quantum entanglement is foundational to quantum information science and quantum computing and provides the theoretical basis for quantum communication.</p>
            
            <p>Story Connection: Father's "Quantum Entanglement": In Hamlet's father's research, there may be a special quantum entanglement phenomenon. 
            The relationship between Hamlet and his father could transcend traditional father-son dynamics, with a "quantum entanglement" linking them. 
            Hamlet’s father’s death may trigger this entanglement, influencing Hamlet’s actions. 
            Even in the process of revenge, Hamlet’s father’s "image" or "memory" could be connected to him through quantum entanglement, allowing them to remain in communication despite the father's physical death.</p>
        `
    },
    debate: {
        id: 'debate',
        title: 'Classical Physics vs. Quantum Physics',
        image: 'data/images/concepts/debate01.jpg',
        detailImage: 'data/images/concepts/debate01.jpg',
        description: `
            <p>Scientific Background: Classical physics (e.g., Newtonian mechanics and general relativity) assumes that the behavior of the universe is deterministic and predictable, with the state of the universe calculable from initial conditions. In contrast, quantum physics reveals randomness and uncertainty in the microscopic world. The phenomena of quantum superposition, entanglement, and the measurement problem highlight the fundamental differences between quantum mechanics and classical physics. To date, no theory has successfully unified quantum mechanics and general relativity (i.e., gravity), though quantum gravity theories aim to resolve this conflict, but they remain in an exploratory phase.</p>
            
            <p>Story Connection: Claudius vs. Hamlet’s Father: Claudius represents classical physics, firmly believing that the universe and human actions are predictable and controllable. Hamlet’s father, on the other hand, represents quantum physics, believing that the nature of the universe is filled with randomness and uncertainty. Throughout the story, Hamlet faces the conflict between these two worldviews. He must decide whether to accept the existence of randomness or whether to attempt to control fate through precise plans.</p>

            <p>Fate vs. Free Will Conflict: The determinism of classical physics and the uncertainty of quantum physics mirror Hamlet’s emotional struggles and decisions. Whether Hamlet can transcend this physical conflict and find a balance that allows him to determine the fate of himself and others will drive the final outcome.</p>

            
        `
    },
    // quantum02: {
    //     id: 'quantum02',
    //     title: '量子引力时空',
    //     image: 'data/images/concepts/computing.jpg',
    //     detailImage: 'data/images/concepts/superposition-detail.jpg',
    //     description: `
    //         <p>量子引力时空是量子力学中最基本也最令人困惑的现象之一。在经典物理学中，
    //         一个系统只能处于一个确定的状态，就像一枚硬币只能是正面朝上或反面朝上。
    //         但在量子世界中，一个量子系统可以同时处于多个状态的"叠加"之中，
    //         直到被观测时才会"坍缩"到某个确定的状态。</p>
            
    //         <p>著名的薛定谔猫思想实验就是用来说明量子叠加的悖论性：在实验中，
    //         猫可以同时处于"活着"和"死去"的叠加态，直到我们打开盒子观察时，
    //         才能确定猫的状态。这个思想实验揭示了量子力学中观测行为对量子系统的根本影响。</p>
    //     `
    // }
    // 添加更多概念...
};