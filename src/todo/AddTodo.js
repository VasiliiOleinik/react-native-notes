import React, { useState } from 'react';
import {
  StyleSheet,
  Alert,
} from 'react-native';
import { Form, Item, Input, Label, Button, Text} from 'native-base';

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
    <Form style={ styles.block }>
        <Input
          style={ styles.input }
          // onChangeText={ text => setValue(text) }
          onChangeText={ setValue }
          value={ value }
          placeholder='Введите название дела'
        />
        <Button onPress={ pressHandler } success><Text>Добавить</Text></Button>
    </Form>
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
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    height: 45,
  }
});