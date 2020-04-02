import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container">

            <nav className="navbar navbar-expand-lg navbar-dark px-0">


                {/* Navbar collapse button */}
                <div className="pl-3">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
                </button></div>

                {/* Collapses all links and searchbar */}
                <div className="collapse navbar-collapse pl-3" id="navbarSupportedContent">

                    {/* List of links on Navbar*/}

                    <ul className="navbar-nav py-2 mx-auto">
                        <li className="nav-item active navlist">
                            <NavLink exact to="/" className="navbar_link" activeClassName="navbar_link--active">Home</NavLink>
                        </li>
                        <li className="nav-item navlist">
                            <NavLink to="/projects" className="navbar_link" activeClassName="navbar_link--active">My Projects</NavLink>
                        </li>
                        <li className="nav-item navlist">
                            <NavLink to="/misc" className="navbar_link" activeClassName="navbar_link--active">Miscellaneous</NavLink>
                        </li>
                        <li className="nav-item navlist">
                            <NavLink to="/about" className="navbar_link" activeClassName="navbar_link--active">About Me</NavLink>
                        </li>
                        <li className="nav-item navlist">
                            <NavLink to="/contact" className="navbar_link" activeClassName="navbar_link--active">Contact</NavLink>
                        </li>
                    </ul>


                </div>

            </nav>

        </div>
    )
}

export default Navbar
