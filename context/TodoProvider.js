import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const addCategory = (title) => {
    setCategories([...categories, { title, todos: [] }]);
  };

  const updateCategory = (index, title) => {
    const updatedCategories = [...categories];
    updatedCategories[index].title = title;
    setCategories(updatedCategories);
  };

  const deleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const addTodo = (categoryIndex, todo) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].todos.push(todo);
    setCategories(updatedCategories);
  };

  const updateTodo = (categoryIndex, todoIndex, todo) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].todos[todoIndex] = todo;
    setCategories(updatedCategories);
  };

  const deleteTodo = (categoryIndex, todoIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].todos.splice(todoIndex, 1);
    setCategories(updatedCategories);
  };

  return (
    <TodoContext.Provider
      value={{
        categories,
        addCategory,
        updateCategory,
        deleteCategory,
        addTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
