import '../css/NavBar.css'
import { Link } from "react-router-dom";
export function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to='/' >Movie app</Link>
        </div>
        <div className="navbar-links">
            <Link to='/' className="nav-link"> Home</Link>
            <Link to='/Favourite' className="nav-link"> Favourite</Link>
        </div>
    </nav>

}