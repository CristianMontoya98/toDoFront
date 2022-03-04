import { Card } from "./components/Card/Card";
import styles from './styles.module.css';

import { useEffect, useState } from "react";
function Cards(props) {
const {listTasks}=props;

    return (
        <>
        <h2>Tareas</h2>
        <div className={styles.containerCard}>
            
            {listTasks.map((value, index) => (
            <Card 
                    key={index}
                    title={value.title}
                    description={value.description}
                    date={value.date}
                    state={value.state}
                    deleted={value.deleted}
                    />))}
                
            </div>
            </>
    );
}
export {Cards}