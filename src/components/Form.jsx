import React from "react";
import { useState } from "react";
import style from "./form.module.css";

export const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({ name: "", done: false });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.name.trim()) {
      const newTodo = {
        ...todo,
        createdAt: new Date(),  // Add creation date
        id: Date.now()          // Add unique ID
      };
      setTodos([...todos, newTodo]);
      setTodo({ name: "", done: false });
    }
  };

  return (
    <form action="" onSubmit={handleSubmit} className={style.todoform}>
      <div className={style.inputContainer}>
        <input
          className={style.mordernInput}
          type="text"
          value={todo.name}
          placeholder="Type in here to add items..."
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
        />
        <button className={style.mordernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};