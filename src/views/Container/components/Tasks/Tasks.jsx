import { AddBox } from './components/AddBox/AddBox';
import Cards from './components/Cards/cards'
import styles from './styles.module.css';
import { useState } from 'react';

function Tasks() {
    const [listTasks, setListTasks] = useState([])

    return (
        <section className={styles.tasks}>
            <h2>Gestor de tareas</h2>
            <AddBox setListTasks={setListTasks}/>
            <Cards listTasks={listTasks} setListTasks={setListTasks}/>
        </section>
    );
}
export {Tasks}