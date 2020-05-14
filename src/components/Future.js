import React from 'react';
import { TodoList } from './TodoList';

export const Future = ({
    clickDelete,
    clickDone,
    futureTodos,
    tabValue,
    setTabValue
}) => {

    return (
        <>
            <TodoList
                targetTodos={futureTodos}
                clickDelete={clickDelete}
                clickDone={clickDone}
                title="明日以降の"
                tabValue={tabValue}
                setTabValue={setTabValue}
            />
        </>
    )
};