/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,  
  StyleSheet
} from 'react-native';
import Todo from './src/TodoApp';
import store from './src/store/index';
import { Provider } from 'react-redux'


const App=() => {
  return (
    <View style={style.Main}> 
    <Provider store ={store}>
    <Todo />

    </Provider>

    </View>
  )
};


const style = StyleSheet.create({
  Main:{
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center'
  }
})
export default App;
