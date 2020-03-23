import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Today } from './components/Today';
import { Future } from './components/Future';
import { DoneTodo } from './components/DoneTodo';
import { OveredTodo } from "./components/OveredTodo";
import { AddDialog } from "./components/AddDialog";

export const Root = () => {

  const [todos, setTodos] = useState([
    { title: "test1", deadline: "2020-03-04 15:30", done: false },
    { title: "test2", deadline: "2020-03-27 17:30", done: false },
    { title: "test3", deadline: "2020-03-30 13:30", done: false }
  ]);
  const [open, setOpen] = useState();
  const [newTodo, setNewTodo] = useState({
    title: "", deadline: "", done: false
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = e => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const clickAdd = () => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setOpen(false);
    setNewTodo({ title: "", deadline: "", done: false });
  };

  const clickDelete = ele => {
    const newTodos = todos.filter(todo => {
      return todo.title !== ele.title;
    });
    setTodos(newTodos);
  };

  const clickDone = ele => {
    const newTodos = todos.slice();
    const index = newTodos.findIndex((v) => v.title === ele.title);
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  const dateIsWhen = date => {
    const targetDate = new Date(date);
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth() + 1;
    const day = targetDate.getDate();
    const targetStr = year + month + day;
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();
    const todayDateStr = todayYear + todayMonth + todayDay;
    if (targetStr === todayDateStr) {
      return "today";
    } else if (year === todayYear) {
      if (month === todayMonth) {
        if (day > todayDay) {
          return "future";
        } else {
          return false;
        };
      } else {
        if(month > todayMonth) {
          return "future";
        } else {
          return false;
        };
      }
    } else {
      if(year > todayYear) {
        return "future";
      } else {
        return false;
      };
    };
  };

  const todaysTodos = todos.filter(todo => {
    return dateIsWhen(todo.deadline) === "today" && todo.done === false;
  });

  const futureTodos = todos.filter(todo => {
    return dateIsWhen(todo.deadline) === "future" && todo.done === false;
  });

  const doneTodos = todos.filter(todo => {
    return todo.done;
  });

  const overedTodos = todos.filter(todo => {
    return todo.done === false && !dateIsWhen(todo.deadline);
  })

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Today
              todaysTodos={todaysTodos}
              clickDelete={clickDelete}
              clickDone={clickDone}
            />
          </Route>
          <Route path="/future" exact>
            <Future
              futureTodos={futureTodos}
              clickDelete={clickDelete}
              clickDone={clickDone}
            />
          </Route>
          <Route path="/done" exact>
            <DoneTodo 
              doneTodos={doneTodos}
              clickDelete={clickDelete}
              clickDone={clickDone}
            />
          </Route>
          <Route path="/over" exact>
            <OveredTodo 
              overedTodos={overedTodos}
              clickDelete={clickDelete}
              clickDone={clickDone}
            />
          </Route>
        </Switch>
      </Router>
      <AddDialog
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleChange={handleChange}
        clickAdd={clickAdd}
        newTodo={newTodo}
      />
    </>
  )
};