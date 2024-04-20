import React from "react";
import Todoitem from "./todoitem";

const TodoBoard = (props) => {
  console.log(props.todoList);
  return (
    <div>
      <h1>Todo List</h1>
      {props.todoList.map((item, index) => (
        <Todoitem
          item={item}
          index={index}
          delete={props.삭제하기}
          update={props.수정하기}
        />
      ))}
    </div>
  );
};

export default TodoBoard;
