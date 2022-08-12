import React, { useState, useRef, useEffect } from "react";
import ListItem from "../ListItem/ListItem";
import "./List.css";

export default function List() {
  const [todos, setTodos] = useState([
    "This is a list",
    "This is a list item",
    "This is something outside",
  ]);

  const [value, setValue] = useState([]);

  const addingTodo = () => {
    setTodos([value, ...todos]);
    console.log(`added new todo to list` + value);
  };

  return (
    <div className="container rounded-lg mx-auto mt-[5%] p-5">
      <h1 className="text-center text-4xl">Kevin Baxter Todo List</h1>
      <div className="mx-auto flex mt-3 items-center justify-center mb-3">
        <input
          className="in-box w-4/6 mr-3 p-2 "
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />

        <button className="px-4 py-[10px] rounded-sm" onClick={addingTodo}>
          enter
        </button>
      </div>

      <ul>
        {todos.map((todo, i) => {
          return <ListItem key={i} todo={todo} />;
        })}
      </ul>
    </div>
  );
}
