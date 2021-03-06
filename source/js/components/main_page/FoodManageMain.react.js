var React = require('react');
var List = require('./List.react');
//var AddListItem = require('./AddListItem.react');
var PortalStore = require('../../stores/PortalStore');

var AddListItem = require('./AddListItem.react');


var FoodManageMain = React.createClass({
 
/* getInitialState: function () {
    return PortalStore.getAll();
  },
  componentDidMount: function() {
        webAPIUtils.getVendor(1);
        PortalStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        PortalStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(PortalStore.getAll());
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


          <List items={PortalStore.getFood}/>
        
*/
  render: function() {
   
    
    return (
      

      <div className="row"> 
      <div className="col-sm-6">
       <List />
      </div>
        <div className="col-sm-6">
          <AddListItem />
        </div>
    </div>
      
    );}


  
});

module.exports = FoodManageMain;
