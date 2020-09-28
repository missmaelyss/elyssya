import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import MyNavbar from './navbar';
import Footer from './footer';
import './index.css';

function Home() {
    return (
        <div className="background_home">
            <MyNavbar />
            <div>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
            </div>
            <Footer>
                <img
                src="/by.png"
                width="200"
                className="d-inline-block align-top"
                alt=""
                />
            </Footer> 
        </div>
    );
}

export default Home