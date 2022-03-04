import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";

function AddBox(props) {
  const { setListTasks } = props
  const [addTodoTitle, setaddTodoTitle] = useState("");
  const [addTodoDescription, setaddTodoDescription] = useState("");
  const handletitle = ({ target: { value } }) => setaddTodoTitle(value);
  const handleDescription = ({ target: { value } }) => setaddTodoDescription(value);

  /* Function to execute the post method with axios,
  do a request to the api and return a response that
  add a new document in the database */
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`https://fierce-castle-95757.herokuapp.com/new`, {
        title: addTodoTitle,
        description: addTodoDescription,
      })
      .then((res) => {
        setListTasks((prev) => [...prev, res.data])
      })
    setaddTodoDescription('')
    setaddTodoTitle('')
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.cont__Info}>
        <input
          type="text"
          placeholder="Titulo"
          onChange={handletitle}
          value={addTodoTitle}
          className={styles.input__title}
        />
        <textarea
          placeholder="Descripcion"
          value={addTodoDescription}
          onChange={handleDescription}
          className={styles.input__description}
        />
        {addTodoDescription === '' || addTodoTitle === '' ? null :
          <button type="submit" className={styles.buttonAdd}>
            Añadir &#10010;
          </button>
        }
      </form>
    </div>
  );
}
export { AddBox };
