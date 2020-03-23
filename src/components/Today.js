import React from 'react';
import { TodoList } from './TodoList';

export const Today = ({
    clickDelete,
    clickDone,
    todaysTodos
}) => {
    return (
        <>
        <TodoList
            targetTodos={todaysTodos}
            clickDelete={clickDelete}
            clickDone={clickDone}
            title="今日の"
        />
        </>
    )
};