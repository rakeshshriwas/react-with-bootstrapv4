import React, {Component} from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './home.css';

class Home extends Component{
    render(){
        return(
            <div className = "">
            <Header/>
                <div className="container text-center web-wrapper">
                    <h2>Home</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
            <Footer/>
            </div>
        );
    }
}

export default Home;