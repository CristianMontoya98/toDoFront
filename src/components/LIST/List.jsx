import React from "react";
import Todo from "../TODO/Todo";

const List = ({ list,removeTodoListProp }) => {
  const renderList = list.map((item) => (
    <Todo
     title={item.title} 
     completed={item.completed} 
     removeTodoItemProp={removeTodoListProp}
     key={item.title} 
     todo={item}
    />
  ));
  return <div>{renderList}</div>;
};

export default List;
