import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand" id='navTitle'>Healthy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navBarNav">
                        <ul className="navbar-nav" id="ulNav">
                            <li className="nav-item">
                            <Link to='/category/Organic' className="nav-link active">Organic</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/category/Vegan' className="nav-link active">Vegan</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/category/Gluten-free' className="nav-link active">Gluten Free</Link>
                            </li>
                        </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
