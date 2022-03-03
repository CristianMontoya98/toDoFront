import React from "react";
import { Card } from "./components/CARD/Card";




const Tasks = ({ list,removeTodoListProp }) => {
  const renderList = list.map((item) => (
    <Card
     title={item.title} 
     completed={item.completed} 
     deleted={item.deleted}
     date={item.date}
     state={item.state}
     description={item.description}
     removeTodoItemProp={removeTodoListProp}
     key={item.id} 
     
    />
  ));
  return <div>{renderList}</div>;
};

export default Tasks;
