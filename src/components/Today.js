import React from 'react';
import { TodoList } from './TodoList';

export const Today = ({
    clickDelete,
    clickDone,
    todaysTodos,
    tabValue,
    setTabValue
}) => {
    return (
        <>
        <TodoList
            targetTodos={todaysTodos}
            clickDelete={clickDelete}
            clickDone={clickDone}
            title="今日の"
            tabValue={tabValue}
            setTabValue={setTabValue}
        />
        </>
    )
};