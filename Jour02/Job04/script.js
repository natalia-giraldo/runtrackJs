document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase();
    const textarea = document.getElementById("keylogger");
    
    // On vérifie si la touche est une lettre de a à z (en utilisant une expression régulière simple)
    if (/^[a-z]$/.test(key)) {
        // Vérifie si le textarea a le focus
        if (document.activeElement === textarea) {
            textarea.value += key + key;
        } else {
            textarea.value += key;
        }
    }
});