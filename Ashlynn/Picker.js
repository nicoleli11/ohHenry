import React, {useState} from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';


function Picker1(){
  state= {
    language:'color1',
  }
  return(
    <View style={styles.container}>
      <Text>(this.state.language)</Text>
      <Picker
        selectedValue={this.state.language}
        style={{height: 50, width: 100}}
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
    backgroundColor: '#9FA8DA',
  },
});



export default Picker1;
