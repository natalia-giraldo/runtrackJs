document.getElementById('get-quote').addEventListener('click', () => {
    // On ajoute l'URL du proxy juste avant l'URL de ZenQuotes
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const apiUrl = 'https://zenquotes.io/api/random';
    
    // Le fetch interroge le proxy, qui interroge ZenQuotes
    fetch(proxyUrl + encodeURIComponent(apiUrl))
        .then(response => response.json())
        .then(data => {
            // La structure des données reste la même
            const quote = data.q;
            const author = data.a;
            
            // Affichage dans le HTML
            const container = document.getElementById('quote-container');
            container.innerHTML = `<blockquote>"${quote}"</blockquote><p><strong>${author}</strong></p>`;
        })
        .catch(error => {
            console.error("Erreur lors de la récupération :", error);
            document.getElementById('quote-container').textContent = "Erreur de chargement de la citation.";
        });
});