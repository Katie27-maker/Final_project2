import React, { useState } from 'react';

const Todoitem = (props) => {
    const [updatedText,setupdatedText] = useState(props.item);    // 아이템 수정 하기
    console.log("변경될 값" + updatedText);
    const submitEditedContent = () => {
        
    }

    return (
            <div className='todo-item'>
                {console.log("요기당" + props.item)}
                <input onChange={(변경될텍스트인풋)=>{
                    setupdatedText(변경될텍스트인풋.target.value);}} type='text' placeholder={!updatedText?props.item:updatedText}/>  {/* <= todolist에 있던 요소 출력 */} 
                
                
                <input onClick={()=>props.delete(props.item)} type='button' value={"삭제하기"} />
                <input onClick={""} type='button' value={"수정하기"} />
            </div>
    );
};

export default Todoitem;