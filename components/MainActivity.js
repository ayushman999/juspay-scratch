import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import Draggable from "react-native-draggable";
import CoordinateBar from "../components/CoordinateBar";
import ToolBoxItem from "../components/ToolBoxItem";
import navigation  from 'react-navigation'
import { withNavigation } from "react-navigation";
import react, { useState } from "react";

const  App=({navigation,route})=> {

  const[toolBoxImgVisible, setToolBoxImageVisible] = useState(0)
  const[ballBoxImgVisible, setBallBoxImageVisible] = useState(0)
  const[visibleScratchAction, setScratchActionVisible] = useState(0)
  const[visibleBallAction, setBallActionVisible] = useState(0)
  const[ballBG, setBallBG] = useState('white');
  const[scratchBG, setScratchBG] = useState('white');
  const[sprite,setSprite] = useState("");
  const[X,setXP] = useState(0);
  const[Y,setYP] = useState(0);


  
  function toolBoxPressed(){
    if(toolBoxImgVisible==0){
      setToolBoxImageVisible(100);
      setScratchActionVisible(100);
      setScratchBG('green');
      setSprite("Cat")
    }
    else{
      setToolBoxImageVisible(0);
      setScratchActionVisible(0);
      setScratchBG('white');
    }
    
  }

  function scratchActionPressed(){
    console.log("action of scratch");
    navigation.navigate('Action',{name:"Ayushman"})
  }

  function ballActionPressed(){
    console.log("action of ball!");
    navigation.navigate('Action',{name:"Ayushman"})
  }

  function ballBoxPressed(){
    if(ballBoxImgVisible==0){
      setBallBoxImageVisible(100);
      setBallActionVisible(100);
      setBallBG('green');
      setSprite("Ball");
    }
    else{
      setBallBoxImageVisible(0);
      setBallActionVisible(0);
      setBallBG('white');
      setSprite("");
    }
  }

  function setPosition(evt){
    setXP(evt.nativeEvent.locationX);
    setYP(evt.nativeEvent.locationY);
  }

  return (
    <View style = {styles.container}>
      <View style = {styles.playground}>
        <View style = {{opacity:toolBoxImgVisible}}>
        <Draggable
          id = 'scratch'
          imageSource={require('../assets/icn_scratch.png')}
          renderSize = {50}
          x={0}
          y={0}
          onPressIn = {()=> setSprite("Cat")}
          onRelease = {()=> console.log('out press')}
          onDragRelease = {setPosition}
        />
        </View>

        <View style = {{opacity:ballBoxImgVisible}}>
        <Draggable
          imageSource={require('../assets/ball.png')}
          renderSize = {50}
          x={0}
          y={50}
          onPressIn = {()=> setSprite("Ball")}
          onRelease = {()=> console.log('out press')}
          onDragRelease = {setPosition}
        />
        </View>
      </View>

      <CoordinateBar 
        name = {sprite}
        xPos = {X}
        yPos = {Y}
      />
      <View style={styles.tools}>
          <ToolBoxItem
            path= {require('../assets/icn_scratch.png')}
            backgroundColor = {scratchBG}
            pressedImg = {toolBoxPressed}
            pressedAction = {scratchActionPressed}
            visibileAction = {visibleBallAction}
            />
          <ToolBoxItem 
          path = {require('../assets/ball.png')}
          backgroundColor = {ballBG}
          visibileAction = {visibleBallAction}
          pressedImg = {ballBoxPressed}
          pressedAction = {ballActionPressed}
          />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e5e5e5',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  playground:{
    flex: 7,
    width: '98%',
    backgroundColor: 'white',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 4,
    color: 'white'

  },


  tools:{
    flex: 3,
    width: '98%',
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    margin: 8,
  },
});
export default withNavigation(App);