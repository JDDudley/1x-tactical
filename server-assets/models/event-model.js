let dataAdapter = require('../models/data-adapter'),
  uuid = dataAdapter.uuid,
  DS = dataAdapter.DS,
  formatQuery = dataAdapter.formatQuery;

  let Events = DS.defineResource({
    name: 'events',
    endpoint: 'events'
})

function newEvent(event){
    return{
        id: event.id || uuid.v4(),
        category: event.category,
        name: event.name,
        date: event.date,
        minSeat: event.minSeat,
        maxSeat: event.maxSeat,
        price: event.price,
        description: event.description,
        photos: event.photos || [],
        deleted: false
    }

}

addEvent=(event, cb)=>{
    let eventObj = newEvent(event)
    Events.create(eventObj).then(cb).catch(cb)
}

getAll=(cb)=>{
    Events.findAll({}).then(cb).catch(cb)
}

getEventById = function(id, cb){
    Events.find(id).then(cb).catch(cb)
}

updateEvent=(id, event, cb)=>{
getEventById(id, (oldEvent)=>{
    Events.update(id, event).then(cb).catch(cb)
})
}

removeEvent =(eventId, cb)=>{
    getEventById(eventId, (event)=>{
        if(eventId==event.id){
            event.deleted = true;
        } 
        Store.update(eventId, event).then(cb).catch(cb)
    })
}

module.exports={
    addEvent,
    getAll,
    getEventById,
    updateEvent,
    removeEvent
}