import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../components/footer/footer.css';

class Footer extends Component {
    render(){
        return(
            <div>
                <footer className="footer">
                    <div className="container">
                        <ul className="m-0 bd-footer-links list-unstyled list-inline">
                            <li><Link to="https://github.com/rakeshshriwas">GitHub</Link></li>
                        </ul>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;