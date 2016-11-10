$(document).ready(function () {
    $('#join-form').on('submit', function () {
        var response = validateInfo();
        if (response) {
            var joinForm = $('#join-form');
            joinForm.find('.submit').prop('disabled',true);
            Stripe.card.createToken(joinForm, stripeResponseHandler);
            return false;
        } else {
            return false;
        }
    });
    function stripeResponseHandler(status, response) {
        debugger;
        var joinForm = $('#join-form');
        if (response.error) {
            joinForm.find('.payment-errors').text(response.error.message);
            joinForm.find('.submit').prop('disabled',false);
        } else {
            console.log('Good response, creating member...');
            var memObj = makeMember(response);
            var token = response.id;
            joinForm.append($('<input type="hidden" name="stripeToken">').val(token));
            // $.post('http://1xtactical.com/api/membership', { "member": memObj });
            // joinForm.get(0).submit();
            console.log('About to call /api/payment/membership...');
            $.post('/api/payment/membership', joinForm);
        }
    }
    function makeMember(response) {
        var memObj = {
            "firstName": $('#input-firstname').val(),
            "lastName": $('#input-lastname').val(),
            "address1": $('#input-address1').val(),
            "address2": $('#input-address2').val() || '',
            "city": $('#input-city').val(),
            "state": $('#input-state option:selected').text(),
            "zip": $('#input-zipcode').val(),
            "phone": $('#input-phone').val() || '',
            "email": $('#input-email').val(),
            "paymentInfo": response
        };
        return memObj;
    }
    function validateCC() {
        console.log('checking for valid CC info..');
    }
    function validateInfo() {
        console.log('validating..');
        var firstName = $('#input-firstname').val();
        var lastName = $('#input-lastname').val();
        var address1 = $('#input-address1').val();
        var city = $('#input-city').val();
        var state = $('#input-state option:selected').text();
        var zip = $('#input-zipcode').val();
        var email = $('#input-email').val();
        var errors = 0;
        if (!firstName) {
            $('#div-firstname').addClass('has-error');
            errors++;
        }
        if (!lastName) {
            $('#div-lastname').addClass('has-error');
            errors++;
        }
        if (!address1) {
            $('#div-address1').addClass('has-error');
            errors++;
        }
        if (!city) {
            $('#div-city').addClass('has-error');
            errors++;
        }
        if (state == '(Select a State)') {
            $('#div-state').addClass('has-error');
            errors++;
        }
        if (!zip) {
            $('#div-zip').addClass('has-error');
            errors++;
        }
        if (!email || !validateEmail(email)) {
            $('#div-email').addClass('has-error');
            errors++;
        }
        if (errors) {
            return false;
        } else {
            return true;
        }
    }
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    // {
    //   id: "tok_u5dg20Gra", // Token identifier
    //   card: {...}, // Dictionary of the card used to create the token
    //   created: 1478722383, // Timestamp of when token was created
    //   currency: "usd", // Currency that the token was created in
    //   livemode: false, // Whether this token was created with a live API key
    //   object: "token", // Type of object, always "token"
    //   used: false // Whether this token has been used
    // }
});