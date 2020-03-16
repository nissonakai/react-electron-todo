import React from 'react';
import { TodoList } from './TodoList';

export const DoneTodo = ({
    clickDelete,
    clickDone,
    doneTodos
}) => {
    return (
        <>
            <TodoList
                targetTodos={doneTodos}
                clickDelete={clickDelete}
                clickDone={clickDone}
                title="完了した"
            />
        </>
    )
};