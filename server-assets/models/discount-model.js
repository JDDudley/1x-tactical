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

newDiscount = (discount)=>{
   return{  //when using, wrap discount obj in "discount" property
    id: discount.id || uuid.v4(),  //might as well give the coupons an id   
    // code: cc.generate(), //will generate 3-part new code. 
    percentageOff: discount.percentageOff, //percent off
    product: discount.product, //product/category/brand to be discounted ...(will most likely need id's for products and categories. YOLO )
    activeCode: true     //keep track of all codes but change to false when this is no longer active. 
   }
}

createDiscount = (discount, cb)=>{ 
    let discountObj = newDiscount(discount)
    Discount.create(discountObj).then(cb).catch(cb)  
}
getAll=(cb)=>{ Discount.findAll({}).then(cb).catch(cb) }
getById = (id, cb)=>{  Discount.find(id).then(cb).catch(cb) }

updateDiscount= (id, discount, cb)=>{  
    getById(id, (oldDiscount)=>{
    Discount.update(id, discount).then(cb).catch(cb) 
         })
    }
removeDiscount=(discountId, cb)=>{  
    getById(discountId, (discount)=>{
        if(discountId ==discount.id){ discount.activeCode = false;
     }     Discount.update(discountId, discount).then(cb).catch(cb) })
    }   

module.exports={createDiscount, getAll, getById, updateDiscount, removeDiscount}
