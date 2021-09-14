import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { Container } from './styles';

export default function toHtml() {
  return (
    <View style={styles.container}>
      <Text>toHtml</Text>
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