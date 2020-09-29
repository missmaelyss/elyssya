import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import './index.css';

function Contact() {
    return (
        <>
        <div>
            <div>
                <h1>Find me there</h1>
                <a href="https://www.linkedin.com/authwall?trk=ripf&trkInfo=AQGT_Uyo-K6JuAAAAXTaSh_IYedtRJzZuweNEk95icykXmWsmwW8atSxUCigIMGsPLVICmtzbNBZUUuumabGiEAyYh_DO5pZQpkSTPrMzWilnxF66ArBK2Lkjgcd4Z47veB5gvY=&originalReferer=https://www.google.com/&sessionRedirect=https%3A%2F%2Ffr.linkedin.com%2Fin%2Fmaelyss-arnaud-018848159">
                    <img
                        src="https://www.mareauxoiseaux.fr/wp-content/uploads/2019/04/logo-linkedin.png"
                        width="200"
                        className="d-inline-block align-top"
                        alt=""
                    />
                </a>
               <a href="https://github.com/missmaelyss">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"
                        width="200"
                        className="d-inline-block align-top"
                        alt=""
                    />
               </a>
            </div>
        </div>
        </>
    );
}

export default Contact