import React from 'react';
import ListToDo from './components/ListToDo';
import AddTask from './components/AddTask';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <h1>To Do List</h1>
      <AddTask />
      <ListToDo />
    </ContextProvider>
  );
}

export default App;
