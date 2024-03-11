import React from 'react';

const Todoitem = () => {
    return (
        <div>
            <div className='todo-item'>
            {props.todoList}
            </div>
        </div>
    );
};

export default todoitem;