$(document).ready(function() {
    // Événement quand on clique dans le champ
    $('#myInput').focus(function() {
        $(this).animate({ width: '300px' }, 'slow');
    });

    // Événement quand on clique en dehors du champ
    $('#myInput').blur(function() {
        $(this).animate({ width: '150px' }, 'slow');
    });
});