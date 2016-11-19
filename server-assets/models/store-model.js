let dataAdapter = require('../models/data-adapter'),
  uuid = dataAdapter.uuid,
  DS = dataAdapter.DS,
  formatQuery = dataAdapter.formatQuery;

  let Store = DS.defineResource({
    name: 'store',
    endpoint: 'store'
})

function newProduct(product){
    return{
        id: product.id || uuid.v4(),
        category: product.category,
        name: product.name,
        description: product.description,
        specs: product.specs || [],
        images:[],
        reviews: product.reviews || '',
        msrp: product.msrp,
        memberPrice:product.memberPrice,
        nonMemberPrice:product.nonMemberPrice,
        inStock: true,
        inStore: true

    }

}

addToStore=(product, cb)=>{
    let productObj = newProduct(product)
    Store.create(productObj).then(cb).catch(cb)
}

getAll=(cb)=>{
    Store.findAll({}).then(cb).catch(cb)
}

getProductById = function(id, cb){
    Store.find(id).then(cb).catch(cb)
}

updateProduct=(id, product, cb)=>{
getProductById(id, (oldProduct)=>{
    Store.update(id, product).then(cb).catch(cb)
})
}

removeProduct =(productId, cb)=>{
    getProductById(productId, (product)=>{
        if(productId==product.id){
        product.inStore=false
        } 
        Store.update(productId, product).then(cb).catch(cb)
    })
}

module.exports={
    addToStore,
    getAll,
    getProductById,
    updateProduct,
    removeProduct
}