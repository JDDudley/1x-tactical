let dataAdapter = require('../models/data-adapter'),
  uuid = dataAdapter.uuid,
  DS = dataAdapter.DS,
  formatQuery = dataAdapter.formatQuery;

  let Events = DS.defineResource({
    name: 'events',
    endpoint: 'events',
    relations:{
        belongsTo:{
            category: {
                localField: 'category',
                localKey: 'categoryId' 
            }
        }
    }
})

function newEvent(event){
    return{
        id: event.id || uuid.v4(),
        name: event.name,
        date: event.date,
        time: event.time,
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

//will always return Events with the category. 
getAll=(cb)=>{
    Events.findAll({}, {'with': ['category']}).then(cb).catch(cb)
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