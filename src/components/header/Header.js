import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../components/header/header.css';

class Header extends Component {
    render(){
        return(
            <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
                <div className="navbar-nav-scroll">
                    <ul className="navbar-nav bd-navbar-nav flex-row">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">React First App</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                    <li className="nav-item">
                        <Link className="nav-link p-2" to="">
                            Rakesh Shriwas
                        </Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;