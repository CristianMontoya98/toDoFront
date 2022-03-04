import { AddBox } from './components/AddBox/AddBox';
import { Cards } from './components/Cards/cards';
import styles from './styles.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Tasks() {

    const [listTasks, setListTasks] = useState([]);
    const [checkList, setCheckList] = useState(false);
    
    useEffect(() => {
        
        const execute = async () => { await axios.get('https://fierce-castle-95757.herokuapp.com/api/todo').then(res => {
            if (res.status === 200) {
                console.log(res.data);
                setListTasks(res.data);
            }
        })
        }
        execute();
        

    }, [checkList])
    
    return (
        <section className={styles.tasks}>
            <h2>Gestor de tareas</h2>
            <AddBox check={checkList} setCheck={setCheckList}/>
            
            <Cards listTasks={listTasks} />
        </section>
    );
}
export {Tasks}