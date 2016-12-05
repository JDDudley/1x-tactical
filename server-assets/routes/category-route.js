const router = require('express').Router();
const Category = require('../models/store-model');

module.exports.mountPath = '/category'
module.exports.router = router;


router.route('/:id?')
    .get((req, res, next) => {
        Category.getAllCategories((data) => { data.stack ? next(data) : res.send(data) })
    })
    .post((req, res, next) => {
        Category.addCategoryToStore(req.body.category, (category) => {
            category.stack ? next(category) : res.send(category)
        })
    })
    .put((req, res, next) => {
        Category.updateCategory(req.params.id, req.body.category, (category) => {
            category.stack ? next(category) : res.send(category)
        })
    })
    .delete((req, res, next) => {    
        Category.removeCategory(req.params.id, (category) => {
            category.stack ? next(category) : res.send({ message: "Category is no longer active." })
        })
    })   