import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title,
    }]);
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id != id))
  }

  return (
    <View>
      <Navbar title="Hi, mobile app" />
      <View style={ styles.container }>
        <AddTodo onSubmit={ addTodo }/>
        <FlatList
          keyExtractor={ item => item.id.toString() }
          data={ todos }
          renderItem={({ item }) => ( <Todo todo={ item } onRemove={ removeTodo } /> )}
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
    marginTop: 70
  },
});
