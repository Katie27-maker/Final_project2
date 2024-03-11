import React from 'react';
// import Todoitem from './Todoitem';

const TodoBoard = (props) => {

    return (
        <div>
            <h1>Todo List</h1>
            {props.todoList.map((item)=><todoitem item={item}/>)}
        </div>
    );
};

export default TodoBoard;