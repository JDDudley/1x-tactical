let stripe = require("stripe")("sk_test_tlI06RUdE1tVOzucTg99mHne");

function create(body) {
    console.log('creating membership charge...');
    var token = body.stripeToken;
    console.log('Stripe Token: ' + token);
    var chargeObj = {
        "amount": 9900,
        "currency": "usd",
        "source": token,
        "description": "1X Tactical Yearly Membership"
    }
    console.log('Charge Object:' + chargeObj);
    var charge = stripe.charges.create(chargeObj, function (err, charge) {
        if (err && err.type == 'StripeCardError') {
            return { "error": "The card has been declined." };
        }
    });
};

module.exports={
    create
}