$(document).ready(function() {
    //przypisanie wczesniej wybranych warosci do pol
    $('.mc-box2').html(mcBox.value);
    $('.pln-box2').html(plnBox.value);

    //zastapienie domyslenej funkcji submit zmiana strony, walidacja formularza dziala dalej poprawnie.
    $('.secondForm').submit(function(e) {
        e.preventDefault();
        $('.pageChange').load('./Page3.html').hide().fadeIn(500);
    })
})