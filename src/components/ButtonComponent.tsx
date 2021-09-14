import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

// import { Container } from './styles';

interface ButtonComponent extends RectButtonProps{
  title: string,
  ImageSource?: any
}

export default function ButtonComponent({ title,ImageSource, ...props} : ButtonComponent){
  return (
    <RectButton {...props} style={styles.container}>
      {ImageSource? (<Image 
        source={ImageSource}
        style={styles.image}
      />) : null}
      <Text style={styles.text}>{title}</Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 200,
    backgroundColor: "#ccc",
    borderRadius: 12,
    margin: 5
  },
  image:{
    maxHeight: 100,
    resizeMode: "contain",
    marginBottom: 10
  },
  text:{
    fontSize: 16,
    fontWeight: '700',
    color: "#666"
  }
})