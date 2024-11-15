function setResponsiveFontSize() {
    const html = document.documentElement;
    const screenWidth = window.innerWidth;

    if (screenWidth < 600) {
        html.style.fontSize = '16px';
    } else if (screenWidth < 900) {
        html.style.fontSize = '14px';
    } else {
        html.style.fontSize = '12px';
    }
}

window.addEventListener('resize', setResponsiveFontSize);
window.addEventListener('DOMContentLoaded', setResponsiveFontSize);
