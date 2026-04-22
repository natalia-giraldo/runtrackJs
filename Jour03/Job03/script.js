$(document).ready(function() {
    // Tableau représentant les positions des images logo1.PNG à logo9.PNG 
    let order = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

    function initGame() {
        // Mélange aléatoire du plateau au début 
        order.sort(() => Math.random() - 0.5);
        render();
        $('#message').text('').css('color', 'black');
        $('#restartBtn').hide();
    }

    function render() {
        $('#taquin').empty();
        order.forEach((val, index) => {
            if(val === 9) {
                // Case vide (logo9.PNG est masqué par la classe .empty)
                $('#taquin').append(`<img src="logo9.PNG" class="tile empty" data-index="${index}">`);
            } else {
                // Carreaux de 1 à 8 
                $('#taquin').append(`<img src="logo${val}.PNG" class="tile" data-index="${index}" alt="Tile ${val}">`);
            }
        });
    }

    $(document).on('click', '.tile:not(.empty)', function() {
        // Bloque la partie si le message de victoire est affiché [cite: 43]
        if ($('#message').text() === "Vous avez gagné") return; 

        let clickedIndex = $(this).data('index');
        let emptyIndex = $('.empty').data('index');

        // Calcul des coordonnées pour vérifier l'adjacence 
        let row1 = Math.floor(clickedIndex / 3), col1 = clickedIndex % 3;
        let row2 = Math.floor(emptyIndex / 3), col2 = emptyIndex % 3;

        // Déplacement si la case vide est adjacente 
        if (Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1) {
            let temp = order[clickedIndex];
            order[clickedIndex] = order[emptyIndex];
            order[emptyIndex] = temp;
            
            render();
            checkWin();
        }
    });

    function checkWin() {
        // Vérifie si les images sont dans l'ordre 1, 2, 3... [cite: 40]
        let isWinner = order.every((val, index) => val === index + 1);
        
        if (isWinner) {
            // Affiche le message en vert et bloque la partie [cite: 43]
            $('#message').text("Vous avez gagné").css('color', 'green');
            $('.empty').css('visibility', 'visible'); // Optionnel : montre l'image complète
            $('#restartBtn').show(); // Bouton pour relancer [cite: 44]
        }
    }

    // Bouton pour recommencer une partie [cite: 44]
    $('#restartBtn').click(initGame);
    
    initGame(); 
});