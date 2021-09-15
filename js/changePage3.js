$(document).ready(function () {
    $('.thirdForm').submit(function (e) {
        e.preventDefault();
        $('.pageChange').load('./Page4.html').hide().fadeIn(500);
    });
})
