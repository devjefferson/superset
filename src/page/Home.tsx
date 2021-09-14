import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import jpg from '../Image/jpg.png'

// import { Container } from './styles';

export default function Home() {
  const {navigate} = useNavigation() as any
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View >
          <ButtonComponent title="Image/PDF" ImageSource={jpg} onPress={()=> navigate('toJpg')} />
        </View>
        <View>
          <ButtonComponent title="Image/PDF" ImageSource={jpg} onPress={()=> navigate('toHtml')}  />
        </View>
      </View>
      <View style={styles.group}>
        <View>
          <ButtonComponent title="Image/PDF" ImageSource={jpg} onPress={()=> navigate('toDoc')}  />
        </View>
        <View>
          <ButtonComponent title="Image/PDF" ImageSource={jpg} onPress={()=> navigate('toCamera')}  />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  group:{
    flexDirection: 'row'
  }
})