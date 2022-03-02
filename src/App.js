import React, { useState } from 'react';
import Form from "./components/FORM/Form";
import List from './components/LIST/List';
import Section from './components/SECTION/Section';




const appTitle = "Gestor de Tareas"

const list = [
  {id: 1,title: "tarea1 ", completed: false},
  {id: 2,title:"tarea 2"},
  {id: 3,title:"tarea 3"}
]

const  App=()=>{

 const [todoList, setTodoList] = useState(list)

 const addTodo = item =>{
   setTodoList((oldList)=>[...oldList,item])
 }

 const removeTodo = (id) => {

    const changesTodos = todoList.splice (todo => todo.id !== id);

    setTodoList(changesTodos);
 };

  return (
    <div className="App">
      <Section>
          <h1>{appTitle}</h1>
      </Section>

      <Section>
        <Form addTodo={addTodo}/>
      </Section>

      <Section>
        <List removeTodoListProp={removeTodo} list={todoList} />
      </Section>

      
    </div>

  );
}

export default App;

