$(document).ready(function() {
    // Noms exacts des ressources demandées
    const images = ['arc1.png', 'arc2.png', 'arc3.png', 'arc4.png', 'arc5.png', 'arc6.png'];

    // Fonction pour mélanger un tableau
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // Bouton de mélange
    $('#shuffleBtn').click(function() {
        $('#mixedContainer').empty();
        $('#resultContainer').empty();
        $('#message').text('');

        let shuffledImages = shuffle([...images]);
        
        shuffledImages.forEach(img => {
            $('#mixedContainer').append(`<img src="${img}" class="arc-img" alt="${img}">`);
        });
    });

    // Déplacer de la zone mélangée vers la zone de résultat
    $(document).on('click', '#mixedContainer .arc-img', function() {
        $('#resultContainer').append(this);
        checkWin(); // Vérifier la victoire à chaque ajout
    });

    // Déplacer de la zone de résultat vers la zone mélangée (si erreur)
    $(document).on('click', '#resultContainer .arc-img', function() {
        $('#mixedContainer').append(this);
        $('#message').text(''); // Enlever le message de défaite/victoire
    });

    function checkWin() {
        if ($('#resultContainer .arc-img').length === 6) {
            let isWinner = true;
            
            // Vérifie l'ordre
            $('#resultContainer .arc-img').each(function(index) {
                // On extrait le nom du fichier depuis l'attribut src
                if ($(this).attr('src') !== images[index]) {
                    isWinner = false;
                }
            });

            if (isWinner) {
                $('#message').text('Vous avez gagné').css('color', 'green');
            } else {
                $('#message').text('Vous avez perdu').css('color', 'red');
            }
        }
    }
});