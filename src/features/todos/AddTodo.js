import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';

export const AddTodo = () => {
  const [detail, setdetail] = useState();
  const dispatch = useDispatch();

  function handleSumbit(){
    dispatch(addTodo(detail));
    setdetail('');
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="detail" value={detail} onChangeText={setdetail} style={styles.input} />
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
