document.addEventListener('DOMContentLoaded', function () {
    setupResponsiveHeader();
    window.addEventListener('resize', setupResponsiveHeader);
});

function setupResponsiveHeader() {
    const abbreviations = {
        "Fallout 4": "FO4",
        "Fallout: New Vegas": "FNV",
        "Tale of Two Wastelands": "TTW",
        "Cyberpunk": "CP77"
    };

    const width = window.innerWidth;

    const headerLinks = document.getElementById('headerLinks');
    const headerTitle = document.querySelector('.header-title span');
    const burger = document.querySelector('.header-menu');

    // 1️⃣ ≥1200px → header complet masqué
    if (width >= 1200) {
        if (headerLinks) headerLinks.style.display = 'none';
        if (burger) burger.style.display = 'none';
        if (headerTitle) headerTitle.style.display = 'none';

    // 2️⃣ 900–1199px → header-links visibles, texte complet
    } else if (width >= 900) {
        if (headerLinks) headerLinks.style.display = 'flex';
        if (burger) burger.style.display = 'none';
        if (headerTitle) {
            headerTitle.style.display = 'inline';
            const fullTitle = headerTitle.getAttribute('data-full-title') || headerTitle.textContent;
            headerTitle.textContent = fullTitle;
            if (!headerTitle.hasAttribute('data-full-title')) headerTitle.setAttribute('data-full-title', fullTitle);
        }

    // 3️⃣ 700–899px → header-links visibles, texte réduit
    } else if (width >= 700) {
        if (headerLinks) headerLinks.style.display = 'flex';
        if (burger) burger.style.display = 'none';
        if (headerTitle) {
            headerTitle.style.display = 'inline';
            const fullTitle = headerTitle.getAttribute('data-full-title') || headerTitle.textContent;
            const abbr = abbreviations[fullTitle] || fullTitle.split(' ').map(w => w[0]).join('');
            headerTitle.textContent = abbr;
            if (!headerTitle.hasAttribute('data-full-title')) headerTitle.setAttribute('data-full-title', fullTitle);
        }

    // 4️⃣ <700px → burger menu visible, header-links masqué
    } else {
        if (headerLinks) headerLinks.style.display = 'none';
        if (burger) burger.style.display = 'flex';
        if (headerTitle) headerTitle.style.display = 'inline';
        const fullTitle = headerTitle.getAttribute('data-full-title') || headerTitle.textContent;
        const abbr = abbreviations[fullTitle] || fullTitle.split(' ').map(w => w[0]).join('');
        headerTitle.textContent = abbr;
        if (!headerTitle.hasAttribute('data-full-title')) headerTitle.setAttribute('data-full-title', fullTitle);
    }

    // Gérer les liens du header
    if (headerLinks) {
        headerLinks.querySelectorAll('a').forEach(link => {
            const fullText = link.getAttribute('data-full-text') || link.textContent;
            if (!link.hasAttribute('data-full-text')) link.setAttribute('data-full-text', fullText);

            if (width >= 900) {
                link.textContent = fullText; // texte complet
            } else {
                link.textContent = abbreviations[fullText] || fullText.split(' ').map(w => w[0]).join('');
            }
        });
    }
}
