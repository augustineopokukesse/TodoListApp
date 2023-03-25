import React, { useState, useContext } from 'react';
import { StyleSheet, View, TextInput, Button, Switch, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { TodoContext } from '../context/TodoContext';

const TodoItem = ({ item, index, categoryIndex, onClose }) => {
  const { updateTodo, deleteTodo } = useContext(TodoContext);

  const [isModalVisible, setModalVisible] = useState(false);
  const [todoTitle, setTodoTitle] = useState(item.title);
  const [isCompleted, setIsCompleted] = useState(item.completed);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleUpdateTodo = () => {
    const updatedTodo = { title: todoTitle, completed: isCompleted };
    updateTodo(categoryIndex, index, updatedTodo);
    onClose();
  };

  const handleDeleteTodo = () => {
    deleteTodo(categoryIndex, index);
    onClose();
  };

  return (
    <>
      <View style={styles.todoItem}>
        <Switch
          value={isCompleted}
          onValueChange={() => setIsCompleted(!isCompleted)}
        />
        <Text style={[styles.todoTitle, isCompleted && styles.completed]}>
          {item.title}
        </Text>
        <Ionicons
          name="ios-create-outline"
          size={24}
          color="black"
          onPress={toggleModal}
        />
      </View>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContainer}>
          <TextInput
            value={todoTitle}
            onChangeText={setTodoTitle}
            style={styles.modalInput}
          />
          <View style={styles.modalButtons}>
            <Button title="Update" onPress={handleUpdateTodo} />
            <Button title="Delete" onPress={handleDeleteTodo} />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  todoTitle: {
    flex: 1,
    marginLeft: 10,
  },
  completed: {
    textDecorationLine: 'line-through',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default TodoItem;
