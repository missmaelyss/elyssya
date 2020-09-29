import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import './index.css';

function Home() {
    return (
            <div className="home-1">
                <div className="home-3"></div>
                <div className="home-4">
                    <div className="home-2">
                        Welcome to my website. 
                        Immerse yourself in my universe, through the various projects that I have achieved and my professional experiences.
                        Do not hesitate to contact me.
                        Enjoy
                    </div>
                    <div className="home-2">
                        <div className="home-5">
                            Let's see my projects !
                            <Button>Go</Button>
                        </div>
                        <div className="home-5">
                            Let's see my professional experiences !
                            <Button>Go</Button>
                        </div>
                    </div>
                </div>
                
            </div>
    );
}

export default Home