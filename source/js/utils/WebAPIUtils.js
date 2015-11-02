// WebAPIUtils.js

var PortalActions = require('../actions/PortalActions');
var request = require('superagent');
var PortalConstants = require('../constants/PortalConstants');
var APIEndpoints = PortalConstants.APIEndpoints
module.exports = {

  testAPI: function() {
    request.get(APIEndpoints.test)
      .set('Accept', 'application/json')
      .end(function(error, res){
        if (res) {
          if (res.error) {
            var errorMsgs = _getErrors(res);
            PortalActions.updateFood(errorMsgs);
          } else {
            json = JSON.parse(res.text);
            
            PortalActions.updateFood(json.some);
          }
        }
      });
  },

getVendor: function(id) {
    request.get(APIEndpoints.getVendor+"/"+id)
      .set('Accept', 'application/json')
      .end(function(error, res){
        if (res) {
          if (res.error) {
            var errorMsgs = _getErrors(res);
            PortalActions.updateVendorDetail(errorMsgs);
          } else {
            json = JSON.parse(res.text);
            
            PortalActions.updateVendorDetail(json);
          }
        }
      });
  },


 
};
