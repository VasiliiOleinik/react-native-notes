import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';

export const TodoItem = ({ todo, onRemove }) => {
  const pressHandler = () => {
    onRemove(todo.id)
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onLongPress={ pressHandler }
    >
      <View style={styles.todo}>
        <Text style={styles.text}>{todo.title}</Text>

        <Button
          title="x"
          color={'red'}
          onPress={onRemove.bind(null, todo.id)}
        />
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  text: {
    paddingRight: 30,
    width: '90%',
  },
});