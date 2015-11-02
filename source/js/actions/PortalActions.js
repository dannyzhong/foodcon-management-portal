// PortalActions.js


var AppDispatcher = require('../dispatcher/AppDispatcher');
var PortalConstants = require('../constants/PortalConstants');
var ActionTypes = PortalConstants.ActionTypes;
var PortalActions = {

  /**
   * @param  {string} text
   
  createFood: function(title,text) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.CREATE_FOOD,
      title: title,
      text: text
    });
  },
  updateFood: function(text) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.UPDATE_FOOD,
      text: text
    });
  },*/
  updateVendorDetail: function(vendor_detail) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.UPDATE_HEADER,
      vendor_detail: vendor_detail
    });
  },

  updatePageDisplayStatus: function(status) {

    
    AppDispatcher.dispatch({
      actionType: ActionTypes.UPDATE_PAGE_DISPLAY_STATUS,
      status: status
    });
  }



};

module.exports = PortalActions;