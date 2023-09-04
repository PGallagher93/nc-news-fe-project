import {Link} from 'react-router-dom'
const NavBar = () =>{
    return (
        <ul>
            <li>Home</li>
            <Link to="/articles">
            <li>News</li>
            </Link>
            <li>Topics</li>
        </ul>
    )
}

export default NavBar