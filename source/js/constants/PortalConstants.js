// PortalConstants.js

var keyMirror = require('keymirror');

var APIRoot = "http://localhost:5000";

module.exports = {

APIEndpoints: {
    test:          APIRoot + "/hello"
    
  },

ActionTypes: keyMirror({
  CREATE_FOOD: null,
  UPDATE_FOOD: null,
  
})


};