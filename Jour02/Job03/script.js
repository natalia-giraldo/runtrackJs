function addOne() {
    const compteur = document.getElementById("compteur");
    // On convertit le texte actuel en nombre, on ajoute 1, et on met à jour
    compteur.textContent = parseInt(compteur.textContent) + 1;
}

document.getElementById("button").addEventListener("click", addOne);