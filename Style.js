'use strict';

var React = require('react-native');
var {
  StyleSheet,
} = React;
var style = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#BBDEFB',
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
    flex: 1
  },
  buttonTest: {
    alignItems: 'center',//centraliza na horizontal o filho
    backgroundColor: '#fd5d05',
    height: 40,
    alignSelf: 'center',//centraliza o pai
    width: 150,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',//Centraliza na vertical o filho
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    // textAlign: 'center'
  },
  map:{
    flex: 1,
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#000000'
  }
});
module.exports = style;