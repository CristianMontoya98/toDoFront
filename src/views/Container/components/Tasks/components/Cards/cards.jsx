import React from "react"
import { Card } from "./components/Card/Card"
import styles from "./styles.module.css"

function Cards(props) {
  const {listTasks, setListTasks} = props

  return (
    <>
      <h2>Tareas</h2>
      <div className={styles.containerCard}>
        {listTasks.map((value, index) => (value.deleted ?
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
