$(document).ready(function () {
    var $form = $('#join-form');
    $form.submit(function(event){
        $form = $('#join-form');
        $form.find('.submit').prop('disabled',true);
        Stripe.card.createToken($form, stripeResponseHandler);
        console.log($form);
        return false;
    })
    $('#submit-form').on('click',function(){
        console.log('submit button clicked!');
    });
});