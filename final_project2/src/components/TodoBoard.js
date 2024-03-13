import React from 'react';
import Todoitem from './Todoitem';

const TodoBoard = (props) => {
        console.log(props)
    return (
        <div>
            <h1>Todo List</h1>
            {props.todoList.map((item)=><Todoitem item={item} delete={props.삭제하기}/>) }
        </div>
    );
};

export default TodoBoard;