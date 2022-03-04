import { AddBox } from './components/AddBox/AddBox';
import Cards from './components/Cards/cards'
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Tasks(props) {
    const { listTasks, setListTasks } = props;
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
        <section className={styles.tasks}>
            <h2>Gestor de tareas</h2>
            <AddBox setListTasks={setListTasks}/>
            <Cards listTasks={listTasks} setListTasks={setListTasks}/>
        </section>
    );
}
export {Tasks}