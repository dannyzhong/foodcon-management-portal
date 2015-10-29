var React = require('react');
var uuid = require('node-uuid');
var request = require('superagent');
var PortalActions = require('../actions/PortalActions');

var AddListItem = React.createClass({
  handleSubmit: function (event) {
    event.preventDefault();

  
    var description = this.refs.description.getDOMNode().value.trim();
    var title = this.refs.name.getDOMNode().value.trim();

    PortalActions.createFood(title, description);
  },
  render: function () {
    var styleRequired = {
      color: "#ffaaaa"
    };

    return (
      <form onSubmit={this.handleSubmit}>
        <h3 className="page-header">Add New Food</h3>

        <div className="form-group">
          <label htmlFor="listItemName">Name <span style={styleRequired}>*</span></label>
          <input type="text" className="form-control" id="listItemName" placeholder="Enter name" required ref="name" />
        </div>

        <div className="form-group">
          <label htmlFor="listItemDescription">Description</label>
          <textarea className="form-control" rows="3" id="listItemDescription" placeholder="Enter description" ref="description"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="listItemQuantity">Quantity <span style={styleRequired}>*</span></label>
          <div className="row">
            <div className="col-xs-5 col-sm-6 col-md-4">
              <input type="number" min="1" max="9999" step="1" defaultValue="1" className="form-control" id="listItemQuantity" required ref="quantity" />
            </div>
          </div>
        </div>

        <hr />

        <button type="submit" className="btn btn-primary">Add to list</button>
        <button type="reset" className="btn btn-link">Cancel</button>
      </form>
    );
  }
});

module.exports = AddListItem;
