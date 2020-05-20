import React from 'react';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    centering: {
        textAlign: 'center'
    }
});

export const Todo = ({todo, getStringFromDate, clickDelete, clickDone}) => {
    const classes = useStyles();
    return (
        <div key={todo.title} className={classes.centering}>
            <h2>{todo.title}</h2>
            <p>{getStringFromDate(todo.deadline)}</p>
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
    );
};