import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

function AppUI() {
  return (
    <>
      <TodoCounter/>

      <TodoSearch />

      <TodoContext.Consumer>
        {({
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo
        }) => (
          <TodoList>
          {loading && <p>We are looking for data 🔎...</p>}
          {error && <p>We have a trouble 🤪</p>}
          {(searchedTodos.length === 0) && <p>Write your first todo ✍</p>}
  
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
