import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { TodoContext } from '../context/TodoContext';

function TodoItemScreen({ route }) {
  const { categoryId } = route.params;
  const { todoItems, addTodoItem, deleteTodoItem, toggleTodoItemCompleted } = useContext(TodoContext);
  const [itemName, setItemName] = useState('');

  function handleAddItem() {
    if (itemName.trim() === '') {
      return;
    }
    const newItem = {
      id: Math.random().toString(),
      name: itemName,
      categoryId,
      completed: false
    };
    addTodoItem(newItem);
    setItemName('');
  }

  function handleDeleteItem(itemId) {
    deleteTodoItem(itemId);
  }

  function handleToggleItemCompleted(itemId) {
    toggleTodoItemCompleted(itemId);
  }

  function renderTodoItem({ item }) {
    if (item.categoryId !== categoryId) {
      return null;
    }
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity onPress={() => handleToggleItemCompleted(item.id)}>
          <View
            style={{
              borderWidth: 1,
              width: 20,
              height: 20,
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {item.completed && <View style={{ backgroundColor: 'black', width: 10, height: 10 }} />}
          </View>
        </TouchableOpacity>
        <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>{item.name}</Text>
        <TouchableOpacity onPress={() => handleDeleteItem(item.id)} style={{ marginLeft: 'auto' }}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        value={itemName}
        onChangeText={setItemName}
        placeholder="Enter item name"
        style={{ borderWidth: 1, padding: 10, width: '80%', marginBottom: 20 }}
      />
      <TouchableOpacity onPress={handleAddItem}>
        <Text>Add Item</Text>
      </TouchableOpacity>
      <FlatList
        data={todoItems}
        renderItem={renderTodoItem}
        keyExtractor={item => item.id}
        style={{ width: '80%', marginTop: 20 }}
      />
    </View>
  );
}

export default TodoItemScreen;