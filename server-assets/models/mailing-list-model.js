
let dataAdapter = require('../models/data-adapter'),
  uuid = dataAdapter.uuid,
  DS = dataAdapter.DS,
  formatQuery = dataAdapter.formatQuery;


let MailingList = DS.defineResource({
    name: 'mailinglist',
    endpoint: 'mailinglist'
})


function newMember(member){
return{
        id: member.id || uuid.v4(),
        name: member.name,
        email: member.email,
        onList: true
           
    }
}

function create(member, cb){
 let memberObj = newMember(member)
 MailingList.create(memberObj).then(cb).catch(cb)
}

getAll= function(cb){
    MailingList.findAll({}).then(cb).catch(cb)
}

function getById(id, cb){
    MailingList.find(id).then(cb).catch(cb)
}

updateMember= function(id, member, cb){
  getById(id, function(oldMember){
    MailingList.update(id, member).then(cb).catch(cb)
  })
}

removeMember= function(memberId, cb){
  getById(memberId, function(member){
    member.onList = false
    MailingList.update(memberId, member).then(cb).catch(cb)
})
}



module.exports={
    create,
    getAll,
    getById,
    updateMember,
    removeMember
}