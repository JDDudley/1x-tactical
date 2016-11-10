$(document).ready(function () {
    $('#submit-form').on('click',function(){
        var joinForm = $('#join-form');
        Stripe.card.createToken(joinForm, stripeResponseHandler);
        // joinForm[0].reset();
        $('.brand').click();
        return false;
    });
    function stripeResponseHandler(status, response) {
        console.log(status, response);
        if (status === 200) { //success
            console.log('Good response, making member...');
            makeMember(response);
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
            "phone": $('#input-phone').val(),
            "email": $('#input-email').val(),
            "paymentInfo": response
        };
        console.log(memObj);
        $.post('http://1xtactical.com/api/membership',{"member":memObj});
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