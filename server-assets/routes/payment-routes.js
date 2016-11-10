const router = require('express').Router();
const Payment = require('../models/payment-model');

module.exports.mountPath = '/payment'
module.exports.router = router;

router.route('/membership')
    .post(function (req, res, next) {
        Payment.create(req, function (member) {
            if (member.stack) {
                return next(member)
            }
            res.send(member)
        })
    });

