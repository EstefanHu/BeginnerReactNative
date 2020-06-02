import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Button,
  Keyboard
} from 'react-native';

export const BlogForm = ({ type, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        onPress={() => null}
      >
        <Text stlye={styles.label}>Enter Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
        <Text stlye={styles.label}>Enter Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
        <Button title={`${type} Blog Post`} onPress={() => onSubmit(title, content)} />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    width: 150,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10
  }
})