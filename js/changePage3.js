$(document).ready(function () {
    function thxPage() {
        $('.pageChange').load('./Page4.html').hide().fadeIn(500);
    }
    $('.thirdBtn').click(thxPage);
})
