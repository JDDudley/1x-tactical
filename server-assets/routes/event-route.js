const router = require('express').Router();
const Event = require('../models/event-model');

module.exports.mountPath = '/events'
module.exports.router = router;

router.route('/:id?')
   .get((req, res, next)=>{ 
            Event.getAll((data)=>{  data.stack ? next(data) : res.send(data) }) })
    .post((req, res, next)=>{
            Event.addEvent(req.body.event, (event)=>{
            event.stack? next(event) :   res.send(event)  })    })
    .put((req, res, next) =>{
             Event.updateEvent(req.params.id, req.body.event, (event)=>{
             event.stack? next(event) : res.send(event) })    }) 
  .delete((req, res, next)=>{
              Event.removeEvent(req.params.id, (event)=>{
              event.stack? next(event) : res.send({message: "Event is no longer active."})    })   })   