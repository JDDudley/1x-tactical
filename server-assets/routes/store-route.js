const router = require('express').Router();
const Store = require('../models/store-model');

module.exports.mountPath = '/store'
module.exports.router = router;

router.route('/:id?')
   .get(function(req, res, next){ 
    Store.getAll((data)=>{
        if(data.stack){
            return next(data)
        }
       res.send(data)
    })
    
    })
    .post(function(req, res, next){
        Store.addToStore(req.body.product, (product)=>{
            product.stack? next(product) :   res.send(product)
        })
    })
    .put(function (req, res, next) {
    Store.updateProduct(req.params.id, req.body.product, function(product){
      product.stack? next(product) : res.send(product)
    })
  }) 
  .delete(function(req, res, next){
   Store.removeProduct(req.params.id, (product)=>{
     product.stack? next(product) : res.send({message: "Product Removed From Store."}) 
    })
})

