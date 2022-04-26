import React from "react";
import TodoListItem from "./TodoListItem";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
