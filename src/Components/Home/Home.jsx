import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <Outlet></Outlet>
           <Footer></Footer>  
        </div>
    );
};

export default Home;