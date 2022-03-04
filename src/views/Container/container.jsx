import { useState } from "react";
import Footer from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/navBar";
import { Tasks } from "./components/Tasks/Tasks";
import { TasksDeleted } from "./components/TasksDeleted/tasksDeleted";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TasksCompleted } from "./components/TasksCompleted/tasksCompleted";
import styles from './styles.module.css'


function Container() {
    const [listTasks, setListTasks] = useState([]);
    
    return (
        <main className={styles.main}>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Tasks listTasks={listTasks} setListTasks={setListTasks}/>} />
                    <Route path="/deleted" element={<TasksDeleted listTasks={listTasks} setListTasks={setListTasks} />} />
                    <Route path="/completed" element={<TasksCompleted listTasks={listTasks} setListTasks={setListTasks} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </main>

    );
}
export {Container}