$(document).ready(function () {
    $('#submit-form').on('click',function(){
        var joinForm = $('#join-form');
        Stripe.card.createToken(joinForm, stripeResponseHandler);
        joinForm[0].reset();
        $('.brand').click();
        return false;
    });
    function stripeResponseHandler(response) {
        console.log(response);
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