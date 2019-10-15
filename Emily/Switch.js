import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';

function Top(){
  //switch changes text YES
  //switch changes colour of text YES
  //switch changes background colour YES
  //switch turns green when in dark mode SORT OF (always green :/)
  const [mainText, setMainText] = useState("Day Mode")
  const [mainStyle, setMainStyle] = useState({
    backgroundColor:"#FFFFFF"
  });

  return (
    <View style={mainStyle}>
      <Switch
        trackColor={{true:'grey', false:'lightgreen'}}
        onChange={()=>{
        setMainText("Dark Mode");
        setMainStyle({
          backgroundColor:"#000000",
          padding:50,
          margin:50
        });
      }}
      />
    <Text style={{color:mainText ? "black" : "white"}}>{mainText}</Text>
      <Text style={{color:setMainText ? "white" : "black"}}>{mainText}</Text>
    </View>
  )
}

export default Top;
