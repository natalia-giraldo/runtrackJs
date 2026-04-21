function changeTheme() {
    // Si la classe 'dark' est présente, toggle l'enlève, sinon il l'ajoute
    document.body.classList.toggle("dark");
}

document.getElementById("toggle-theme").addEventListener("click", changeTheme);

