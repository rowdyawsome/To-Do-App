import React from "react";
import style from "./footer.module.css";

export const Footer = ({ completedTodos, totalTodos }) => {
  return (
    <div className={style.footer}>
      <span className={style.item}>
        {" "}
        Completed Todos: {completedTodos}/{totalTodos}
      </span>
    </div>
  );
};
