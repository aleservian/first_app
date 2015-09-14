'use strict';

var React = require('react-native'),
    Scroll = require('./../components/Scroll.js'),
    Geolocation = require('./../page/Geolocation.js'),
    Button = require('./../components/Button.js'),
    styles = require('./../Style.js');
var {
  Text,
  View,
  Component,
  ScrollView,
  TouchableOpacity
} = React;
 
class Home extends Component{
   constructor(props) {
      super(props);
   }
   render(){
      return (
        <View style={styles.container} >
          <ScrollView automaticallyAdjustContentInsets={false}>
             <Button navigator={this.props.navigator} name='Scroll' objPage={{name: 'Scroll',component: Scroll}}  />
             <Button navigator={this.props.navigator} name='Geolocalizacao' objPage={{name: 'Geolocalizacao',component: Geolocation}}  />
          </ScrollView>
        </View> 
      )
   }
}
module.exports = Home;