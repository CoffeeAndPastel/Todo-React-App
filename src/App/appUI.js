import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter/>

      <TodoSearch />
      <TodoList>
        {loading && <p>We are looking for data ð...</p>}
        {error && <p>We have a trouble ðĪŠ</p>}
        {!loading && (searchedTodos.length === 0) && <p>Write your first todo â</p>}
        {false}
        {true}

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

      {!!openModal &&(
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
