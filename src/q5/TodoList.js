import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({taskList}) => {
    return(
        <>
        <dl>
            {taskList.map((item, idx) =>(
                <TodoItem task={item} />
            ))}
        </dl>
        </>
    );
}

export default TodoList;