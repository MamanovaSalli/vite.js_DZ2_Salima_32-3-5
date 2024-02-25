import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const isActive = ({isActive}) =>(isActive ? "active-item" : "");

const Menu =() => {

    const navigate = useNavigate()
    const nextPage = () => {
        navigate('/post')
    }
    return(
        <nav>
            <ul>
                <li>
                    <NavLink className={isActive} to="posts">Article</NavLink>
                </li>
                <li>
                    <NavLink className={isActive} to="post">Several article</NavLink>
                </li>
            </ul>
            <button onClick={nextPage}>Other posts</button>
        </nav>
    )
}
export default Menu