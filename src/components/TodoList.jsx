import React from "react";
import { TodoItem } from "./TodoItem";
import style from "./todolist.module.css";

export const TodoList = ({ todos, setTodos }) => {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={style.list}>
      {sortedTodos.map((item) => (
        <TodoItem key={item} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};
