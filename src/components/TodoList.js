import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { LinkButtons } from './LinkButtons';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    centering: {
        textAlign: 'center'
    }
});

export const TodoList = ({
    targetTodos,
    clickDelete,
    clickDone,
    title
}) => {
    const classes = useStyles();
    const todoComp = targetTodos.map(todo => {
        return (
            <div key={todo.title} className={classes.centering}>
                <h2>{todo.title}</h2>
                <p>{todo.deadline.replace("T", " ")}</p>
                <Button
                    variant="text"
                    color="secondary"
                    onClick={() => clickDelete(todo)}
                    >削除</Button>
                <Button
                    variant="text"
                    onClick={() => clickDone(todo)}
                >{todo.done ? "リストに戻す" : "完了"}</Button>
            </div>
        )
    });

    return (
        <>
            <LinkButtons />
            <h1 className={classes.centering}>{title}TODO</h1>
            {todoComp}
        </>
    );
};