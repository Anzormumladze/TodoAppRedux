import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import Icon from 'react-native-ionicons'
import {connect} from  'react-redux'


class AddTodo extends Component {
state = {
    text:''
}

addTodo = (text) =>{
    this.props.dispatch({type:"ADD_TODO",text})
    this.setState({text:''})
}

    render(){
  return (
    <View style={{flexDirection:'row',marginHorizontal:20}}>
        <TextInput
        onChangeText = {(text)=>this.setState({text})}
        value = {this.state.text}
        placeholder='E.g create new video'
        style={{borderWidth:1,borderColor:'#f2f2e1',
        backgroundColor:'#eaeaea',height:50,flex:1,padding:5}} />        
    
    
    <TouchableOpacity onPress={()=>this.addTodo(this.state.text)} >
        <View style={{height:50,backgroundColor:'#eaeaea'}}>
            <Icon name='add' size={30} style={{padding:10} } />
        </View>
    </TouchableOpacity>
    </View>
  )
};
}


export default connect()(AddTodo)
const style = StyleSheet.create({
    Main:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
})

