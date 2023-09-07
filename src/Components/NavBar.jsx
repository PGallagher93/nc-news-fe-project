import {Link} from 'react-router-dom'
const NavBar = () =>{
    return (
        <ul>
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/articles">
            <li>News</li>
            </Link>
            
        </ul>
    )
}

export default NavBar