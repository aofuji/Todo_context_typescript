import React, { ChangeEvent, FormEvent, useState } from 'react';

import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoProvider from './contexts/TodoContext';



function App() {

  

  // const [todo, setTodo] = useState({id:1, title: '', done: false})


  return (
    <TodoProvider>
      <TodoList></TodoList>
      <AddTodo></AddTodo>
    </TodoProvider>
  );
}

export default App;
