import React from "react";
import { Badge } from "reactstrap";

export default function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <p className="todo-title">{todo.title}</p>
      {/* {todo.badge === "High" && <Badge color="danger">{todo.badge}</Badge>}
      {todo.badge === "Medium" && <Badge color="success">{todo.badge}</Badge>}
      {todo.badge === "Low" && <Badge color="secondary">{todo.badge}</Badge>} */}
      <small className="todo-date">
        <i className="far fa-calendar"></i>{" "}
        {new Date(todo.date).toLocaleString()}
      </small>
    </div>
  );
}
