import axios from "axios";
import styles from "./styles.module.css";
function Card(props) {
  const { id, title, description, date, completed, deleted, setListTasks, listTasks } = props;

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
        console.log(res);
        console.log(res.data);
        setListTasks(
          listTasks.filter((val) => {
            return (val.id !== id && val);
          })
        );
      });
      
    console.log(id)
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
      })
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <h3>{title}</h3>
        <div className={styles.cardButton}>
          <button className={styles.btnCheck} onClick={() => onCheckTodo(id, title, description)}>
            <i className="fas fa-check"></i>
          </button>
          <button className={styles.btnDelete} onClick={() => onDeleteTodo(id)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
      <p>{description}</p>
      <div className={styles.date}>
        <h4>{date}</h4>
      </div>
    </div>
  );
}

export { Card };
