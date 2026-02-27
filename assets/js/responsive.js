document.addEventListener('DOMContentLoaded', function () {
    setupResponsiveHeader();
    window.addEventListener('resize', setupResponsiveHeader);
});

function setupResponsiveHeader() {
    const abbreviations = {
        "Fallout 4": "FO4",
        "Fallout London": "FL",
        "Fallout: New Vegas": "FNV",
        "Tale of Two Wastelands": "TTW",
        "Cyberpunk": "CP77"
    };

    const isNarrow = window.innerWidth < 900;

    const headerTitle = document.getElementById('headerTitle');
    if (headerTitle) {
        const fullTitle = headerTitle.getAttribute('data-full-title') || headerTitle.textContent;
        const shortTitle = abbreviations[fullTitle] || fullTitle.split(' ').map(w => w[0]).join('');

        headerTitle.textContent = isNarrow ? shortTitle : fullTitle;
        if (!headerTitle.hasAttribute('data-full-title')) headerTitle.setAttribute('data-full-title', fullTitle);
    }

    const headerLinks = document.getElementById('headerLinks');
    if (headerLinks) {
        headerLinks.querySelectorAll('a').forEach(link => {
            const fullText = link.getAttribute('data-full-text') || link.textContent;
            if (!link.hasAttribute('data-full-text')) link.setAttribute('data-full-text', fullText);
            link.textContent = isNarrow ? (abbreviations[fullText] || fullText) : fullText;
        });
    }
}
