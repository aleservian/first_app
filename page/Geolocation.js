'use strict';

var React = require('react-native'),
    styles = require('./../Style.js');
var {
  Text,
  View,
  Component,
  ScrollView,
  TouchableOpacity,
  MapView
} = React;
 
class Geolocation extends Component{
   constructor(props) {
      super(props);
      this.state = {
        region: {
          latitude: 'unknown',
          longitude: 'unknown',
          latitudeDelta: '',
          longitudeDelta: ''
        }
      };
   }
   componentDidMount(){
    navigator.geolocation.watchPosition(
      (initialPosition) => this.setState({region:{latitude:initialPosition.coords.latitude,longitude:initialPosition.coords.longitude,latitudeDelta:initialPosition.coords.latitude,longitudeDelta:initialPosition.coords.longitude}}),
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 500, maximumAge: 1000}
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
            <Text>Latitude: {this.state.region.latitude}</Text>
            <Text>longitude: {this.state.region.longitude}</Text>
          </View>
          <MapView annotations={[{ latitude: -16.704387, longitude: -49.260802,title: 'Fastdone',subtitle: 'Desenvolvimento de apps'}]} style={styles.map} />
        </View> 
      )
   }
}
module.exports = Geolocation;