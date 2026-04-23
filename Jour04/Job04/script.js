document.getElementById('update').addEventListener('click', () => {
    fetch('utilisateur.json')
        .then(response => response.json())
        .then(users => {
            const tbody = document.getElementById('userTableBody');
            tbody.innerHTML = ''; // On vide le tableau avant de le remplir

            users.forEach(user => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;
                tbody.appendChild(tr);
            });
        })
        .catch(error => console.error('Erreur Fetch:', error));
});