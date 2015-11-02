// PortalStore.js

/*
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var PortalConstants = require('../constants/PortalConstants');
var webAPIUtils = require('../utils/WebAPIUtils')
var assign = require('object-assign');
var ActionTypes = PortalConstants.ActionTypes;
var CHANGE_EVENT = 'change';
var HEADER_CHANGE_EVENT = 'header_change';
var PAGE_DISPLAY_STATUS_CHANGE = 'page_display_status_change'
var PageDisplayStatus = {
    displayMain: true
}

var MainPageState = {
    _foods: {}
};
var FoodManageHeaderState = {
    _vender_detail: {}
};

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



var PortalStore = assign({}, EventEmitter.prototype, {
    
    getPageDisplayStatus: function() {
        return PageDisplayStatus;
    },
   /* getAll: function() {
        return MainPageState;
    },
    getFood: function() {
        return MainPageState._foods;
    },
    getFoodManageHeaderState: function() {
        return FoodManageHeaderState;
    },
    // 触发 change 事件
    /*emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    // 提供给外部 View 绑定 change 事件
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    emitPageDisplayStatusChange: function() {
        this.emit(PAGE_DISPLAY_STATUS_CHANGE);
    },
    addPageDisplayStatusChangeListener: function(callback) {
        this.on(PAGE_DISPLAY_STATUS_CHANGE, callback);
    },
    emitHeaderChange: function() {
        this.emit(HEADER_CHANGE_EVENT);
    },
    addHeaderChangeListener: function(callback) {
        this.on(HEADER_CHANGE_EVENT, callback);
    }



});


AppDispatcher.register(function(action) {
    var text;
    var title;
    switch(action.actionType) {
        case ActionTypes.CREATE_FOOD:
            text = action.text.trim();
            title = action.title.trim();
            if (text !== '' && title !== '') {
                create_food(title,text);
                
            }
            PortalStore.emitChange();
            break;
        case ActionTypes.UPDATE_FOOD:
            text = action.text.trim();
            
            if (text !== '') {
                update_food(text);
            }
            PortalStore.emitChange();
            break;


    
    }
});
module.exports = PortalStore;*/