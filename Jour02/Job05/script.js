window.addEventListener("scroll", () => {
    // Calcul du pourcentage de scroll
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    
    // On modifie la teinte (hue) en fonction du pourcentage pour changer de couleur
    const hue = Math.floor(scrollPercent * 360);
    document.querySelector("footer").style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
});