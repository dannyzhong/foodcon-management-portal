var React = require('react');
var uuid = require('node-uuid');
var request = require('superagent');
var PortalActions = require('../../actions/PortalActions');
var Button = require('react-bootstrap').Button
var Glyphicon = require('react-bootstrap').Glyphicon
var Row = require('react-bootstrap').Row
var Col = require('react-bootstrap').Col
var Input = require('react-bootstrap').Input
var ButtonGroup = require('react-bootstrap').ButtonGroup
var MainStore = require('../../stores/MainStore');
var ReactDOM = require('react-dom');



var AddListItem = React.createClass({
  getInitialState: function () {
    return MainStore.getAddFoodState();
  },
  componentDidMount: function() {
        MainStore.addAddFoodStateChangeListener(this._addFoodStateChange);
        //webAPIUtils.getVendor(1);
    },

    componentWillUnmount: function() {
        MainStore.removeAddFoodStateChangeListener(this._addFoodStateChange);
    },

    _addFoodStateChange: function() {
        this.setState(MainStore.getAddFoodState());
    },





  handleSubmit: function (event) {
    event.preventDefault();


    //PortalActions.createFood(title, description);
  },
  handleAddIngredient: function (event) {



  var ingredient = {
     name: this.refs.new_name.getValue(),
     weight: this.refs.new_weight.getValue()
   };
   PortalActions.addNewIngredient(ingredient);
    
  },
  handleAddFood: function (event) {
    event.preventDefault();
    var ingredient_new = {
     name: this.refs.new_name.getValue(),
     weight: this.refs.new_weight.getValue()
   };

   var curList = MainStore.getAddFoodState().ingredient;
   var foodName = this.refs.food_name.getValue();
   var ingredient_list = []
   for(var i = 0;i<curList.length;i++){
      var name = this.refs[i + "_inname"].getValue();
      var weight = this.refs[i + "_ingram"].getValue();
      var ingredient = {
     name: name,
     weight: weight
   };
    ingredient_list.push(ingredient);
   }
   ingredient_list.push(ingredient_new);

   foodItem = {
    food_name: foodName,
    ingredient: ingredient_list

   }
   PortalActions.addFoodToList(foodItem);

    
  },
  render: function () {
    var styleRequired = {
      color: "#ffaaaa"
    };



    var addFoodState = MainStore.getAddFoodState();
    var food_name = addFoodState.food_name;
    var ingredient_list  = [];
    
    for (var i =0; i < addFoodState.ingredient.length; i++){
      var refName = i + "_inname";  
      var refGram = i + "_ingram";  
     
      ingredient_list.push(
        <Row>
        <Col xs={4}>
        <Input type="text" value = {addFoodState.ingredient[i].name}  ref={refName} />
        </Col>
    

      <Col xs={4}>
        <Input type="text" value = {addFoodState.ingredient[i].weight}  ref={refGram} />
        </Col> 
        </Row>
        );


    }

ingredient_list.push(

          <Row>
          <Col xs={4}>
          <Input type="text"  placeholder="Enter name"  ref="new_name" />
          </Col>
          <Col xs={4}>
           <Input type="text"   placeholder="Enter gram"  ref="new_weight" />
          </Col>
          <Col xs={4}>
         
       
          <Button onClick={this.handleAddIngredient}><Glyphicon glyph="plus" /> add</Button>
 
          
          </Col>
          </Row>);

    

    return (



      <form >
       <h3 className="page-header">Add New Food</h3>

        <div className="form-group">
          <label htmlFor="listItemName">Name <span style={styleRequired}>*</span></label>
          <Input type="text"  placeholder="Enter name" required ref="food_name" />
        </div>

     
        <div className="form-group">
           <label htmlFor="listItemName">Ingredient <span style={styleRequired}>*</span></label>
       
        
          {ingredient_list}


        </div>
   

        <hr />
        <ButtonGroup>
        <Button onClick={this.handleAddFood} bsStyle="primary">Add to list</Button>
        <Button type="reset" bsStyle="link">Cancel</Button>
        </ButtonGroup>
      </form>
    );
  }
});

module.exports = AddListItem;
