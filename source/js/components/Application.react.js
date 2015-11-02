var React = require('react');
var FoodManagePage = require('./main_page/FoodManagePage.react');
var LoginPage = require('./login_page/LoginPage.react');

var PortalStore = require('../stores/PortalStore');



var Application = React.createClass({

 getInitialState: function () {
    return PortalStore.getPageDisplayStatus();
  },
  componentDidMount: function() {
        PortalStore.addPageDisplayStatusChangeListener(this.updateDisplayStatus);       
    },

    componentWillUnmount: function() {
        PortalStore.removePageDisplayStatusChangeListener(this.updateDisplayStatus);
    },

    updateDisplayStatus: function() {

        this.setState(PortalStore.getPageDisplayStatus());
    },

  render: function () {

  	console.log(PortalStore.getPageDisplayStatus());
  	if (PortalStore.getPageDisplayStatus().displayMain){
    return (
      <div className="container">

        
        <FoodManagePage  />
      

      </div>
    );}

    if (PortalStore.getPageDisplayStatus().displayLogin){
    	return (<div className="container">

        
        <LoginPage />
      

      </div>);


    }
  }
});

module.exports = Application;
