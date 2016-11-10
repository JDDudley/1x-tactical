
let dataAdapter = require('../models/data-adapter'),
  uuid = dataAdapter.uuid,
  DS = dataAdapter.DS,
  formatQuery = dataAdapter.formatQuery;


let Membership = DS.defineResource({
    name: 'membership',
    endpoint: 'membership'
})


function newMembership(member){
return{
        id: member.id || uuid.v4(),
        firstName: member.firstName,
        lastName: member.lastName,
        address1: member.address1,
        address2: member.address2, 
        city:member.city,
        state:member.state,
        zip:member.zip,
        phone:member.phone, 
        email: member.email,
        dateJoined: Date.now(), 
        dateExpired: Date.now() + 3.154e+10,
        isMember: true,  
        isAdmin: false,
        onMailingList: true,
        paymentInfo:member.paymentInfo
    }
}

function create(member, cb){
 let memberObj = newMembership(member)
 Membership.create(memberObj).then(cb).catch(cb)
}

getAll= function(cb){
    Membership.findAll({}).then(cb).catch(cb)
}

getById = function(id, cb){
    Membership.find(id).then(cb).catch(cb)
}

updateMember= function(id, member, cb){
  getById(id, function(oldMember){
          Membership.update(id, member).then(cb).catch(cb)
  })
}

removeMember= function(memberId, cb){
  getById(memberId, function(member){
    if(memberId ==member.id){
    member.paid = false
    member.isMember = false 
    }
    Membership.update(memberId, member).then(cb).catch(cb)
})
}

module.exports={
    create,
    getAll,
    getById,
    updateMember,
    removeMember
}