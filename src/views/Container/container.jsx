import { useState } from "react";
import Footer from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/navBar";
import { Tasks } from "./components/Tasks/Tasks";
import { TasksDeleted } from "./components/TasksDeleted/tasksDeleted";


function Container() {
    const [listTasks, setListTasks] = useState([]);
    return (
        <div>
            <NavBar />
            <Tasks listTasks={listTasks} setListTasks={setListTasks} />
            <TasksDeleted/>
            <Footer/>
        </div>

    );
}
export {Container}