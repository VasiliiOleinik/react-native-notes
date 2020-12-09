import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Navbar } from '../components/Navbar';

export const Weather = ({ navigation }) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [img, setImg] = useState('');
  function getWeather() {
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=London&units=metric`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': 'bfcdf8e8cfmsh8992eb209e6217cp122b27jsn6c8dd884a8af',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
        setValue(data.main.temp);
        setImg(data.weather[0].icon);
        console.log(img);
      })
      .catch((err) => {
        console.log(`err: ${err}`);
      });
  }

  useEffect(() => {
    getWeather();
  }, []);


  return (
    <View>
      <Navbar title={ `${name}, ${value}c` } />
      <Button 
        title="Go to Details"
        onPress={() => navigation.navigate('Music')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});