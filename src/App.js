import React, { useState, useEffect } from "react";
import "./App.css";


import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import PageSize from "./components/PageSize";
const App = () => {
  const initialState = JSON.parse(localStorage.getItem("list")) || [];
  const [input, setInput] = useState("");
  const [list, setList] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            list={list}
            setList={setList}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList list={list} setList={setList} setEditTodo={setEditTodo} />
        </div>

        <div>
          <PageSize />
        </div>
      </div>
    </div>
  );
};

export default App;
