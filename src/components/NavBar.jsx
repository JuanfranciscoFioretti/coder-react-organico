import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" id='navTitle' href="#">Healthy</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navBarNav">
                        <ul className="navbar-nav" id="ulNav">
                            <li className="nav-item">
                            <a className="nav-link active" href="#">Organic</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" href="#">Vegan</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active">Gluten Free</a>
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
