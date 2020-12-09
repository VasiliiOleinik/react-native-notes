import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text} from 'native-base';

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
          small
          danger
          style={styles.btn}
          onPress={onRemove.bind(null, todo.id)}
        >
          <Text>x</Text>
        </Button>
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
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
  btn: {
    position: 'relative',
    right: 5
  }
});