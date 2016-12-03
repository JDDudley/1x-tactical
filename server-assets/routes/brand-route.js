const router = require('express').Router();
const Brand = require('../models/store-model');

module.exports.mountPath = '/brand'
module.exports.router = router;


router.route('/:id?')
    .get((req, res, next) => {
        Brand.getAllBrands((data) => { data.stack ? next(data) : res.send(data) })
    })
    .post((req, res, next) => {
        Brand.addBrandToStore(req.body.brand, (brand) => {
            brand.stack ? next(brand) : res.send(brand)
        })
    })
    .put((req, res, next) => {
        Brand.updateBrand(req.params.id, req.body.brand, (brand) => {
            brand.stack ? next(brand) : res.send(brand)
        })
    })
    .delete((req, res, next) => {    //not handling error yet? 
        Brand.removeBrand(req.params.id, (brand) => {
            brand.stack ? next(brand) : res.send({ message: "Brand is no longer active." })
        })
    })   