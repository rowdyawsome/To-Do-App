import React from "react";
import style from "./todoitem.module.css";
export const TodoItem = ({ item, todos, setTodos }) => {
  const handleDelete = (item) => {
    setTodos(todos.filter((todo) => todo !== item));
  };
  const handleClick = (name) => {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  const className = item.done ? style.completed : "";
  return (
    <div className={style.item}>
      <div className={style.itemName}>
        {" "}
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>{" "}
      </div>
      <span className={style.dateCreated}>
          {new Date(item.createdAt).toLocaleDateString()}
        </span>

      <span>

        <button
          onClick={() => handleDelete(item)}
          className={style.deleteButton}
          aria-label="Delete todo"
        >
          x
        </button>
      </span>
      <hr className={style.line} />
    </div>
  );
};
