$(document).ready(function(){
	
	"use strict";	
	

//------------------------------------------------------------------------------------
//						REGISTRATION FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------------------		  

    $('#register_form').validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            email: {
                required: true,
                email: true
            },
			password: {
     			required: true,
      			minlength: 7
    		}
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        },
        messages: {
            email: {
                required: "What's your email?",
                email: "Please, enter a valid email"
            },
			password: {
      			required: "What's your password?",
      			minlength: jQuery.format("At least {0} characters required")
    		}
        },
        highlight: function(element) {
            $(element)
            .text('').addClass('error')
        },                    
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    });
	

    $('#register_form').submit(function() {
        // submit the form
        if($(this).valid()){
            var action = $(this).attr('action');
            $('#form-error').addClass('hidden');
            $('#register-button').attr('disabled', 'disabled');
            $.ajax({
                url: action,
                crossDomain: true,
                dataType: 'json',
                type: 'POST',
                data: {
                    themeRef: $('#themeRef').val(),
                    email: $('#email').val(),
                    password: $('#password').val()
                }
            }).done(function (response, status, jqXHR) {

                if (status === 'success' && response.goalUrl !== undefined) {
                    document.location = response.goalUrl;
                } else {
                    if(response == 'User Creation Error:Bad Request') {
                        $('#form-error').removeClass('hidden');
                    }
                }
                $('#register-button').removeAttr('disabled');
            }).fail(function (response) {
                var error;

                if (response.status === 503) {
                    error = 'We’re temporarily offline for maintenance; this is usually pretty quick, so check back soon. We apologise for the inconvenience.';
                    return;
                }
                
            });;
        }
        return false; 
    }); 

});
