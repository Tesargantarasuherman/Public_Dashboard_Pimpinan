import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Topbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-default mb-4">
            <a className="navbar-brand text-light" href="#">Dashboard Pimpinan</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-light" href="#">Beranda <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <Link to='/covid' className='nav-link text-light'>Covid 19</Link>
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
        </nav>

    )
}

export default Topbar