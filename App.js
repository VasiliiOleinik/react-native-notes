import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [img, setImg] = useState('');

  const addTodo = (title) => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title,
    }]);
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id != id))
  }

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
      <Navbar title={ `${name}, ${value}c` } src={ `${img}` }/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => (<Todo todo={item} onRemove={removeTodo} />)}
        />
        {/* <View>
          { todos.map(todo => <Todo key={ todo.id } todo={ todo } />) }
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    overflow: 'scroll',
    marginTop: 10
  },
});
