import React from "react"
import { Card } from "./components/Card/Card"
import styles from "./styles.module.css"
import axios from "axios"
import { useEffect } from "react"

function Cards(props) {
  const {listTasks, setListTasks} = props

  useEffect(() => {
    const petition = async () =>{
        await axios.get(`https://fierce-castle-95757.herokuapp.com/api/todo`).then((res) => {
            if (res.status === 200) {
              setListTasks(res.data)
              console.log(res.data)
            }else{
              console.log('no se hizo')
            }
        })
    }
    petition()
  }, [setListTasks])

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
