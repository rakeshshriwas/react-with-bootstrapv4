import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from "../footer/Footer";

class About extends Component {
    render(){
        return(
            <div>
                <Header/>
                <div className="web-wrapper text-center">
                    <h3>About Us</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default About;