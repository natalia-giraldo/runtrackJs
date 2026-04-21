function citation() {
    // Récupère le texte de l'élément avec l'id "citation"
    const text = document.getElementById("citation").textContent;
    console.log(text);
}

// Ajoute un écouteur d'événement sur le bouton
document.getElementById("button").addEventListener("click", citation);