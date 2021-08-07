import Logo from "../Assets/Logo.png";

function Navbar() {
    return (
        <header className="header">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light nav-section" id="bg-light">
                <div className="container nav-container">
                    <a className="navbar-brand mb-2" href="#home"><img src={Logo} alt="Main Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-items" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#destinations">Destinations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">Hotels</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#destinations">Flights</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#trips">Bookings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
