import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { TodoContext } from '../context/TodoContext';

function TodoListScreen({ navigation }) {
  const { todoCategories, addTodoCategory, deleteTodoCategory } = useContext(TodoContext);
  const [categoryName, setCategoryName] = useState('');

  function handleAddCategory() {
    if (categoryName.trim() === '') {
      return;
    }
    const newCategory = {
      id: Math.random().toString(),
      name: categoryName
    };
    addTodoCategory(newCategory);
    setCategoryName('');
  }

  function handleDeleteCategory(categoryId) {
    deleteTodoCategory(categoryId);
  }

  function handlePressCategory(category) {
    navigation.navigate('TodoItem', { categoryId: category.id });
  }

  function renderCategory({ item }) {
    return (
      <TouchableOpacity onPress={() => handlePressCategory(item)}>
        <Text>{item.name}</Text>
        <TouchableOpacity onPress={() => handleDeleteCategory(item.id)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        value={categoryName}
        onChangeText={setCategoryName}
        placeholder="Enter category name"
        style={{ borderWidth: 1, padding: 10, width: '80%', marginBottom: 20 }}
      />
      <TouchableOpacity onPress={handleAddCategory}>
        <Text>Add Category</Text>
      </TouchableOpacity>
      <FlatList
        data={todoCategories}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
        style={{ width: '80%', marginTop: 20 }}
      />
    </View>
  );
}

export default TodoListScreen;
