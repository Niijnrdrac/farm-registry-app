import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Paradise Farms</h1>
            <div className="Links">
                <Link to= "/">Home</Link>
                <Link to="/Create">New employee</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;