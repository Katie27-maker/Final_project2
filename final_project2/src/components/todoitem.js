import React, { useState } from 'react';

const Todoitem = (props) => {

    const [isEditClicked, setIsEditClicked] = useState(false);      // 클릭을 했을때 변경 될 데이터
    const [updatedText,setupdatedText] = useState(props.item);    // 아이템 수정 하기
    

    const submitEditedContent = () => {
        
    }

    return (
            <div className='todo-item'>
                
                <input type='text' placeholder={!updatedText?props.item:updatedText}/>  {/* <= todolist에 있던 요소 출력 */} 
                
                
                <input onClick={()=>props.delete(props.item)} type='button' value={"삭제하기"} />
                <input onClick={()=>props.update(props.item)} type='button' value={"수정하기"} />
            </div>
    );
};

export default Todoitem;