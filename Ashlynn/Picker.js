import React, {useState} from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';


function Mid(){
  const [bgColor, setBgColor] = useState(true);
  const [dfStyle, setDfStyle] = useState({
    backgroundColor: "#fffdd0"
  });
  if(bgColor === false){
    backgroundColor:"#ffffff"
  }
  state= {
    language:'pick your color'
  }
  return(
    <View style={dfStyle}>
      <Text>pick your color</Text>
      <Picker
        selectedValue={this.state.language}
        onValueChange={() =>{
          setBgColor(!bgColor);
        }}>
        <Picker.Item label="Color" value="color1" />
        <Picker.Item label="Color2" value="color2" />
        </Picker>

    </View>

  );
  }






export default Mid;
