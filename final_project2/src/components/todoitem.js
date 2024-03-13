import React from 'react';

const Todoitem = (props) => {
    const todoItem = document.getElementsByClassName('todo-item')

    return (
            <div className='todo-item'>
                {props.item}  {/* <= todolist에 있던 요소 출력 */} 
                <input onClick={()=>props.delete(props.item)} type='button' value={"삭제하기"} />
                <input onClick={()=>props.update(props.item)} type='button' value={"수정하기"} />
            </div>
    );
};

export default Todoitem;