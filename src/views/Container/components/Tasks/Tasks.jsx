import { AddBox } from './components/AddBox/AddBox';
import { Cards } from './components/Cards/cards';
import styles from './styles.module.css';
function Tasks() {
    return (
        <section className={styles.tasks}>
            <h2>Gestor de tareas</h2>
            <AddBox/>
            <Cards/>
        </section>
    );
}
export {Tasks}