import React, { useState } from 'react';

export const TodoContext = React.createContext();

export function TodoProvider({ children }) {
  const [todoCategories, setTodoCategories] = useState([]);
  const [todoItems, setTodoItems] = useState([]);

  function addTodoCategory(category) {
    setTodoCategories([...todoCategories, category]);
  }

  function deleteTodoCategory(categoryId) {
    const updatedCategories = todoCategories.filter(category => category.id !== categoryId);
    setTodoCategories(updatedCategories);
  }

  function addTodoItem(item) {
    setTodoItems([...todoItems, item]);
  }

  function deleteTodoItem(itemId) {
    const updatedItems = todoItems.filter(item => item.id !== itemId);
    setTodoItems(updatedItems);
  }

  function toggleTodoItemCompleted(itemId) {
    const updatedItems = todoItems.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    });
    setTodoItems(updatedItems);
  }

  const values = {
    todoCategories,
    todoItems,
    addTodoCategory,
    deleteTodoCategory,
    addTodoItem,
    deleteTodoItem,
    toggleTodoItemCompleted
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
