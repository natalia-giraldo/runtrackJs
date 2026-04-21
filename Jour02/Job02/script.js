function showhide() {
    const existingArticle = document.getElementById("my-article");

    if (existingArticle) {
        // Si l'article existe déjà, on le supprime
        existingArticle.remove();
    } else {
        // Sinon, on le crée et on l'ajoute au body
        const newArticle = document.createElement("article");
        newArticle.id = "my-article";
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(newArticle);
    }
}

document.getElementById("button").addEventListener("click", showhide);