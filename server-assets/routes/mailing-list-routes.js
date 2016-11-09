const router = require('express').Router();
const MailingList = require('../models/mailing-list-model');

module.exports.mountPath = '/mailing-list'
module.exports.router = router;

router.route('/:id?')
    .get(function(req, res, next){ 
    MailingList.getAll(function(data){
        if(data.stack){
            return next(data)
        }
       res.send(data)
    })
    
    })
    .post(function(req, res, next){
        MailingList.create(req.body.member, function(member){
            if(member.stack){
                return next(member)
            }
             res.send(member)
        })
    })
    .put(function (req, res, next) {
    MailingList.updateMember(req.params.id, req.body.member, function(member){
      if(member.stack) { return next(member) }
        res.send(member)
    })
  }) 
  .delete(function(req, res, next){
   MailingList.removeMember(req.params.id, function(member){
      if(member.stack) { return next(member) }
      res.send ({message: "Member Successfully Deleted. Arm Up, Train Up, Stand Up"}) 
    })
})

