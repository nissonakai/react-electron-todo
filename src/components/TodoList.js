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
    title,
    tabValue,
    setTabValue
}) => {
    const classes = useStyles();
    const getStringFromDate = date => {
 
        const  year_str = date.getFullYear();
        const month_str = 1 + date.getMonth();
        const day_str = date.getDate();
        const hour_str = date.getHours();
        const minute_str = date.getMinutes();
        const second_str = date.getSeconds();
        
        
        let format_str = 'YYYY-MM-DD hh:mm:ss';
        format_str = format_str.replace(/YYYY/g, year_str);
        format_str = format_str.replace(/MM/g, month_str);
        format_str = format_str.replace(/DD/g, day_str);
        format_str = format_str.replace(/hh/g, hour_str);
        format_str = format_str.replace(/mm/g, minute_str);
        format_str = format_str.replace(/ss/g, second_str);
        
        return format_str;
    };

    const todoComp = targetTodos.map(todo => {
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
        )
    });

    return (
        <>
            <LinkButtons
                tabValue={tabValue}
                setTabValue={setTabValue}
            />
            <h1 className={classes.centering}>{title}TODO</h1>
            {todoComp}
        </>
    );
};