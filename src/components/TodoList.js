import React from 'react';
import { LinkButtons } from './LinkButtons';
import { Button } from '@material-ui/core';

export const TodoList = ({
    targetTodos,
    clickDelete,
    clickDone,
    title
}) => {

    const todoComp = targetTodos.map(todo => {
        return (
            <div key={todo.title}>
                <h2>{todo.title}</h2>
                <p>{todo.deadline}</p>
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
            <h1>{title}TODO</h1>
            {todoComp}
        </>
    );
};