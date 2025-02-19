
import React, { useState, useEffect } from "react";
import { TodoList } from "./TodoList";
import { Form } from "./Form";
import { Footer } from "./Footer";

export const Todo = () => {
  // Get todos from localStorage on initial load
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length; // Fixed the total todos count

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
};