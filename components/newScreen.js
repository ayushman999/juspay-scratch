import navigation from 'react-navigation'

import React, { Component } from 'react';  
import { Button, FlatList,  
    StyleSheet, Text, View,Alert } from 'react-native';  
import {useState} from "react";


var newScreen=({name})=>{

  const[actionList, setActionList] = useState([])
        function addX(){
          let str = "Add X by 50";
          console.log(str);
          setActionList((currentActions,index)=>[
            ...actionList,
            {text: str, id:index}
          ]);
        }

        function addY(){
          let str = "Add Y by 50";
          console.log(str);
          setActionList((currentActions,index)=>[
            ...actionList,
            {text: str, id: index}
          ]);
        }

        function addXY(){
          let str = "Add X by 50 and Y by 50";
          console.log(str);
          setActionList((currentActions,index)=>[
            ...actionList,
            {text: str, id: index}
          ]);
        }

        function rotate(){
          let str = "Rotate by 360";
          console.log(str);
          setActionList((currentActions,index)=>[
            ...actionList,
            {text: str, id: index}
          ]);
        }

        function duplicateList(){
          console.log("Duplicate");
          let str = "Repeat";
          setActionList((currentActions,index)=>[
            ...actionList,
            {text: str, id: index}
          ]);
        }
        return (  
            <View style={styles.container}> 
            <View style = {{ flexDirection: 'row'}}>
              <Text style = {{flex:1,padding:10,backgroundColor:'yellow'}}>Actions</Text>
              <Text style = {{flex:1,padding:10,backgroundColor:'green',color:'white'}}>Your Action</Text>
            </View>
                <View style = {{flex:1, flexDirection: 'row'}}>
                <View style = {{flex:1,flexDirection:'column',justifyContent:'space-evenly', borderWidth: 1, borderColor: 'black'}}>
                  <Button title='Add X=50' style = {styles.buttonStyle} onPress = {addX}/>
                  <Button title='Add Y=50' style = {styles.buttonStyle} onPress = {addY}/>
                  <Button title='Rotate 360' style = {styles.buttonStyle} onPress = {rotate}/>
                  <Button title='Add X=50 & Y=50' style = {styles.buttonStyle} onPress = {addXY}/>
                  <Button title = 'Repeat' style = {styles.buttonStyle} onPress = {duplicateList}/>

                </View>
                <FlatList  style = {{flex: 1, borderWidth: 1, borderColor: 'black'}}
                    data={actionList}  
                    renderItem={(itemData) =>  
                    <Text style={styles.item}>  
                    {itemData.item.text}</Text>}  
                /> 
                </View> 
            </View>  
        );  
    }  
export default newScreen;


const styles = StyleSheet.create({  
    container: {  
        flex: 1, 
        flexDirection: 'column' 
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44, 
        borderWidth:1,
        backgroundColor:'red',
        color:'white',
        borderColor:'#e5e5e5' 
    },  

    buttonStyle:{
      flex:1,
      height:40,
      width:'80%',
      backgroundColor:'blue',
      color:'white',
      textAlign:'center',
      textAlignVertical:'center',
    
    }
})  
