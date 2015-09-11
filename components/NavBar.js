'use strict';

var React = require('react-native'),
    styles = require('./../Style.js');
var {
  Text,
  View,
  Component
} = React;
class NavBar extends Component{
  render(){
    return (
      <View style={styles.toolbar}>
         <View style={styles.toolbarTitle}>
            <Text style={styles.toolbarTitleText}>{this.props.currentRoute.name}</Text>
         </View>
      </View>
    )
  }
}
module.exports = NavBar;