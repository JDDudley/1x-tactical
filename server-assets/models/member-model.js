
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
        name: member.name,
        address: member.address,
        city:member.city,
        state:member.state,
        country:member.country,
        zip:member.zip,
        phone:member.phone, 
        email: member.email,
        paid: false,
        dateJoined: Date.now(), 
        dateExpired: Date.now() + 3.154e+10
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