/**
 * Convertit une valeur CSS (px, rem, em) en pixels
 * @param {string|number} value - valeur CSS (ex: "2rem", "1.5em", "16px") ou nombre en rem
 * @param {HTMLElement} [context=document.documentElement] - contexte pour les em
 * @returns {number} valeur en pixels
 */
function cssToPixels(value, context = document.documentElement) {
    if (typeof value === "number") {
        // on considère que c'est un rem
        const base = parseFloat(getComputedStyle(document.documentElement).fontSize);
        return value * base;
    }

    if (typeof value === "string") {
        if (value.endsWith("px")) return parseFloat(value);
        if (value.endsWith("rem")) {
            const base = parseFloat(getComputedStyle(document.documentElement).fontSize);
            return parseFloat(value) * base;
        }
        if (value.endsWith("em")) {
            const base = parseFloat(getComputedStyle(context).fontSize);
            return parseFloat(value) * base;
        }
    }

    return 0;
}

// Exemple pour ton popup.js
function openPopup(thisObj, $target) {
    const rect = thisObj.getBoundingClientRect();
    const popup = $target;

    const isVisible = popup.classList.contains('show');
    if (!isVisible) {
        // Utiliser rem directement pour plus de cohérence avec ton CSS
        const offset = cssToPixels('1rem'); // <-- ici 1rem, correspond à ton transform CSS
        popup.style.top = `${rect.top - offset}px`;
        popup.style.left = `${rect.right}px`;
        popup.style.display = 'block';
        requestAnimationFrame(() => popup.classList.add('show'));
    } else {
        popup.classList.remove('show');
        setTimeout(() => (popup.style.display = 'none'), 200);
    }

    lastPopupWindow = $target;
    lastPopupButton = thisObj;
}
