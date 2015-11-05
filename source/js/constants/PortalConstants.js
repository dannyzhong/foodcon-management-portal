// PortalConstants.js

var keyMirror = require('keymirror');

var APIRoot = "http://localhost:8080";

module.exports = {

APIEndpoints: {
    test:          APIRoot + "/vendor/1",
    getVendor: 	   APIRoot + "/vendor"
  },

ActionTypes: keyMirror({
  UPDATE_PAGE_DISPLAY_STATUS: null,
  UPDATE_VENDOR_INFO: null,
  ADD_NEW_INGREDIENT: null,
  ADD_NEW_FOOD: null,
})


};