/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  ScrollView,
  TouchableOpacity,
  AlertIOS,
  Navigator,
  StatusBarIOS
} = React;

var SCREEN_WIDTH = require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FloatFromRight;
console.log(Navigator.SceneConfigs.FloatFromLeft)
var CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
  snapVelocity: 8,
  edgeHitWidth: false,
  isDetachable: true,
  gestureDetectMovement: 1,
  notMoving: 0,
  directionRatio: 2,
  stillCompletionRatio: 1,
  fullDistance: 320,
  direction: 'left-to-right'
});

var CustomSceneConfig = Object.assign({}, BaseConfig, {
  springTension: 100,
  springFriction: 1,
  defaultTransitionVelocity: 1,
  gestures: {
    pop: CustomLeftToRightGesture,
  }
});
class NavBar extends Component{
  render(){
    return (
      <View style={styles.toolbar}>
         <TouchableOpacity>
           <View style={styles.toolbarButton}>
              <Text style={styles.toolbarButtonText}>Adicionar</Text>
           </View>
         </TouchableOpacity>
         <View style={styles.toolbarTitle}>
            <Text style={styles.toolbarTitleText}>Home</Text>
         </View>
         <TouchableOpacity>
           <View style={styles.toolbarButton}>
              <Text style={styles.toolbarButtonText}>Alertas</Text>
           </View>
         </TouchableOpacity>
      </View>
    )
  }
}
class PageOne extends Component{
  constructor(props) {
    super(props);
  }
   _handlePress(){
     this.props.navigator.push({id: 1});
     //AlertIOS.alert('Titulo','corpo do texto',[{text:'Sim'},{text:'Nao'}])
   }
   render(){
      return (
        <View style={styles.mainContainer}>
           <TouchableOpacity style={styles.buttonTest} onPress={this._handlePress.bind(this)}>
             <Text style={styles.buttonText}>Contato</Text>
           </TouchableOpacity>
           <ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
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

class PageTwo extends Component{
  constructor(props) {
    super(props);
  }
   _handlePress(){
     this.props.navigator.pop();
   }
  render(){
    return (
       <View style={styles.mainContainer}>
           <TouchableOpacity style={styles.buttonTest} onPress={this._handlePress.bind(this)}>
             <Text style={styles.buttonText}>Home</Text>
           </TouchableOpacity>
        </View> 
    )
  }
}

class Home extends Component{
  _renderScene(route, navigator) {
    console.log(route.component)
    if (route.id === 0) {
      return <PageOne navigator={navigator} />
    }else if(route.id === 1){
      return <PageTwo navigator={navigator} />
    } 
  }
  _configureScene(route) {
    return CustomSceneConfig;
  }
  render() {
    StatusBarIOS.setStyle(0);
    var navigationBar = <NavBar />
    return (
      <Navigator
        initialRoute={{id: 0,component: 'aadsf'}}
        renderScene={this._renderScene}
        navigationBar={navigationBar}
        configureScene={this._configureScene} />
    );
  }
}

var styles = StyleSheet.create({
  mainContainer: {
    marginTop:64,
    flex: 1
  },
  toolbar: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    height: 64,
    backgroundColor:'#81c04d',
    paddingTop:20,
    flexDirection: 'row',
  },
  toolbarButton: {
    width: 70,
    height: 44,
    justifyContent: 'center'
  },
  toolbarButtonText:{
    color: '#fff',
    textAlign: 'center'
  },
  toolbarTitle: {
    flex: 1,
    height: 44,
    justifyContent: 'center'
  },
  toolbarTitleText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    backgroundColor: '#ebeef0',
    height: 100,
    flex: 1
  },
  buttonTest: {
    alignItems: 'center',//centraliza na horizontal o filho
    backgroundColor: '#fd5d05',
    height: 40,
    alignSelf: 'center',//centraliza o pai
    width: 100,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',//Centraliza na vertical o filho
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    // textAlign: 'center'
  }
});

AppRegistry.registerComponent('first_app', () => Home);
