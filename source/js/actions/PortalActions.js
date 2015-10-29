// PortalActions.js


var AppDispatcher = require('../dispatcher/AppDispatcher');
var PortalConstants = require('../constants/PortalConstants');
var ActionTypes = PortalConstants.ActionTypes;
var PortalActions = {

  /**
   * @param  {string} text
   */
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
  }
};

module.exports = PortalActions;