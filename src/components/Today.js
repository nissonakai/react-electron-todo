import React from 'react';
import { TodoList } from './TodoList';

export const Today = ({
    clickDelete,
    todaysTodos
}) => {

    return (
        <>
        <TodoList
            targetTodos={todaysTodos}
            clickDelete={clickDelete}
            title="Today's"
        />
        </>
    )
};