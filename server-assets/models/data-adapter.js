let uuid = require('node-uuid'),
  JsData = require('js-data'),
  FBAdapter = require('js-data-firebase'),
  DS = new JsData.DS();

let fbAdapter = new FBAdapter({
  basePath: 'https://x-landing.firebaseio.com/'
})


formatQuery= function(query){
  query = query || ''
  return { with: query.split(',').join(' ').split(' ') }
}


DS.registerAdapter('firebase', fbAdapter, { default: true })




module.exports = {
  fbAdapter, 
  DS,
  uuid,
  formatQuery
}