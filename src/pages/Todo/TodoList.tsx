import React from "react";
import { Todo } from "./todo.model";
import "./TodoList.css";

interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <div
            className={`todo-list-text-block ${!todo.active ? "strike" : ""}`}
          >
            {todo.text}
          </div>
          <div className="todo-list-action-block">
            <button onClick={props.onToggleTodo.bind(null, todo.id)}>
              DONE
            </button>
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
              DELETE
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
