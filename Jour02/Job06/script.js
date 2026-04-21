const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let konamiIndex = 0;

document.addEventListener("keydown", (event) => {
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Le code est entré en entier ! On change le style de la page
            document.body.style.backgroundColor = "#1e25f3"; // Bleu La Plateforme
            document.body.style.color = "#ffffff";
            document.body.innerHTML = "<p>Code Konami validé ! Bienvenue à La Plateforme_ !</p>";
            konamiIndex = 0; // Réinitialise
        }
    } else {
        konamiIndex = 0; // Réinitialise si mauvaise touche
    }
});
