const express = require('express')
  , stripe = require('stripe')('sk_test_0gxkIeR9ccLO0RFykXYplPT7')
  , bodyParser = require('body-parser')
  , cors = require('cors')
  , routes = require('./server-assets/routes/index')
  , handlers = require('./utils/handler')
  , server = express()
  , firebase = require('firebase')
  , port = process.env.PORT || 8080



server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use('/', express.static(`${__dirname}/public`));
server.use('/api', cors(handlers.corsOptions), routes.router)
server.use('/', handlers.defaultErrorHandler)

server.get('/', function (req, res) {
  res.sendFile('index.html');
});

server.get('/paysuccess', function (req, res) {
  res.sendFile(`${__dirname}/public/paysuccess.html`);
});


server.post('/charge', function (req, res) {
  const token = req.body.stripeToken;
  console.log(token)
  const chargeAmount = req.body.chargeAmount
  const charge = stripe.charges.create({
    amount: chargeAmount,
    currency: 'usd',
    source: token
  }, function (err, charge) {
    if (err && err.type === "StripeCardError") {
      console.log('Card was declined')
    }
  })
  console.log('payment successful!')
  res.redirect('/paysuccess')
})


server.listen(port, function () {
  console.log(`Server is on port: ${port}`);
})