const dataAdapter = require('../models/data-adapter'),
    uuid = dataAdapter.uuid,
    DS = dataAdapter.DS,
    formatQuery = dataAdapter.formatQuery;

const cc = require('coupon-code')
//   https://www.npmjs.com/package/coupon-code  for docs 


let Discount = DS.defineResource({
    name: 'discount',
    endpoint: 'discount'
    // relations: {
    //     belongsTo: {
    //         product:{
    //             localField: 'product',
    //             localKey: 'productId'
    //         }
    //     }
    // }
})

newDiscount = (discount) => {
    return {
        id: discount.id,
        // code: cc.generate(), 
        percentageOff: discount.percentageOff,
        product: discount.product,
        activeCode: true     //keep track of all codes but change to false when this is no longer active. 
    }
}

createDiscount = (discount, cb) => {
    let discountObj = newDiscount(discount)
    Discount.create(discountObj).then(cb).catch(cb)
}
getAll = (cb) => { Discount.findAll({}).then(cb).catch(cb) }
getById = (id, cb) => { Discount.find(id).then(cb).catch(cb) }

updateDiscount = (id, discount, cb) => {
    getById(id, (oldDiscount) => {
        Discount.update(id, discount).then(cb).catch(cb)
    })
}
removeDiscount = (discountId, cb) => {
    getById(discountId, (discount) => {
        if (discountId == discount.id) {
        discount.activeCode = false;
        } Discount.update(discountId, discount).then(cb).catch(cb)
    })
}

module.exports = { createDiscount, getAll, getById, updateDiscount, removeDiscount }
