// FoodManageHeader.react.js

var React = require('react');
var PortalStore = require('../../stores/PortalStore');
var webAPIUtils = require('../../utils/WebAPIUtils')

var FoodManageHeader = React.createClass({
  /*getInitialState: function () {
    return PortalStore.getFoodManageHeaderState();
  },
  componentDidMount: function() {
        PortalStore.addChangeListener(this._headerChange);
        webAPIUtils.getVendor(1);
    },

    componentWillUnmount: function() {
        PortalStore.removeChangeListener(this._headerChange);
    },

    _headerChange: function() {
        this.setState(PortalStore.getFoodManageHeaderState());
    },


  updateList: function (list) {
    this.setState({
      list: list
    });
  },

  updateListItem: function (item) {
    var list = this.state.list;
    list[item.id] = item;

    this.updateList(list);
  },

  removeListItem: function (itemId) {
    var list = this.state.list;

    delete list[itemId];

    this.updateList(list);
  },

  removeAllListItems: function () {
    this.updateList({});
  },
*/
  render: function () {
    
    
    return (
      
      <div className="row">
        <div className="col-md-8">
          header 1
        </div>
        <div className="col-md-4">
          header 2
        </div>
      </div>
    );

}
  
});

module.exports = FoodManageHeader;