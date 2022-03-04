import axios from "axios";
import { useState } from "react";
import styles from "./styles.module.css";
function Card(props) {
  const { id, title, description, date, completed, deleted, setListTasks, listTasks } = props;
  const [handleEdit, setHandleEdit] = useState(false); 
  const [editTodoDescription , setEditTodoDescription] = useState("");
  const handleEditDescription = ({ target: { value } }) => setEditTodoDescription(value);
  /*Function to execute the put method with axios,
 do a request to the api and return a response that
 update the document in the database, change the state
 of deleted in true, then actualize the list of tasks */
  const onDeleteTodo = (id) => {
    axios.put(`https://fierce-castle-95757.herokuapp.com/api/todo/${id}`, {
        title: title,
        description: description,
        deleted: true
      })
      .then((res) => {
        setListTasks(
          listTasks.filter((val) => {
            return (val.id !== id && val);
          })
        );
      });
      
    console.log(id)
  }

  const onDeleteDefinitive = (id) => {
    axios.delete(`https://fierce-castle-95757.herokuapp.com/api/todo/${id}`).then((res) => {
      setListTasks(
        listTasks.filter((val) => {
          return (val.id !== id && val);
        })
      );
    })
  }

   /*Function to execute the put method with axios,
 do a request to the api and return a response that
 update the document in the database, change the state
 of deleted in false to restore the task,
 then actualize the list of tasks */
  const onRestoreTodo = (id) => {
    axios.put(`https://fierce-castle-95757.herokuapp.com/api/todo/${id}`, {
        title: title,
        description: description,
        deleted: false
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setListTasks(
          listTasks.filter((val) => {
            return (val.id !== id && val);
          })
        );
      });
  }
  
/*Function to execute the put method with axios,
 do a request to the api and return a response that
 update the document in the database, change the state
 of completed in true, then actualize the list of tasks */
  const onCheckTodo = (id, title, description) =>{
    axios
      .put(`https://fierce-castle-95757.herokuapp.com/api/todo/${id}`, {
        title: title,
        description: description,
        completed: true
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setListTasks(
          listTasks.filter((val) => {
            return (val.id !== id && val);
          })
        );
      })
  }
   const onEditDescription = (id) => {
    axios.put(`https://fierce-castle-95757.herokuapp.com/api/todo/${id}`, {
        title: title,
        description: editTodoDescription,
      })
      .then((res) => {
       
          
      });
      
    console.log(id)
  } 
  const onEdit = () => {
    setHandleEdit(!handleEdit);
    console.log(handleEdit);
  }

  const handleKey = (e) => {
    const key = e.keyCode;
    console.log(key);
    if (key === 13) {
      onEditDescription(id);
      setHandleEdit(false);

    } 
  }
  return (
    <div className={`${styles.card} ${deleted ? styles.cardDeleted : completed?styles.cardCompleted : styles.cardDefect}`} onDoubleClick={()=>onEdit()}>
      <div className={styles.cardTop}>
        
        <h3>{title}</h3>
        <div className={styles.cardButton}>
          <button className={`${completed ? styles.btnCompleted : styles.btnCheck}`} onClick={() => deleted ? onRestoreTodo(id):onCheckTodo(id, title, description)}>
            {deleted?<i className="fas fa-undo"></i>:<i className="fas fa-check"></i>}
          </button>
          <button className={styles.btnDelete} onClick={() => deleted ? onDeleteDefinitive(id) : onDeleteTodo(id)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
      {handleEdit ? <input type="text"
        onChange={handleEditDescription}
        value={editTodoDescription}
        onKeyDown={handleKey}
         />:<p>{editTodoDescription === "" ? description : editTodoDescription}</p>}
      
      <div className={styles.date}>
        <h5>{date}</h5>
      </div>
    </div>
  );
}

export { Card };
