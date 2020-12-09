import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from 'react-native';

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Название не может быть пустым');
    }
  }

  return (
    <View style={ styles.block }>
      <TextInput
        style={ styles.input }
        // onChangeText={ text => setValue(text) }
        onChangeText={ setValue }
        value={ value }
        placeholder='Введите название дела'
      />
      <Button title="Добавить" onPress={ pressHandler }/>
    </View>
  )
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: "#3949ab",
    padding: 10,
  }
});