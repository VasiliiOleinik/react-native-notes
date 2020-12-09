import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { AddTodo } from './AddTodo';
import { Navbar } from '../components/Navbar';
import { TodoItem } from './TodoItem';


export default function Todo() {
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
      <Navbar title={ 'TODO App' }/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => (<TodoItem todo={item} onRemove={removeTodo} />)}
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
