import React, { useState } from 'react'
import styles from "./styles.module.css"
function AddBox() {

  const [addTodoTitle, setaddTodoTitle] = useState("");
  const [addTodoDescription, setaddTodoDescription] = useState("");
  const handletitle =({target:{value}}) => setaddTodoTitle(value);
  const handleDescription = ({target:{value}}) => setaddTodoDescription (value)

  console.log(addTodoTitle);
  console.log(addTodoDescription);

  return (
    <div className={styles.container}>
      <form action="" className={styles.cont__Info}>
        <input 
          type="text"
          placeholder="Titulo"
          onChange={handletitle}
          value={addTodoTitle}
          className ={styles.input__title}
         />   
        <textarea
          
          placeholder="Descripcion"
          value={addTodoDescription}
          onChange={handleDescription}
          className ={styles.input__description}
          
          />
        
        <button type="submit" className={styles.buttonAdd}>Añadir  &#10010;</button>
      </form>
    </div>
  );
}
export { AddBox };
