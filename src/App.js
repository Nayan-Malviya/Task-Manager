import Navbar from "./Components/Navbar";
import { Todos } from "./Components/Todos";
import React, { useState } from "react";
import Footer from "./Components/Footer";
import AddTodo from "./Components/AddTodo";
import About from "./Components/About";
import { useEffect } from "react";
import "./style/App.scss"
import "./style/About.scss"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("TodosList") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("TodosList"));
  }
  const onDelete = (todo) => {
    setTodosList(
      TodosList.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("TodosList", JSON.stringify(TodosList));
  };
  const addTodo = (title, desc) => {
    let sno;
    if (TodosList.length === 0) {
      sno = 0;
    } else {
      sno = TodosList[TodosList.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodosList([...TodosList, myTodo]);
  };
  const [TodosList, setTodosList] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("TodosList", JSON.stringify(TodosList));
  }, [TodosList]);

  return (
    <>
      <Router>
        <Navbar title="Task Manager " />
        <Routes> 
          <Route
           path="/"
            element={
              <>
                <AddTodo AddTodo={addTodo} />
                <Todos  todos={TodosList} onDelete={onDelete} />
              </>
            }
          />
          <Route path="/about" exact element={<About/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
