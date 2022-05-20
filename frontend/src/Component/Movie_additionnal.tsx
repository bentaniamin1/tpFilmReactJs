import {NavLink} from "react-router-dom";

export default function MovieBar_additionnal() {
    return (
        <>
            <li className="nav-item">
                <NavLink className="nav-link text-white bi me-2" to="/">All Movie</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-white bi me-2" to="/mes-posts">My favorite movie</NavLink>
            </li>
            {/* <li className="nav-item">
                <NavLink className="nav-link text-white bi me-2" to="/autres-posts">Les autres posts</NavLink>
            </li> */}
        </>
    )
}