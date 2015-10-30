var React = require('react');
var List = require('./List.react');
var AddListItem = require('./AddListItem.react');
var PortalStore = require('../stores/PortalStore');



function getPortalState() {
    return  PortalStore.getAll();
}




var ShoppingList = React.createClass({
  getInitialState: function () {


    return getPortalState()
  },
  componentDidMount: function() {
        PortalStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        PortalStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getPortalState());
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
    var showMain = PortalStore.getStatus().showMain
    console.log(showMain);
    if (showMain){
      return (
        <h3 className="page-header">what the fuck</h3>
        );
    } 
    else{
    return (
      <div className="row">
        <div className="col-sm-6">
          <List items={getPortalState()}/>
        </div>
        <div className="col-sm-6">
          <AddListItem />
        </div>
      </div>
    );
}
}
  
});

module.exports = ShoppingList;
