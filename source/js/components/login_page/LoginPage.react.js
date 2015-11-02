// LoginPage.react.js



var React = require('react');
//var webAPIUtils = require('../utils/WebAPIUtils')
var PortalStore = require('../../stores/PortalStore');
var PortalActions = require('../../actions/PortalActions');
var LoginPage = React.createClass({
 
 
 
 handleSubmit: function (event) {
    event.preventDefault();
 	var status = {
    displayMain: true,
    displayLogin: false
	};
	
	PortalActions.updatePageDisplayStatus(status);

  },
  render: function () {

    
    return (
      
      <div class="container">

     <form className="form-signin" onSubmit={this.handleSubmit}>
        <h2 className="form-signin-heading">Please sign in</h2>
        <label htmlFor="inputEmail" className="sr-only" >Email address</label>
        <input type="email" id="inputEmail" value="zho.danny@gmail.com" className="form-control" placeholder="Email address" required autofocus />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" value="111111" className="form-control" placeholder="Password" required />
        <div className="checkbox">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>

    </div>
    );

}
  
});

module.exports = LoginPage;