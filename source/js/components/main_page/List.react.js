var React = require('react');
//var ListItem = require('./ListItem.react');
var MainStore = require('../../stores/MainStore');
var HeaderStore = require('../../stores/HeaderStore');
var QRCode = require('qrcode.react');

var Panel = require('react-bootstrap').Panel

/*
var ListHeader = React.createClass({
  handleSubmit: function (event) {
    event.preventDefault();

    this.props.removeAllListItems();
  },

  render: function () {
    var totalNumberOfListItems = this.props.totalNumberOfListItems;

    if (totalNumberOfListItems > 0) {
      return (
        <form onSubmit={this.handleSubmit} className="form-inline">
          {this.props.totalNumberOfListItems} {totalNumberOfListItems === 1 ? 'item' : 'items'}
          {' '}

          <button className="btn btn-xs btn-default" type="submit">Remove all</button>
        </form>
      );
    }

    return (<span>Shopping List</span>);
  }
});
*/
var EmptyList = React.createClass({
  render: function () {
    return (
      <div>
        There are no items in your list.
      </div>
    );
  }
});


var List = React.createClass({
  
/*
  getListOfItemIds: function (items) {
    return Object.keys(items);
  },

  getTotalNumberOfListItems: function (items) {
    var totalNumberOfItems = 0;
    var item;

    this.getListOfItemIds(items).forEach(function (itemId) {
      item = items[itemId];
      totalNumberOfItems = totalNumberOfItems + parseInt(item.quantity, 10);
    });

    return totalNumberOfItems;
  },
*/

getInitialState: function () {
    return MainStore.getAddFoodListState();
  },
  componentDidMount: function() {
        MainStore.addFoodListStateChangeListener(this._FoodListStateChange);
        //webAPIUtils.getVendor(1);
    },

    componentWillUnmount: function() {
        MainStore.removeFoodListStateChangeListener(this._FoodListStateChange);
    },

    _FoodListStateChange: function() {
        this.setState(MainStore.getAddFoodListState());
    },


  createListItemElements: function (items) {
    var foodList = MainStore.getAddFoodListState().FoodList;
    var name = HeaderStore.getHeaderState().vendorInfo.name;
    var listItemElements = [];
    for(var i = 0;i <foodList.length;i++){
      listItemElements.push(
        <Panel header={(i+1)+foodList[i].food_name}>
          <QRCode value= {i+foodList[i].food_name+name} />
        </Panel>
        );

    }
    return listItemElements;


    
  },

  render: function () {
    var items = MainStore.getAddFoodListState().FoodList;
    var listItemElements = this.createListItemElements(items);

    return (
      <div>
        
        <ul>{listItemElements.length > 0 ? listItemElements : <EmptyList />}</ul>
      </div>
    );
  }
});

module.exports = List;
