// PortalStore.js


var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var PortalConstants = require('../constants/PortalConstants');
var assign = require('object-assign');
var ActionTypes = PortalConstants.ActionTypes;

var HEADER_STATE_CHANGE = 'header_state_change'
var HeaderState = {
    vendorInfo: {}
}

function update_header_state(headerState) { 
    HeaderState.vendorInfo.name = headerState.name;
}

/*
function create_food(title,text) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    console.log(id)
    MainPageState._foods[id] = {
        id: id,
        title: title,
        description: text
    };
}

function update_food(text) {
    
    for (item in MainPageState._foods){
        console.log(text);
        MainPageState._foods[item].description = text;

    }
}
*/


var HeaderStore = assign({}, EventEmitter.prototype, {
    
    getHeaderState: function() {
        return HeaderState;
    },
    emitHeaderStateChange: function() {

        this.emit(HEADER_STATE_CHANGE);
    },
    addHeaderStateChangeListener: function(callback) {
        this.on(HEADER_STATE_CHANGE, callback);
    },
    removeHeaderStateChangeListener: function(callback) {
    this.removeListener(HEADER_STATE_CHANGE, callback);
  },
});


AppDispatcher.register(function(action) {
    
    switch(action.actionType) {
        case ActionTypes.UPDATE_VENDOR_INFO:
            update_header_state(action.vendor_detail);    
            HeaderStore.emitHeaderStateChange();
            break;
        
    }
});
module.exports = HeaderStore;