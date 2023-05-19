import React, { useState } from "react";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import { Todo } from "./todo.model";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      { id: Math.random().toString(), text: text, active: true },
      ...prevTodos,
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const toggleTodoHandler = (todoId: string) => {
    let mapped = todos.map((todo) => {
      return todo.id == todoId
        ? { ...todo, active: !todo.active }
        : { ...todo };
    });
    setTodos(mapped);
  };

  return (
    <div className="">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList
        items={todos}
        onDeleteTodo={todoDeleteHandler}
        onToggleTodo={toggleTodoHandler}
      />
    </div>
  );
};

export default TodoApp;
