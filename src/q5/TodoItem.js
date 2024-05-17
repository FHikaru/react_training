import React from "react";
import { useState } from "react";

const TodoItem = ({task}) => {
    return(
        <>
            <dt>{task.title}</dt>
            <dd>
                <div>期日：{task.deadline}</div>
                <div>詳細：{task.description}</div>
            </dd>  
        </>
    );
}

export default TodoItem;