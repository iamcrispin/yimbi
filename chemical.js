let questions = [
    {
        numb: 1,
        question: "Chemical kinetics is primarily concerned with:",
        answer: "B. Rates of chemical reactions",
        options: [
            "A. Chemical equilibrium",
            "B. Rates of chemical reactions",
            "C. Phase equilibrium",
            "D. Energy balances"
        ]
    },
    {
        numb: 2,
        question: "Chemical Reaction Engineering (CRE) is mainly concerned with:",
        answer: "C. Design and analysis of chemical reactors",
        options: [
            "A. Separation processes",
            "B. Fluid mechanics",
            "C. Design and analysis of chemical reactors",
            "D. Thermodynamics only"
        ]
    },
    {
        numb: 3,
        question: "A chemical reactor is a device in which:",
        answer: "C. Change in composition occurs by chemical reaction",
        options: [
            "A. Heat transfer occurs",
            "B. Pressure is increased",
            "C. Change in composition occurs by chemical reaction",
            "D. Mass is stored"
        ]
    },
    {
        numb: 4,
        question: "The reactor is called the heart of a chemical process because:",
        answer: "C. Chemical transformation occurs in it",
        options: [
            "A. It stores reactants",
            "B. It controls pressure",
            "C. Chemical transformation occurs in it",
            "D. It controls flow rate"
        ]
    },
    {
        numb: 5,
        question: "The extensive rate of reaction refers to:",
        answer: "B. Observed rate of formation of a species",
        options: [
            "A. Rate per unit volume",
            "B. Observed rate of formation of a species",
            "C. Rate constant",
            "D. Reaction order"
        ]
    },
    {
        numb: 6,
        question: "The intensive rate of reaction is obtained by dividing extensive rate by:",
        answer: "C. A normalizing quantity",
        options: [
            "A. Time",
            "B. Temperature",
            "C. A normalizing quantity",
            "D. Pressure"
        ]
    },
    {
        numb: 7,
        question: "When a reactant is consumed, its rate of reaction is:",
        answer: "C. Negative",
        options: [
            "A. Positive",
            "B. Zero",
            "C. Negative",
            "D. Constant"
        ]
    },
    {
        numb: 8,
        question: "A homogeneous reaction takes place in:",
        answer: "B. One phase only",
        options: [
            "A. Two phases",
            "B. One phase only",
            "C. Three phases",
            "D. Gas–solid systems"
        ]
    },
    {
        numb: 9,
        question: "A heterogeneous reaction requires:",
        answer: "C. At least two phases",
        options: [
            "A. High temperature",
            "B. A catalyst",
            "C. At least two phases",
            "D. High pressure"
        ]
    },
    {
        numb: 10,
        question: "Enzyme–substrate reactions are difficult to classify because:",
        answer: "C. They lie between homogeneous and heterogeneous systems",
        options: [
            "A. They are very slow",
            "B. They occur at high temperatures",
            "C. They lie between homogeneous and heterogeneous systems",
            "D. They are photochemical"
        ]
    },
    {
        numb: 11,
        question: "A catalyst is a substance that:",
        answer: "C. Alters reaction rate without being consumed",
        options: [
            "A. Is consumed during reaction",
            "B. Changes equilibrium constant",
            "C. Alters reaction rate without being consumed",
            "D. Acts as a reactant"
        ]
    },
    {
        numb: 12,
        question: "Which of the following does NOT affect reaction rate?",
        answer: "D. Colour of reactants",
        options: [
            "A. Concentration",
            "B. Temperature",
            "C. Catalytic activity",
            "D. Colour of reactants"
        ]
    },
    {
        numb: 13,
        question: "Reaction rate usually increases with:",
        answer: "B. Increase in reactant concentration",
        options: [
            "A. Decrease in concentration",
            "B. Increase in reactant concentration",
            "C. Decrease in pressure",
            "D. Decrease in surface area"
        ]
    },
    {
        numb: 14,
        question: "The rate of oxidation of nitric oxide decreases with increase in:",
        answer: "C. Temperature",
        options: [
            "A. Pressure",
            "B. Concentration",
            "C. Temperature",
            "D. Surface area"
        ]
    },
    {
        numb: 15,
        question: "The oxidation of SO₂ to SO₃ is catalyzed by:",
        answer: "C. Vanadium pentoxide (V₂O₅)",
        options: [
            "A. Nickel",
            "B. Platinum",
            "C. Vanadium pentoxide (V₂O₅)",
            "D. Iron"
        ]
    },

    /* ---------- CALCULATION QUESTIONS ---------- */

    {
        numb: 16,
        question: "If 10 moles of A are consumed in 5 seconds, what is the rate of reaction?",
        answer: "B. -2 mol/s",
        options: [
            "A. 2 mol/s",
            "B. -2 mol/s",
            "C. -50 mol/s",
            "D. 50 mol/s"
        ]
    },
    {
        numb: 17,
        question: "A reactant concentration decreases from 6 mol/L to 4 mol/L in 4 seconds. What is the average rate?",
        answer: "B. -0.5 mol/L·s",
        options: [
            "A. 0.5 mol/L·s",
            "B. -0.5 mol/L·s",
            "C. -2 mol/L·s",
            "D. 2 mol/L·s"
        ]
    },
    {
        numb: 18,
        question: "If RA = -20 mol/s in a 10 m³ reactor, what is rA?",
        answer: "B. -2 mol/m³·s",
        options: [
            "A. -200 mol/m³·s",
            "B. -2 mol/m³·s",
            "C. 2 mol/m³·s",
            "D. 200 mol/m³·s"
        ]
    },
    {
        numb: 19,
        question: "A product is formed at 8 mol/s. What is the sign of the rate?",
        answer: "C. Positive",
        options: [
            "A. Negative",
            "B. Zero",
            "C. Positive",
            "D. Undefined"
        ]
    },
    {
        numb: 20,
        question: "If 15 moles of reactant are consumed in 3 seconds, the rate is:",
        answer: "B. -5 mol/s",
        options: [
            "A. 5 mol/s",
            "B. -5 mol/s",
            "C. -45 mol/s",
            "D. 45 mol/s"
        ]
    },

    /* ---------- THEORY CONTINUES ---------- */

    {
        numb: 21,
        question: "Finely divided coal burns faster than lump coal because of:",
        answer: "B. Larger surface area",
        options: [
            "A. Higher temperature",
            "B. Larger surface area",
            "C. Higher density",
            "D. Higher pressure"
        ]
    },
    {
        numb: 22,
        question: "Reactions accelerated by light are called:",
        answer: "C. Photochemical reactions",
        options: [
            "A. Thermal reactions",
            "B. Catalytic reactions",
            "C. Photochemical reactions",
            "D. Homogeneous reactions"
        ]
    },
    {
        numb: 23,
        question: "The hydrogen–chlorine reaction proceeds rapidly when exposed to:",
        answer: "C. Light",
        options: [
            "A. Pressure",
            "B. Heat",
            "C. Light",
            "D. Catalyst"
        ]
    },
    {
        numb: 24,
        question: "The mathematical expression relating reaction rate to parameters is called:",
        answer: "C. Rate law",
        options: [
            "A. Design equation",
            "B. Energy balance",
            "C. Rate law",
            "D. Stoichiometric equation"
        ]
    },
    {
        numb: 25,
        question: "Chemical kinetics is mainly used by chemical engineers for:",
        answer: "B. Reactor design",
        options: [
            "A. Separation design",
            "B. Reactor design",
            "C. Material testing",
            "D. Process control only"
        ]
    },

    /* ---------- ADDED QUESTIONS 26–50 ---------- */

    {
        numb: 26,
        question: "Reaction rate generally increases exponentially with:",
        answer: "C. Increase in temperature",
        options: [
            "A. Increase in volume",
            "B. Increase in time",
            "C. Increase in temperature",
            "D. Increase in pressure only"
        ]
    },
    {
        numb: 27,
        question: "Stirring improves reaction rate mainly by improving:",
        answer: "C. Contact between reactants",
        options: [
            "A. Temperature",
            "B. Pressure",
            "C. Contact between reactants",
            "D. Equilibrium constant"
        ]
    },
    {
        numb: 28,
        question: "A reaction occurring between gas and solid phases is classified as:",
        answer: "C. Heterogeneous reaction",
        options: [
            "A. Homogeneous reaction",
            "B. Photochemical reaction",
            "C. Heterogeneous reaction",
            "D. Zero-order reaction"
        ]
    },
    {
        numb: 29,
        question: "Which professional mainly uses chemical kinetics for reactor design?",
        answer: "C. Chemical engineer",
        options: [
            "A. Physicist",
            "B. Biologist",
            "C. Chemical engineer",
            "D. Mathematician"
        ]
    },
    {
        numb: 30,
        question: "If the concentration of reactants remains constant during reaction, the reaction is likely:",
        answer: "C. Zero-order reaction",
        options: [
            "A. First-order reaction",
            "B. Second-order reaction",
            "C. Zero-order reaction",
            "D. Photochemical reaction"
        ]
    },
    {
        numb: 31,
        question: "Which of the following is an example of a very slow reaction?",
        answer: "C. Oxidation of carbon at room temperature",
        options: [
            "A. Explosion",
            "B. Neutralization",
            "C. Oxidation of carbon at room temperature",
            "D. Combustion in oxygen"
        ]
    },
    {
        numb: 32,
        question: "Catalysts are generally used in reactions in:",
        answer: "C. Small quantities",
        options: [
            "A. Large quantities",
            "B. Stoichiometric quantities",
            "C. Small quantities",
            "D. Equal amounts as reactants"
        ]
    },
    {
        numb: 33,
        question: "The usual units of reaction rate are:",
        answer: "B. mol/s",
        options: [
            "A. mol",
            "B. mol/s",
            "C. s/mol",
            "D. mol²/s"
        ]
    },
    {
        numb: 34,
        question: "Chemical kinetics helps in controlling reactions in a:",
        answer: "B. Predictable and desirable manner",
        options: [
            "A. Random manner",
            "B. Predictable and desirable manner",
            "C. Unstable manner",
            "D. Thermodynamic manner"
        ]
    },
    {
        numb: 35,
        question: "The normalizing quantity used to define intensive rate may be:",
        answer: "C. Volume",
        options: [
            "A. Time",
            "B. Temperature",
            "C. Volume",
            "D. Pressure"
        ]
    },
    {
        numb: 36,
        question: "Jet engines are examples of reactors used mainly for:",
        answer: "B. Energy generation",
        options: [
            "A. Cooling",
            "B. Energy generation",
            "C. Separation",
            "D. Storage"
        ]
    },
    {
        numb: 37,
        question: "Reaction rate depends on wavelength in:",
        answer: "B. Photochemical reactions",
        options: [
            "A. Thermal reactions",
            "B. Photochemical reactions",
            "C. Catalytic reactions",
            "D. Heterogeneous reactions"
        ]
    },
    {
        numb: 38,
        question: "The applied chemist uses kinetics mainly to:",
        answer: "B. Improve yields and catalysts",
        options: [
            "A. Design reactors",
            "B. Improve yields and catalysts",
            "C. Study fluid flow",
            "D. Design separators"
        ]
    },
    {
        numb: 39,
        question: "Reaction rate does NOT directly depend on:",
        answer: "D. Reactor shape",
        options: [
            "A. Concentration",
            "B. Temperature",
            "C. Catalyst",
            "D. Reactor shape"
        ]
    },
    {
        numb: 40,
        question: "The most important change occurring in a reactor is:",
        answer: "C. Chemical reaction",
        options: [
            "A. Pressure change",
            "B. Temperature change",
            "C. Chemical reaction",
            "D. Phase change"
        ]
    },
    {
        numb: 41,
        question: "Which factor increases reaction rate by increasing collision frequency?",
        answer: "A. Concentration",
        options: [
            "A. Concentration",
            "B. Colour",
            "C. Volume",
            "D. Reactor material"
        ]
    },
    {
        numb: 42,
        question: "Chemical kinetics allows prediction of:",
        answer: "C. Reaction rate under given conditions",
        options: [
            "A. Physical properties only",
            "B. Equilibrium composition only",
            "C. Reaction rate under given conditions",
            "D. Phase behavior only"
        ]
    },
    {
        numb: 43,
        question: "Which best describes chemical reaction engineering?",
        answer: "B. Application of kinetics to reactor design",
        options: [
            "A. Study of equilibrium",
            "B. Application of kinetics to reactor design",
            "C. Study of phase diagrams",
            "D. Study of fluid mechanics"
        ]
    },
    {
        numb: 44,
        question: "Chemical kinetics is essential in reactor design because it determines:",
        answer: "C. Size and operating conditions of reactors",
        options: [
            "A. Cost of raw materials",
            "B. Colour of products",
            "C. Size and operating conditions of reactors",
            "D. Molecular weight of reactants"
        ]
    },
    {
        numb: 45,
        question: "Which factor affects reaction rate by lowering activation energy?",
        answer: "C. Catalyst",
        options: [
            "A. Pressure",
            "B. Concentration",
            "C. Catalyst",
            "D. Volume"
        ]
    },
    {
        numb: 46,
        question: "The rate of a reaction is zero when:",
        answer: "C. Concentration does not affect rate",
        options: [
            "A. Temperature is high",
            "B. Pressure is low",
            "C. Concentration does not affect rate",
            "D. Catalyst is present"
        ]
    },
    {
        numb: 47,
        question: "Which reaction proceeds only in the presence of light?",
        answer: "B. Photochemical reaction",
        options: [
            "A. Thermal reaction",
            "B. Photochemical reaction",
            "C. Catalytic reaction",
            "D. Homogeneous reaction"
        ]
    },
    {
        numb: 48,
        question: "The main objective of chemical reaction engineering is to:",
        answer: "B. Design efficient and safe reactors",
        options: [
            "A. Study equilibrium",
            "B. Design efficient and safe reactors",
            "C. Analyze separation processes",
            "D. Study fluid properties"
        ]
    },
    {
        numb: 49,
        question: "Reaction rate increases with temperature because:",
        answer: "C. More molecules have energy above activation energy",
        options: [
            "A. Volume decreases",
            "B. Pressure decreases",
            "C. More molecules have energy above activation energy",
            "D. Catalysts deactivate"
        ]
    },
    {
        numb: 50,
        question: "Chemical kinetics forms the basis for:",
        answer: "C. Reactor design and scale-up",
        options: [
            "A. Phase equilibrium analysis",
            "B. Separation processes",
            "C. Reactor design and scale-up",
            "D. Material balances only"
        ]
    }
];
