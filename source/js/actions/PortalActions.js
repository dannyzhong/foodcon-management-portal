// PortalActions.js


var AppDispatcher = require('../dispatcher/AppDispatcher');
var PortalConstants = require('../constants/PortalConstants');
var ActionTypes = PortalConstants.ActionTypes;
var PortalActions = {

  addFoodToList: function(foodItem) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ADD_NEW_FOOD,
      foodItem: foodItem
    });
  },


  updatePageDisplayStatus: function(status) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.UPDATE_PAGE_DISPLAY_STATUS,
      status: status
    });
  },


  updateVendorDetail: function(vendor_detail) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.UPDATE_VENDOR_INFO,
      vendor_detail: vendor_detail
    });
  },
  addNewIngredient: function(ingredient) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ADD_NEW_INGREDIENT,
      ingredient: ingredient
    });
  },
  };

module.exports = PortalActions;