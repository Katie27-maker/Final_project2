import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TodoBoard from './components/TodoBoard';


function App() {


// useState는 const [변수값 가져오기,변수값 설정하기] = useState(초기값); 로 입력함
  // 😀 useState는 페이지 랜더링 시 1회만! 발동! 이후 발동 하지 않는다!!
  const [inputValue,setInputValue] = useState('');    // 아직 입력한 값은 빈 값이니까 비워두기
  const [todoList,setTodoList] = useState([]);        // 아이템을 모아두려면 어떤 타입이 제일 좋으냐 배열이 좋다.

  const addItem = () => {
    console.log("inputValue값을 todoList에 추가!");
    setTodoList([...todoList, inputValue])  // 기존에 있는 아이템 유지하고 새로추가
  }

  const DeleteClick = (delete_item) => {
    console.log("필터 되기전 todoList :" + todoList)
    let result = todoList.filter(item=>{return item!==delete_item});   // 조건에 만족하는 애들만 모아서 배열만들어라!
    // var result = if(1==1) "김주희";    <- 정상 작동
    // var result = if(1==1) { "김주희"};  <- 에러 발생
    console.log("필터 된 후 todoList : " + result);

    setTodoList(result);
    console.log(delete_item)
    console.log("삭제중...")
  }

  const UpDateClick = (update_item) => {
    
  }


  return (
    <main>
      <input type="text" onChange={(텍스트input)=>{setInputValue(텍스트input.target.value); console.log("inputValue값 변경!")}}></input>
      <button onClick={addItem}>추가</button>
      <TodoBoard 삭제하기={DeleteClick} todoList={todoList}/>
    </main>
  );
}

export default App;