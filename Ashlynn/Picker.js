import React, {useState} from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';


function Picker1(){
  state= {
    language:'pick your color'
  }
  if(Picker.Item.value == 'color1'){
    styles.container.backgroundColor = '#DAD'
  }else if(Picker.Item.value == 'color2') {
    styles.container.backgroundColor = '#FAD'
  }
  return(
    <View style={styles.container}>
      <Text>{this.state.language}</Text>
      <Picker
        selectedValue={this.state.language}
        style={{height: 100, width: 200, top:80}}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({language: itemValue})
        }>
        <Picker.Item label="Color" value="color1" />
        <Picker.Item label="Color2" value="color2" />
        </Picker>

    </View>

  );
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,
    margin: 20,
    padding:20,
  },
});



export default Picker1;
