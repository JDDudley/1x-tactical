let stripe = require("stripe")("sk_live_vtQViHmHf6PpXaBRHEXjrty8");

function create(body, cb) {
    console.log('creating membership charge...');
    var token = body.stripeToken;
    console.log('Stripe Token: ' + token);
    var chargeAmt = 9900;
    var chargeObj = {
        "amount": chargeAmt,
        "currency": "usd",
        "source": token,
        "description": "1X Tactical Yearly Membership"
    }
    console.log('Charge Object:' + chargeObj);
    var charge = stripe.charges.create(chargeObj, function (err, charge) {
        if (err && err.type == 'StripeCardError') {
            return { "error": "The card has been declined." };
        } else if (err) {
            return { "error": err };
        } else {
            //success
            console.log(charge);
            cb(charge)
        }
    });
};

module.exports={
    create
}