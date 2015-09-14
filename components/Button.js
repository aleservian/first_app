'use strict';

var React = require('react-native'),
    styles = require('./../Style.js');
var {
  Text,
  Component,
  TouchableOpacity,
} = React;
class Button extends Component{
  constructor(props) {
    super(props);
  }
   _handlePress(){
     this.props.navigator.push(this.props.objPage);
   }
   render(){
      return (
        <TouchableOpacity style={styles.buttonTest} onPress={this._handlePress.bind(this)}>
           <Text style={styles.buttonText}>{this.props.name}</Text>
        </TouchableOpacity>
      )
   }
}
module.exports = Button;