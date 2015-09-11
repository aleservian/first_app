'use strict';

var React = require('react-native'),
    styles = require('./../Style.js');
var {
  Text,
  View,
  Component,
  ScrollView,
  TouchableOpacity,
} = React;
class Scroll extends Component{
  constructor(props) {
    super(props);
  }
   _handlePress(){
     this.props.navigator.push({name: 'Contato',component: PageTwo});
   }
   render(){
      return (
        <View style={styles.container} >
         <TouchableOpacity style={styles.buttonTest} onPress={this._handlePress.bind(this)}>
           <Text style={styles.buttonText}>Contato</Text>
         </TouchableOpacity>
         <ScrollView automaticallyAdjustContentInsets={false}>
           <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis rhoncus ex. Maecenas eget volutpat elit, in ultricies orci. Duis fermentum venenatis aliquam. Aliquam erat volutpat. Pellentesque vitae sodales mauris, egestas iaculis eros. Proin nec sodales lorem. In vestibulum condimentum odio, a gravida elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis rhoncus ex. Maecenas eget volutpat elit, in ultricies orci. Duis fermentum venenatis aliquam. Aliquam erat volutpat. Pellentesque vitae sodales mauris, egestas iaculis eros. Proin nec sodales lorem. In vestibulum condimentum odio, a gravida elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis rhoncus ex. Maecenas eget volutpat elit, in ultricies orci. Duis fermentum venenatis aliquam. Aliquam erat volutpat. Pellentesque vitae sodales mauris, egestas iaculis eros. Proin nec sodales lorem. In vestibulum condimentum odio, a gravida elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis rhoncus ex. Maecenas eget volutpat elit, in ultricies orci. Duis fermentum venenatis aliquam. Aliquam erat volutpat. Pellentesque vitae sodales mauris, egestas iaculis eros. Proin nec sodales lorem. In vestibulum condimentum odio, a gravida elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis rhoncus ex. Maecenas eget volutpat elit, in ultricies orci. Duis fermentum venenatis aliquam. Aliquam erat volutpat. Pellentesque vitae sodales mauris, egestas iaculis eros. Proin nec sodales lorem. In vestibulum condimentum odio, a gravida elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis rhoncus ex. Maecenas eget volutpat elit, in ultricies orci. Duis fermentum venenatis aliquam. Aliquam erat volutpat. Pellentesque vitae sodales mauris, egestas iaculis eros. Proin nec sodales lorem. In vestibulum condimentum odio, a gravida elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis rhoncus ex. Maecenas eget volutpat elit, in ultricies orci. Duis fermentum venenatis aliquam. Aliquam erat volutpat. Pellentesque vitae sodales mauris, egestas iaculis eros. Proin nec sodales lorem. In vestibulum condimentum odio, a gravida elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis rhoncus ex. Maecenas eget volutpat elit, in ultricies orci. Duis fermentum venenatis aliquam. Aliquam erat volutpat. Pellentesque vitae sodales mauris, egestas iaculis eros. Proin nec sodales lorem. In vestibulum condimentum odio, a gravida elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis rhoncus ex. Maecenas eget volutpat elit, in ultricies orci. Duis fermentum venenatis aliquam. Aliquam erat volutpat. Pellentesque vitae sodales mauris, egestas iaculis eros. Proin nec sodales lorem. In vestibulum condimentum odio, a gravida elit.v

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis rhoncus ex. Maecenas eget volutpat elit, in ultricies orci. Duis fermentum venenatis aliquam. Aliquam erat volutpat. Pellentesque vitae sodales mauris, egestas iaculis eros. Proin nec sodales lorem. In vestibulum condimentum odio, a gravida elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis rhoncus ex. Maecenas eget volutpat elit, in ultricies orci. Duis fermentum venenatis aliquam. Aliquam erat volutpat. Pellentesque vitae sodales mauris, egestas iaculis eros. Proin nec sodales lorem. In vestibulum condimentum odio, a gravida elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis rhoncus ex. Maecenas eget volutpat elit, in ultricies orci. Duis fermentum venenatis aliquam. Aliquam erat volutpat. Pellentesque vitae sodales mauris, egestas iaculis eros. Proin nec sodales lorem. In vestibulum condimentum odio, a gravida elit.
           </Text>
         </ScrollView>
        </View> 
      )
   }
}
module.exports = Scroll;