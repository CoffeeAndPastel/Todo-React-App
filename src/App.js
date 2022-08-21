// import './App.css';

import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";


const todos = [
  { text: 'Do something', compled: false},
  { text: 'Do something again', compled: false},
  { text: 'Watch the office', compled: false},
]

function App() {
  return (
    <>
      {<TodoCounter />}
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
