import React from 'react';
import { TodoList } from './TodoList';

export const Future = ({
    clickDelete,
    futureTodos
}) => {

    return (
        <>
            <TodoList
                targetTodos={futureTodos}
                clickDelete={clickDelete}
                title="Future"
            />
        </>
    )
};