import { useState } from "react";
import Footer from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/navBar";
import { Tasks } from "./components/Tasks/Tasks";
import { TasksDeleted } from "./components/TasksDeleted/tasksDeleted";
import { BrowserRouter as HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TasksCompleted } from "./components/TasksCompleted/tasksCompleted";
import styles from './styles.module.css'


function Container() {
    const [listTasks, setListTasks] = useState([]);
    
    return (
        <main className={styles.main}>
            <HashRouter>
                <NavBar />
                <Routes>
                    <Route exact path="/deleted" element={<TasksDeleted listTasks={listTasks} setListTasks={setListTasks} />} />
                    <Route exact path="/completed" element={<TasksCompleted listTasks={listTasks} setListTasks={setListTasks} />} />
                    <Route exact path="/" element={<Tasks listTasks={listTasks} setListTasks={setListTasks}/>} />
                    <Route path="*" element={
                        
                        <Navigate to="/" />
                    }/>
                </Routes>
                <Footer />
            </HashRouter>
        </main>

    );
}
export {Container}