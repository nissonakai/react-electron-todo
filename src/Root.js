import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { TodoList } from "./components/TodoList"
import { AddDialog } from "./components/AddDialog";
import { theme } from "./assets/theme";

export const Root = () => {

  const [todos, setTodos] = useState([]);

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <TodoList
              todos={todos}
              setTodos={setTodos}
              title="今日の"
            />
          </Route>
          <Route path="/future" exact>
          <TodoList
              todos={todos}
              setTodos={setTodos}
              title="明日以降の"
            />
          </Route>
          <Route path="/done" exact>
          <TodoList
              todos={todos}
              setTodos={setTodos}
              title="完了した"
            />
          </Route>
          <Route path="/over" exact>
          <TodoList
              todos={todos}
              setTodos={setTodos}
              title="期限切れの"
            />
          </Route>
        </Switch>
      </Router>
      <AddDialog
        todos={todos}
        setTodos={setTodos}
      />
    </MuiThemeProvider>
  )
};