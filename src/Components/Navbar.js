import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../images/avatar.jpg'
const Navbar = () => {
    return (
        <div className="Navbar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="" />
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/skills" exact activeClassName="active">
                            Skills
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" exact activeClassName="active">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>@ 2021 Lorem, ipsum dolor.</p>
                </footer>
            </nav>

        </div>
    );
};

export default Navbar;