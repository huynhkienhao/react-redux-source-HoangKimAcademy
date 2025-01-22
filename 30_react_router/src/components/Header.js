import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
            <div className="container px-5">
                <Link className="navbar-brand fw-bold" to='/'>Start Bootstrap</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    Menu
                    <i className="bi-list" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link me-lg-3" to='/news'>
                                TIN TỨC
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-lg-3" to='/details'>
                                TIN CHI TIẾT
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-lg-3" to='/contact'>
                                LIÊN HỆ
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header