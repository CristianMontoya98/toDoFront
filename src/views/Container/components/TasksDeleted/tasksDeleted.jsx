
import { Card } from '../Tasks/components/Cards/components/Card/Card';
import styles from './styles.module.css';

function TasksDeleted(props) {
    const { listTasks, setListTasks } = props;
    
    return (
        <div className={styles.deleted}>
            <h2>Tareas eliminadas</h2>
            <div className={styles.containerCard}>
        {listTasks.map((value, index) => (value.deleted ?
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
          :undefined
          
        ))}
      </div>
        </div>
    );
}
export { TasksDeleted };