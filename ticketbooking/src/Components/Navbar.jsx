import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Link to="/home">My ReactApp</Link> 
            </div>

            <div className="tickets">
                <Link to="/bus">BUS</Link>
                <Link to="/flight">FLIGHT</Link>
            </div>

            <div className="profile">
                <Link to="/active">Active</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </nav>
     );
}
export default Navbar;






