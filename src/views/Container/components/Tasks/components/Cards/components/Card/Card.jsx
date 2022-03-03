import styles from './styles.module.css';
function Card (props) {
     const {id, title, description, date, state, deleted} = props;

    return(
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <h3>{title}</h3>
                <div className={styles.cardButton}>
                    <button className={styles.btnCheck}><i className="fas fa-check"></i></button>
                    <button className={styles.btnDelete}><i className="fas fa-times"></i></button>
                </div>
            </div>
            <p>{description}</p>
            <h4>{date}</h4>
        </div>
    );
}

export {Card}