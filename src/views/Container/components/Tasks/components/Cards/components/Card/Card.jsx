import axios from "axios";
import styles from "./styles.module.css";
function Card(props) {
  const { id, title, description, date, state, deleted } = props;

  const onDeleteTodo = (id) => {
    axios.delete(`https://fierce-castle-95757.herokuapp.com/api/todo/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
    });
    console.log(id)
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <h3>{title}</h3>
        <div className={styles.cardButton}>
          <button className={styles.btnCheck}>
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
