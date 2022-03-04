import React from "react"
import { Card } from "./components/Card/Card"
import styles from "./styles.module.css"

function Cards(props) {
  const {listTasks, setListTasks} = props
  let listEmpty = [];
  listEmpty = listTasks.filter((val) => { return (val.completed === false && val.deleted === false) });

  return (
    <>
      <h2>Tareas</h2>
      <div className={styles.containerCard}>
        {listEmpty.length === 0 ? <h3>No hay tareas aún!</h3>:undefined}
        {listTasks.map((value, index) => (value.deleted || value.completed ?
          undefined
          :
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
        ))}
      </div>
    </>
  )
}
export default React.memo(Cards)
