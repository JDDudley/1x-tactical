const router = require('express').Router();
const Membership = require('../models/member-model');

module.exports.mountPath = '/membership'
module.exports.router = router;

router.route('/:id?')
    .get(function (req, res, next) {
        Membership.getAll(function (data) {
            if (data.stack) {
                return next(data)
            }
            res.send(data)
        })

    })
    .post(function (req, res, next) {
        Membership.create(req.body.member, function (member) {
            if (member.stack) {
                return next(member)
            }
            res.send(member)
        })
    })
    .put(function (req, res, next) {
        Membership.updateMember(req.params.id, req.body.member, function (member) {
            if (member.stack) { return next(member) }
            res.send(member)
        })
    })
    .delete(function (req, res, next) {
        Membership.removeMember(req.params.id, function (member) {
            if (member.stack) { return next(member) }
            res.send({ message: "Member Successfully Deleted. Arm Up, Train Up, Stand Up" })
        })
    })

