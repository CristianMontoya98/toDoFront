import Footer from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/navBar";
import { Tasks } from "./components/Tasks/tasks";


function Container() {
    return (
        <div>
            <NavBar />
            <Tasks/>
            <Footer/>
        </div>

    );
}
export {Container}