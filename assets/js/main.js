function initRobotTips() {
    const tipElement = document.getElementById("tipText");
    if (!tipElement) return;

    const url = window.location.href;
    let category = "general";

    if (url.includes("fallout4")) category = "fo4";
    else if (url.includes("fallout-london")) category = "london";

    const allTips = {
        general: [
            "Lisez toujours la description d'un mod en entier.",
            "N'installez pas 50 mods d'un coup.",
            "Utilisez les profils sur Vortex pour tester vos configurations.",
            "Évitez de désinstaller des mods scriptés en pleine partie."
        ],
        fo4: [
            "Pour Fallout 4, le Buffout 4 est indispensable pour stabiliser votre jeu.",
            "Attention au 'Previsibines' : modifier les décors peut casser vos FPS !",
            "Le script extender (F4SE) doit toujours être lancé en mode administrateur."
        ],
        london: [
            "Fallout London nécessite une version 'downgradée' de Fallout 4.",
            "Pensez à vider votre dossier de sauvegardes avant de commencer London."
        ]
    };

    const tips = allTips[category] || allTips["general"];
    tipElement.innerText = tips[Math.floor(Math.random() * tips.length)];
}

function initBurgerMenu() {
    const toggle = document.getElementById("menuToggle");
    const items = document.getElementById("menuItems");

    if (!toggle || !items) return;

    toggle.addEventListener("click", () => {
        items.classList.toggle("open");
    });
}

function positionTipAboveRobot() {
    const tip = document.querySelector(".tip-bubble");
    const robot = document.querySelector(".assistant");

    if (!tip || !robot) return;

    // Positionner le tip juste au-dessus du robot
    const robotRect = robot.getBoundingClientRect();
    const containerRect = robot.parentElement.getBoundingClientRect();

    tip.style.position = "absolute";
    tip.style.left = "50%";
    tip.style.bottom = `${containerRect.height - (robotRect.top - containerRect.top) + 0.5 * robotRect.height}px`;
    tip.style.transform = "translateX(-50%)";
}

document.addEventListener('DOMContentLoaded', function() {
    initRobotTips();
    initBurgerMenu();
    positionTipAboveRobot();

    // Repositionne le tip si la fenêtre change de taille
    window.addEventListener("resize", positionTipAboveRobot);
});
