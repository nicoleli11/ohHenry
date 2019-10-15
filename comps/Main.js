import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import Mid from '../Ashlynn/Picker';
import Top from '../Emily/Switch';
import Bot from '../Dora/Bot';


function Main(){
  return(
      <View>
        <Top />
        <Mid />
        <Bot />
      </View>

  )
}


export default Main;
