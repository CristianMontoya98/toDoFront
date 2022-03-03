import { AddBox } from './components/AddBox/AddBox';
import styles from './styles.module.css';
function Tasks() {
    return (
        <section className={styles.tasks}>
            <h2>Gestor de tareas</h2>
            <AddBox/>
        </section>
    );
}
export {Tasks}