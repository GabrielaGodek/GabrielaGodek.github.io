$(document).ready(function () {
    $('.formBtn').click(function () {
        //przeładowanie strony
        $('.pageChange').load('./Page2.html').hide().fadeIn(500);
        //zmiana opacity dla zdjecia w tle
        $('.imgBack').fadeTo(200, .2);
    })
})

