import React from 'react';
import { TodoList } from './TodoList';

export const OveredTodo = ({
    clickDelete,
    clickDone,
    overedTodos
}) => {
    return (
        <>
        <TodoList
            targetTodos={overedTodos}
            clickDelete={clickDelete}
            clickDone={clickDone}
            title="期限切れの"
        />
        </>
    );
};