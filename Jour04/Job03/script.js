document.getElementById('filtrer').addEventListener('click', () => {
    const idFilter = document.getElementById('id').value.trim();
    const nomFilter = document.getElementById('nom').value.trim().toLowerCase();
    const typeFilter = document.getElementById('type').value;

    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            const resultats = data.filter(pokemon => {
                let match = true;
                
                // Filtre par ID
                if (idFilter && pokemon.id.toString() !== idFilter) match = false;
                
                // Filtre par Nom : JSON.stringify permet de chercher dans toutes les langues de l'objet "name"
                if (nomFilter && !JSON.stringify(pokemon.name).toLowerCase().includes(nomFilter)) match = false;
                
                // Filtre par Type
                if (typeFilter && !pokemon.type.includes(typeFilter)) match = false;
                
                return match;
            });

            afficherPokemons(resultats);
        })
        .catch(error => console.error('Erreur Fetch:', error));
});

function afficherPokemons(pokemons) {
    const div = document.getElementById('resultats');
    div.innerHTML = ''; 
    
    if (pokemons.length === 0) {
        div.innerHTML = '<p>Aucun Pokémon trouvé correspondant à ces critères.</p>';
        return;
    }

    const ul = document.createElement('ul');
    pokemons.forEach(p => {
        const li = document.createElement('li');
        
        let nomsMultilingues = "";
        
        // Si 'name' est un objet, on récupère toutes les langues
        if (typeof p.name === 'object') {
            // Object.entries crée un tableau de paires [langue, nom] qu'on assemble
            nomsMultilingues = Object.entries(p.name)
                .map(([langue, nom]) => `${langue} : ${nom}`)
                .join(' | ');
        } else {
            // Sécurité au cas où 'name' serait une simple chaîne de caractères
            nomsMultilingues = p.name;
        }
        
        // Affichage de l'ID, des Noms dans toutes les langues et des Types
        li.textContent = `[#${p.id}] Noms (${nomsMultilingues}) - Types: ${p.type.join(', ')}`; 
        
        ul.appendChild(li);
    });
    div.appendChild(ul);
}