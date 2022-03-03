import { Card } from "./components/Card/Card";
import styles from './styles.module.css';
import axios from 'axios';
import { useEffect, useState } from "react";
function Cards() {

    const [listTasks, setListTasks]  = useState([]);
    useEffect(() => {
        axios.get('https://fierce-castle-95757.herokuapp.com/api/todo').then(res => {
           
            if (res.status === 200) {
                console.log(res.data);
                setListTasks(res.data);
            }
            
       })
        

    },[])

    let jPrueba = [{
        "id": 6,
        "title": "Regar flores",
        "description": "Regar las flores en la mañana",
        "date": "03-03-2022",
        "state": "completed",
        "deleted": true
    },
    {
        "id": 3,
        "title": "Regar flores",
        "description": "Regar las flores en la mañana",
        "date": "03-03-2022",
        "state": "completed",
        "deleted": false
    },
    {
        "id": 2,
        "title": "Regar flores",
        "description": "Regar las flores en la mañana",
        "date": "03-03-2022",
        "state": "incompleted",
        "deleted": true
    },
    {
        "id": 1,
        "title": "Regar floresss",
        "description": "Regar las flores en la mañana",
        "date": "03-03-2022",
        "state": "incompleted",
        "deleted": false
    }]
    return (
        <>
        <h2>Tareas</h2>
        <div className={styles.containerCard}>
            
            {listTasks.map((value, index) => (
            <Card 
            key={index}
            title = {value.title} 
            description = {value.description} 
            date = {value.date} 
            state = {value.state}
            deleted = {value.deleted}/>))}
            </div>
            </>
    );
}
export {Cards}