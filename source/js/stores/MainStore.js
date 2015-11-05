


var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var PortalConstants = require('../constants/PortalConstants');
var webAPIUtils = require('../utils/WebAPIUtils')
var assign = require('object-assign');
var ActionTypes = PortalConstants.ActionTypes;

var UPDATE_ADD_FOOD_STATE = 'add_food_state_change';
var UPDATE_FOOD_LIST_STATE = 'food_list_state_change';
var FoodListState = {
    FoodList: []
};


var AddFoodState = {
    food_name: null,
    ingredient: []
};

function add_new_ingredient_state(ingredient) {
    AddFoodState.ingredient.push(ingredient);
}


function reset_new_ingredient_state(ingredient) {
    var emptyAddFoodState = {
    food_name: null,
    ingredient: []
};
AddFoodState = emptyAddFoodState;

}



function add_new_food_to_list(foodItem) {

    FoodListState.FoodList.push(foodItem);

}


var MainStore = assign({}, EventEmitter.prototype, {
    
    getAddFoodListState: function() {
        return FoodListState;
    },
    getAddFoodState: function() {
        return AddFoodState;
    },
    emitAddFoodStateChange: function() {

        this.emit(UPDATE_ADD_FOOD_STATE);
    },
    addAddFoodStateChangeListener: function(callback) {
        this.on(UPDATE_ADD_FOOD_STATE, callback);
    },
    removeAddFoodStateChangeListener: function(callback) {
    this.removeListener(UPDATE_ADD_FOOD_STATE, callback);
  },

  emitFoodListStateChange: function() {

        this.emit(UPDATE_FOOD_LIST_STATE);
    },
    addFoodListStateChangeListener: function(callback) {
        this.on(UPDATE_FOOD_LIST_STATE, callback);
    },
    removeFoodListStateChangeListener: function(callback) {
    this.removeListener(UPDATE_FOOD_LIST_STATE, callback);
  },


});


AppDispatcher.register(function(action) {

    switch(action.actionType) {
        case ActionTypes.ADD_NEW_INGREDIENT:
            console.log(action.ingredient);
            add_new_ingredient_state(action.ingredient);
            MainStore.emitAddFoodStateChange();
            break;
        case ActionTypes.ADD_NEW_FOOD:
            console.log(action.foodItem);
            add_new_food_to_list(action.foodItem);
            MainStore.emitFoodListStateChange();
            MainStore.emitAddFoodStateChange();
            break;

    
    }
});
module.exports = MainStore;