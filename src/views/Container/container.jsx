import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/navBar";
import { Tasks } from "./components/Tasks/Tasks";
import { TasksDeleted } from "./components/TasksDeleted/tasksDeleted";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TasksCompleted } from "./components/TasksCompleted/tasksCompleted";
import axios from "axios";


function Container() {
    const [listTasks, setListTasks] = useState([]);
    useEffect(() => {
        const petition = async () =>{
            await axios.get(`https://fierce-castle-95757.herokuapp.com/api/todo`).then((res) => {
                if (res.status === 200) {
                  setListTasks(res.data)
                  console.log(res.data)
                }else{
                  console.log('no se hizo')
                }
            })
        }
        petition()
      }, [setListTasks])
    return (
        <main>
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