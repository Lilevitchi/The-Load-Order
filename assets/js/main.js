/* ===========================
   ROBOT TIPS
=========================== */
function initRobotTips() {
    const tipElement = document.getElementById("tipText");
    if (!tipElement) return;

    const url = window.location.href.toLowerCase();
    let category = "general";

    if (url.includes("fallout4")) category = "fo4";
    else if (url.includes("fallout-london")) category = "london";

    const tipsData = {
        general: [
            "Lisez toujours la description d'un mod en entier.",
            "N'installez pas 50 mods d'un coup.",
            "Utilisez les profils sur Vortex pour tester vos configurations.",
            "Évitez de désinstaller des mods scriptés en pleine partie."
        ],
        fo4: [
            "Pour Fallout 4, Buffout 4 est indispensable pour stabiliser votre jeu.",
            "Attention aux Previsibines : modifier les décors peut casser vos FPS.",
            "Le script extender (F4SE) doit toujours être lancé en mode administrateur."
        ],
        london: [
            "Fallout London nécessite une version downgradée de Fallout 4.",
            "Pensez à vider votre dossier de sauvegardes avant de commencer London."
        ]
    };

    const tips = tipsData[category] || tipsData.general;
    tipElement.textContent = tips[Math.floor(Math.random() * tips.length)];
}


/* ===========================
   PREMIUM BURGER MENU
=========================== */
function initBurgerMenu() {
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menuItems");
    const overlay = document.getElementById("menuOverlay");

    if (!toggle || !menu || !overlay) return;

    function openMenu() {
        menu.classList.add("open");
        overlay.classList.add("active");
        toggle.classList.add("active");
        document.body.classList.add("menu-open");
    }

    function closeMenu() {
        menu.classList.remove("open");
        overlay.classList.remove("active");
        toggle.classList.remove("active");
        document.body.classList.remove("menu-open");
    }

    function toggleMenu(e) {
        e.stopPropagation();
        menu.classList.contains("open") ? closeMenu() : openMenu();
    }

    toggle.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeMenu();
    });

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });
}


/* ===========================
   INIT
=========================== */
document.addEventListener("DOMContentLoaded", function () {
    initRobotTips();
    initBurgerMenu();
});
