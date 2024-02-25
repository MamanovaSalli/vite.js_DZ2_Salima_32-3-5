import {Outlet} from "react-router-dom";
import Menu from "./Menu.jsx";

const Layout =() => {
    return(
        <>
        <Menu/>
            <div className="cont">
                <Outlet/>
            </div>
            <footer><span>2024</span></footer>
        </>
    )
}
export default Layout