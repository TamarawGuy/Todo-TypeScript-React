import React from "react";

interface Props {
  todo: Todo;
}

const TodoListItem: React.FC<Props> = ({ todo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        <input type="checkbox" checked={todo.complete} /> {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
