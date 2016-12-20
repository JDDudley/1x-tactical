const router = require('express').Router();
const Discount = require('../models/discount-model');

module.exports.mountPath = '/discount'
module.exports.router = router;

router.route('/:id?')
   .get((req, res, next)=>{ 
            Discount.getAll((data)=>{  data.stack ? next(data) : res.send(data) }) })
    .post((req, res, next)=>{
            Discount.createDiscount(req.body, (discount)=>{
            discount.stack? next(discount) :   res.send(discount)  })    })
    .put((req, res, next) =>{
             Discount.updateDiscount(req.params.id, req.body.discount, (discount)=>{
             discount.stack? next(discount) : res.send(discount) })    }) 
  .delete((req, res, next)=>{
              Discount.removeDiscount(req.params.id, (discount)=>{
              discount.stack? next(discount) : res.send({message: "Discount is no longer active."})    })   })   