import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TodoBoard from './components/TodoBoard';
// import Todoitem from './component/Todoitem';


function App() {

  const [inputValue,setInputValue] = useState('');
  const [todoList,setTodoList] = useState([]);

  const addItem = () => {
    console.log("요기", inputValue) // 새로운 인풋 벨루
    setTodoList([...todoList, inputValue])  // 기존에 있는 아이템 유지하고 새로추가
  }


  return (
    <main>
      <input value={inputValue} type="text" onChange={(event)=>setInputValue(event.target.value)}></input>
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList}/>
    </main>
  );
}

export default App;