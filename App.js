import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TodoProvider } from './context/TodoProvider';
import WelcomeScreen from './screens/WelcomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryDetailsScreen from './screens/CategoryDetailsScreen';
import TodoItemScreen from './screens/TodoItemScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <TodoProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen
            name="CategoryDetails"
            component={CategoryDetailsScreen}
          />
          <Stack.Screen name="TodoItem" component={TodoItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoProvider>
  );
};

export default App;

