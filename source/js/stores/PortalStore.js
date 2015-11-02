// PortalStore.js


var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var PortalConstants = require('../constants/PortalConstants');
var assign = require('object-assign');
var ActionTypes = PortalConstants.ActionTypes;

var PAGE_DISPLAY_STATUS_CHANGE = 'page_display_status_change'
var PageDisplayStatus = {
    displayMain: false,
    displayLogin: true
}

function update_page_display_status(status) {
     console.log(status);
    PageDisplayStatus = status;
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


var PortalStore = assign({}, EventEmitter.prototype, {
    
    getPageDisplayStatus: function() {
        return PageDisplayStatus;
    },
  

    emitPageDisplayStatusChange: function() {

        this.emit(PAGE_DISPLAY_STATUS_CHANGE);
    },
    addPageDisplayStatusChangeListener: function(callback) {
        this.on(PAGE_DISPLAY_STATUS_CHANGE, callback);
    },
    removePageDisplayStatusChangeListener: function(callback) {
    this.removeListener(PAGE_DISPLAY_STATUS_CHANGE, callback);
  },
});


AppDispatcher.register(function(action) {
    
    switch(action.actionType) {
        case ActionTypes.UPDATE_PAGE_DISPLAY_STATUS:
            update_page_display_status(action.status);    
            PortalStore.emitPageDisplayStatusChange();
            break;
        
    }
});
module.exports = PortalStore;