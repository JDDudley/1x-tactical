let dataAdapter = require('../models/data-adapter'),
    uuid = dataAdapter.uuid,
    DS = dataAdapter.DS,
    formatQuery = dataAdapter.formatQuery;

let Store = DS.defineResource({
    name: 'store',     
    endpoint: 'store',
    // relations: {
    //     // belongsTo: {
    //     //     brand: {
    //     //         localField: 'brand',
    //     //         localKey: 'brandId',
    //     //         // parent: true
    //     //     },
    //         category: {
    //             localField: 'category',
    //             localKey: 'categoryId',
    //             // parent: true
    //         }
    // }
})

// let Brand = DS.defineResource({
//     name: 'brand',
//     endpoint: 'brand',
//     relations: {
//         hasMany: {
//             store: { //has many products
//                 localField: 'products', //brand.products = array of products in this brand
//                 foreignKey: 'productId'
//             }
//         }
//     }
// })
let Category = DS.defineResource({
    name: 'category',
    endpoint: 'category',
    // relations: {
    //     hasMany: {
    //         store: { //has many products
    //             localField: 'products', //brand.products = array of products in this brand
    //             foreignKey: 'categoryId'       /////////////TEST
    //         },
    //         // brand: { //has many products
    //         //     localField: 'brands', //brand.products = array of products in this brand
    //         //     foreignKey: 'categoryId'
    //         // },
    //         event:{
    //             localField: 'events',
    //             foreignKey: 'categoryId'
    //         }
    //     }
    // }
})

function newProduct(product) {
    return {
        id: product.id || uuid.v4(),
        name: product.name,
        category: product.category, 
        description: product.description,
        // specs: product.specs || [],
        images: product.images || {},
        reviews: product.reviews || '',
        msrp: product.msrp,
        memberPrice: product.memberPrice,
        nonMemberPrice: product.nonMemberPrice,
        inStock: true,
        inStore: true

    }
}

function newBrand(brand) {
    return {
        id: brand.id || uuid.v4(),
        name: brand.name,
        inStore: true
    }
}

function newCategory(category) {
    return {
        id: category.id || uuid.v4(),
        name: category.name,
        inStore: true
    }
}

//////////////store methods/////////////////
addToStore = (product, cb) => {
    let productObj = newProduct(product)
    Store.create(productObj).then(cb).catch(cb)
}

getAll = (cb) => {
    Store.findAll({}).then(cb).catch(cb)
}

getProductById = function (id, cb) {
    Store.find(id).then(cb).catch(cb)
}

updateProduct = (id, product, cb) => {
    getProductById(id, (oldProduct) => {
        Store.update(id, product).then(cb).catch(cb)
    })
}

removeProduct = (productId, cb) => {
    getProductById(productId, (product) => {
        if (productId == product.id) {
            product.inStore = false
        }
        Store.update(productId, product).then(cb).catch(cb)
    })
}
/////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
/////////////Brand Methods/////////////////////////////////////////
addBrandToStore = (brand, cb) => {
    let brandObj = newBrand(brand)
    Brand.create(brandObj).then(cb).catch(cb)
}

getAllBrands = (cb) => {
    Brand.findAll({}).then(cb).catch(cb)
}

getBrandById = function (id, cb) {
    Brand.find(id).then(cb).catch(cb)
}

updateBrand = (id, brand, cb) => {
    getBrandById(id, (oldBrand) => {
        Brand.update(id, brand).then(cb).catch(cb)
    })
}

removeBrand = (brandId, cb) => {
    getBrandById(brandId, (brand) => {
        if (brandId == brand.id) {
            brand.inStore = false
        }
        Brand.update(brandId, brand).then(cb).catch(cb)
    })
}
////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////
////////////CATEGORY METHODS//////////////////

addCategoryToStore = (category, cb) => {
    let categoryObj = newCategory(category)
    Category.create(categoryObj).then(cb).catch(cb)
}

getAllCategories = (cb) => {
    Category.findAll({}).then(cb).catch(cb)
    //     Category.findAll({}, {with: ['store']}).then(cb).catch(cb)

}

getCategoryById = function (id, cb) {
    Category.find(id).then(cb).catch(cb)
}

updateCategory = (id, category, cb) => {
    getCategoryById(id, (oldCategory) => {
        Category.update(id, category).then(cb).catch(cb)
    })
}

removeCategory = (categoryId, cb) => {
    getBrandById(categoryId, (category) => {
        if (categoryId == category.id) {
            category.inStore = false
        }
        Category.update(categoryId, brand).then(cb).catch(cb)
    })
}

///////////////////////////////////////////////////

module.exports = {
    addToStore, getAll, getProductById, updateProduct, removeProduct,
    addBrandToStore, getAllBrands, getBrandById, updateBrand, removeBrand,
    addCategoryToStore, getAllCategories, getCategoryById, updateCategory,
    removeCategory

}