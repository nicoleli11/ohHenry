import React, { Component } from 'react';
import { Text, TextInput, View,Button} from 'react-native';

export default class Bot extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{left:20,top:80}}>
        <TextInput
          style={{height: 20}}
          placeholder="Set a text here"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
        title="Send" onPress={()=>{alert('You send {this.value}');
      }}
        />

      </View>
    );
  }
}
