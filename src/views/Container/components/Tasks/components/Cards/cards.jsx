import { Card } from "./components/Card/Card"
import styles from "./styles.module.css"
import axios from "axios"
import { useEffect, useState } from "react"

function Cards() {
  const [listTasks, setListTasks] = useState([])

  useEffect(() => {
    axios.get(`https://fierce-castle-95757.herokuapp.com/api/todo`).then((res) => {
        if (res.status === 200) {
          setListTasks(res.data)
        }else{
          console.log('no se hizo')
        }
      })
  }, [])

  return (
    <>
      <h2>Tareas</h2>
      <div className={styles.containerCard}>
        {listTasks.map((value, index) => (
          <Card
            key={index}
            id={value._id}
            title={value.title}
            description={value.description}
            date={value.date}
            state={value.state}
            deleted={value.deleted}
          />
        ))}
      </div>
    </>
  )
}
export { Cards }
