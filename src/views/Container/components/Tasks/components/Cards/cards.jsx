import { Card } from "./components/Card/Card";
import styles from './styles.module.css';

function Cards() {

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
        <div className={styles.containerCard}>
            {jPrueba.map((value, index) => (
            <Card 
            title = {value.title} 
            description = {value.description} 
            date = {value.date} 
            state = {value.state}
            deleted = {value.deleted}/>))}
        </div>
    );
}
export {Cards}