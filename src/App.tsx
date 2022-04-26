import React from "react";
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
  return (
    <div>
      <TodoListItem todo={initialTodos[0]} />
      <TodoListItem todo={initialTodos[1]} />
    </div>
  );
};

export default App;
