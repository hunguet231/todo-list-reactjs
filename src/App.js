import React, { useState } from "react";
import "./App.css";
import TodoModal from "./components/Modal";
import TodoItem from "./components/TodoItem";
import { Input } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import SearchBox from "./components/SearchBox";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "Watching Movie",
      date: Date.now(),
      badge: "Medium",
    },
    { id: uuidv4(), title: "Studying", date: Date.now(), badge: "High" },
    { id: uuidv4(), title: "Eating", date: Date.now(), badge: "Low" },
  ]);
  return (
    <div className="container">
      <div className="App">
        <h1 className="text-primary text-center">Todo List</h1>
        <hr></hr>
        <div className="row">
          <div className="col-sm-12 col-lg-6 mb-5">
            <SearchBox />
          </div>
          <div className="col-sm-12 col-lg-6">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
          <TodoModal />
        </div>
      </div>
    </div>
  );
}
