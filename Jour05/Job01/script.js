// Expressions Régulières pour la validation
const regex = {
    nom: /^[a-zA-ZÀ-ÿ\s-]{2,}$/, // Lettres, espaces, tirets, min 2 caractères
    prenom: /^[a-zA-ZÀ-ÿ\s-]{2,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Format email basique
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, // Min 8 caractères, 1 lettre, 1 chiffre
    adresse: /^.{5,}$/, // Au moins 5 caractères
    postal: /^\d{5}$/ // 5 chiffres (Format français)
};

// Simulation d'une vérification asynchrone (ex: vérifier si l'email existe en base de données)
async function simulateAsyncValidation(inputName, value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let isValid = true;
            let message = "";

            if (!value.trim()) {
                isValid = false;
                message = "Ce champ est requis.";
            } else if (regex[inputName] && !regex[inputName].test(value)) {
                isValid = false;
                switch (inputName) {
                    case 'email': message = "Format d'email invalide."; break;
                    case 'password': message = "Min. 8 caractères, 1 lettre, 1 chiffre."; break;
                    case 'postal': message = "Le code postal doit contenir 5 chiffres."; break;
                    case 'nom': 
                    case 'prenom': message = "Doit contenir au moins 2 lettres."; break;
                    case 'adresse': message = "L'adresse est trop courte."; break;
                    default: message = "Format invalide.";
                }
            } else if (inputName === 'email' && value === 'admin@test.com') {
                // Simulation d'une erreur venant d'un serveur asynchrone
                isValid = false;
                message = "Cet email est déjà utilisé.";
            }

            resolve({ isValid, message });
        }, 400); // Délai de 400ms pour simuler le réseau
    });
}

// Fonction pour afficher ou retirer les erreurs de manière sécurisée (textContent)
function displayError(inputElement, isValid, message) {
    const errorSpan = document.getElementById(`error-${inputElement.name}`);
    
    if (!isValid) {
        inputElement.classList.add('is-invalid');
        inputElement.classList.remove('is-valid');
        errorSpan.textContent = message; // Protection XSS
    } else {
        inputElement.classList.remove('is-invalid');
        inputElement.classList.add('is-valid');
        errorSpan.textContent = ""; 
    }
}

// Validation d'un champ spécifique
async function validateField(inputElement) {
    const inputName = inputElement.name;
    const value = inputElement.value;
    
    // Ajout d'un petit indicateur de chargement asynchrone si désiré
    const errorSpan = document.getElementById(`error-${inputName}`);
    errorSpan.textContent = "Vérification...";
    errorSpan.style.color = "#888";

    const result = await simulateAsyncValidation(inputName, value);
    
    errorSpan.style.color = "#e74c3c"; // Remettre la couleur d'erreur
    displayError(inputElement, result.isValid, result.message);
    
    return result.isValid;
}

// Écouteurs d'événements pour tous les champs (déclenchement au "blur" = perte de focus)
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', async (e) => {
        await validateField(e.target);
    });
});

// Gestion de la soumission des formulaires
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        
        let isFormValid = true;
        const inputs = form.querySelectorAll('input');
        
        // On valide tous les champs de manière asynchrone lors du submit
        for (const input of inputs) {
            const isValid = await validateField(input);
            if (!isValid) {
                isFormValid = false;
            }
        }

        if (isFormValid) {
            alert(`Succès : Le formulaire de ${form.id === 'connexionForm' ? 'Connexion' : 'Inscription'} est valide et prêt à être envoyé au serveur !`);
            // Ici, j'utiliseriez fetch() pour envoyer les données au vrai serveur
            // form.reset();
        }
    });
});