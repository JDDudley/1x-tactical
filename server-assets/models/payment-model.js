// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
let stripe = require("stripe")("sk_test_tlI06RUdE1tVOzucTg99mHne");

// Get the credit card details submitted by the form
var token = request.body.stripeToken; // Using Express

// function create(req) {
//     var token = req.body.stripeToken;
//     var charge = stripe.charges.create({
//         amount: 9900,
//         currency: "usd",
//         source: token,
//         description: "1X Tactical Yearly Membership"
//     }, function (err, charge) {
//         if (err && err.type == 'StripeCardError') {
//             return { "error": "The card has been declined." };
//         }
//     })
// };

// module.exports{
//     create
// }