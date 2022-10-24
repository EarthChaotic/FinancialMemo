import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';
import { nanoid } from 'nanoid';

export const AddTodo = () => {
  const [detail, setdetail] = useState();
  const [amount, setamount] = useState(Number);
  const dispatch = useDispatch();

  function handleSumbit(){
    if (isNaN(amount)) {
      alert('Input Right Amount')
    } else {
      dispatch(
        addTodo({
          detail,
          amount,
          id : nanoid(),
        })
          );
      setamount('');
      setdetail('');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="detail" value={detail} onChangeText={setdetail} style={styles.input} />
      <TextInput placeholder="amount" value={amount} onChangeText={setamount} style={styles.input} />
      <Button title="Add" onPress={handleSumbit}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 2
  },
  input: {
    backgroundColor: 'ghostwhite',
    marginBottom: 8,
    padding: 8,
    height: 40,
  },
});
