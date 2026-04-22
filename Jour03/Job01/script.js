$(document).ready(function() {
    // Fait apparaître le texte au clic
    $('#showTextBtn').click(function() {
        $('#quote')
            .text("Les logiciels et les cathédrales, c'est un peu la même chose d'abord, on les construit, ensuite, on prie.")
            .show();
    });

    // Cache tout l'élément HTML au clic
    $('#hideHtmlBtn').click(function() {
        $('html').hide();
    });
});