import React, { useState } from "react";
import TodoListItem from "./components/TodoListItem";

const initialTodos = [
  {
    text: "Walk the dog",
    complete: false,
  },
  {
    text: "Clean the dishes",
    complete: true,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (selectedTodo === todo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
