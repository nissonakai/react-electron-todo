import React from 'react';
import { useTodos } from "../logic/useTodos";
import { LinkButtons } from './LinkButtons';
import { Todo } from './Todo';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    centering: {
        textAlign: 'center'
    }
});

export const TodoList = ({
    title,
    todos,
    setTodos
}) => {
    const [targetTodosFnc, clickDelete, clickDone, tabValue, setTabValue, getStringFromDate] = useTodos(todos, setTodos);

    const classes = useStyles();

    const targetTodos = targetTodosFnc(title);

    return (
        <>
            <LinkButtons
                tabValue={tabValue}
                setTabValue={setTabValue}
            />
            <h1 className={classes.centering}>{title}TODO</h1>
            {targetTodos.map(todo => {
                return <Todo
                    todo={todo}
                    getStringFromDate={getStringFromDate}
                    clickDelete={clickDelete}
                    clickDone={clickDone}
                    key={todo.title}
                />
            })}
        </>
    );
};