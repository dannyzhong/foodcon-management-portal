// PortalStore.js


var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var PortalConstants = require('../constants/PortalConstants');
var webAPIUtils = require('../utils/WebAPIUtils')
var assign = require('object-assign');
var ActionTypes = PortalConstants.ActionTypes;
var CHANGE_EVENT = 'change';
var _foods = {};
var _pageDisplayStatus = {
    showMain: true
};


function create_food(title,text) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    console.log(id)
    _foods[id] = {
        id: id,
        title: title,
        description: text
    };
}

function update_food(text) {
    
    for (item in _foods){
        console.log(text);
        _foods[item].description = text;

    }


}



var PortalStore = assign({}, EventEmitter.prototype, {
    
    getStatus: function() {
        return _pageDisplayStatus;
    },
    getAll: function() {
        return _foods;
    },
    // 触发 change 事件
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    // 提供给外部 View 绑定 change 事件
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
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
            webAPIUtils.testAPI()
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
module.exports = PortalStore;