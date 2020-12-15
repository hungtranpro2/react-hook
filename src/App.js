import React, { useState } from "react";
import "./App.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend" },
    { id: 2, title: "We love Easy Frontend" },
    { id: 3, title: "They love Easy Frontend" },
  ]);

  const handleTodoClick = async (todo) => {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const handleTodoFormSubmit = (formValues) => {
    console.log("value", formValues);

    // add new todo to current todo list

    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  return (
    <div className="app">
      <h1>React Hooks - TodoList</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
};

export default App;
