/**
 * Convertit une valeur CSS (px, rem, em) en pixels
 * @param {string|number} value - valeur CSS (ex: "2rem", "1.5em", "16px") ou nombre en rem
 * @param {HTMLElement} [context=document.documentElement] - contexte pour les em
 * @returns {number} valeur en pixels
 */
function cssToPixels(value, context = document.documentElement) {
    if (typeof value === "number") {
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

// ==============================
// EXEMPLES D'UTILISATION
// ==============================

// Convertir le padding d'un header en pixels
const header = document.querySelector('.header');
const headerPaddingPx = cssToPixels(getComputedStyle(header).paddingTop);
console.log('Header padding-top en px:', headerPaddingPx);

// Convertir une valeur fixe en rem
const offsetPx = cssToPixels('1.5rem');
console.log('1.5rem en px:', offsetPx);

// Convertir une valeur en em par rapport à un élément spécifique
const title = document.querySelector('h1');
const titleLineHeightPx = cssToPixels(getComputedStyle(title).lineHeight, title);
console.log('Line-height h1 en px:', titleLineHeightPx);
