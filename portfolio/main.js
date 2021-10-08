$(document).ready(function () {

    $('#forms').validate({
        // debug: true,
        rules: {
            name: "required",
            email: {
                required: true,
                email: true,
            },
            subject: {
                required: true,
                maxlength: 4,
            },
            message: {
                required: true,
            },
        },
        message: {
            subject: {
                maxLength: "Subject should be up to 60 characters long",
            }
        },
        errorClass: "error",
        // errorPlacement: function(error){
        //     $(this).appendTo(".error-label")
        // }
    })
})