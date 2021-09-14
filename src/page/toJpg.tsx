import React from 'react';
import {  Button, StyleSheet, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker'


import  * as FileSystem from 'expo-file-system';

// import { Container } from './styles';


export default function toJpg() {


  
  async function _handlePicker(){
    const files = await DocumentPicker.getDocumentAsync({
      //multiple: true,
      copyToCacheDirectory: true
    })
    if(files.type == "cancel"){
      return
    }

    FileSystem.moveAsync({
      to: files.uri,
      from: 'file:///'
    }).then(data=>{
      console.log(data)
    })
    
  }
  return (
    <View style={styles.container}>
      <Button 
        onPress={_handlePicker}
        title="Anexar"
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  }
})