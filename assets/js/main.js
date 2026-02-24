function initRobotTips() {
    const tipElements = document.querySelectorAll(".tip-bubble p");
    if (!tipElements.length) return;

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
    
    // On choisit un tip aléatoire pour chaque tip-bubble
    tipElements.forEach(tipEl => {
        tipEl.innerText = tips[Math.floor(Math.random() * tips.length)];
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initRobotTips();

    // === BURGER MENU ===
    const toggle = document.getElementById("menuToggle");
    const items = document.getElementById("menuItems");
    if (toggle && items) {
        toggle.addEventListener("click", () => {
            items.classList.toggle("open");
        });
    }
});
