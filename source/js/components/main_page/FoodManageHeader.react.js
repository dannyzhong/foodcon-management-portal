// FoodManageHeader.react.js

var React = require('react');
var PortalStore = require('../../stores/PortalStore');
var HeaderStore = require('../../stores/HeaderStore');
var webAPIUtils = require('../../utils/WebAPIUtils')
var Label = require('react-bootstrap').Label

var FoodManageHeader = React.createClass({
  getInitialState: function () {
    return HeaderStore.getHeaderState();
  },
  componentDidMount: function() {
        HeaderStore.addHeaderStateChangeListener(this._headerStateChange);
        webAPIUtils.getVendor(1);
    },

    componentWillUnmount: function() {
        HeaderStore.removeHeaderStateChangeListener(this._headerStateChange);
    },

    _headerStateChange: function() {
        this.setState(HeaderStore.getHeaderState());
    },

    /*
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
    var name = HeaderStore.getHeaderState().vendorInfo.name;
    console.log(HeaderStore.getHeaderState());
    return (
      
      <div className="row">
        <div className="col-md-8">
          <h3>Welcome <Label bsStyle="success">  {name} </Label></h3>
        </div>
        <div className="col-md-4">
          header 2
        </div>
      </div>
    );

}
  
});

module.exports = FoodManageHeader;