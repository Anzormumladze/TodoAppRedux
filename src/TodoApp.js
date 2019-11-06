import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos';



const TodoApp =() => {
  return (
    <View style={style.Main}>
        <AddTodo/>
        <View>
            <VisibleTodos />
        </View>
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

export default TodoApp;