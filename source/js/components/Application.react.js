var React = require('react');
var ShoppingList = require('./ShoppingList.react');
var PortalStore = require('../stores/PortalStore');


var Application = React.createClass({


  render: function () {
    return (
      <div className="container">
        <ShoppingList items={PortalStore.getAll()} />
      </div>
    );
  }
});

module.exports = Application;
