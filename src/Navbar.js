import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const Navbar = ({ title, src }) => {
  return (
    <View style={ styles.navbar }>
      <Text style={ styles.text }>{ title }</Text>
      <Image source={{uri: `https://openweathermap.org/img/wn/${src}@2x.png`}} style={ styles.img }/>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 120,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: '#3949ab',
    paddingBottom: 10,
    zIndex: 10
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  img: {
    width: 30,
    height: 40
  }
});
