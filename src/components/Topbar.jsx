import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Topbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-default mb-4">
            <div className="container">
                <Link className="navbar-brand text-light" to="/">Dashboard Pimpinan</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-light" to="/">Beranda </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link text-light" to="/smart-city">Smart City </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Data dan Statistik
                            </a>
                            <div className="dropdown-menu bg-default" aria-labelledby="navbarDropdown">
                                <Link to='/covid' className='dropdown-item text-light'>Covid 19</Link>
                                <Link to='/vaksin' className='dropdown-item text-light'>Vaksin</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Topbar