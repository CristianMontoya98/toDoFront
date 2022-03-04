import React, { useState } from "react";
import { Card } from "./components/Card/Card";
import styles from "./styles.module.css";

function Cards(props) {
  const { listTasks, setListTasks } = props;
  const [search, setSearch] = useState("");

  let listEmpty = listTasks.filter((val) => {
    return val.completed === false && val.deleted === false;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    let query = e.target.value.toLowerCase();
    setSearch(query);
  };

  let result = [];
  if (search !== "") {
    result = listTasks.filter(
      (todo) =>
        todo.title.toLowerCase().includes(search) ||
        todo.description.toLowerCase().includes(search)
    );
  } else {
    result = listTasks;
  }

  return (
    <>
      <h2>Tareas</h2>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleOnChange}
          type="search"
          placeholder="Busca una tarea"
          className={styles.search}
        />
      </form>

      <div className={styles.containerCard}>
        {listEmpty.length === 0 ? <h3>No hay tareas aún!</h3> : undefined}
        {result.map((value, index) =>
          value.deleted || value.completed ? undefined : (
            <Card
              key={index}
              id={value.id}
              title={value.title}
              description={value.description}
              date={value.date}
              completed={value.completed}
              deleted={value.deleted}
              listTasks={listTasks}
              setListTasks={setListTasks}
            />
          )
        )}
      </div>
    </>
  );
}
export default React.memo(Cards);
