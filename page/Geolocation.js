'use strict';

var React = require('react-native'),
    styles = require('./../Style.js');
var {
  Text,
  View,
  Component,
  ScrollView,
  TouchableOpacity
} = React;
 
class Geolocation extends Component{
   constructor(props) {
      super(props);
      this.state = {
        initialPosition: 'unknown'
      };
   }
   componentDidMount(){
    navigator.geolocation.watchPosition(
      (initialPosition) => this.setState({initialPosition}),
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
     );
   }
   _handlePress(){
     this.props.navigator.pop();
   }
   render(){
      return (
        <View style={styles.container} >
          <TouchableOpacity style={styles.buttonTest} onPress={this._handlePress.bind(this)}>
           <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <View>
            <Text>{this.state.initialPosition}</Text>
          </View>
        </View> 
      )
   }
}
module.exports = Geolocation;