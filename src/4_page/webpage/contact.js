//image imports
import Logo from '../../images/LogoGreen.svg'
// css imports
import "../css/general.css";
import "../css/contact.css";
import "../css/textWriter.css"
// package imports
import React, {Component} from "react"
import {motion} from 'framer-motion'
import { useLocation, useNavigate } from "react-router-dom";
// variables
const transitionAnimation = {
    initial:{opacity: 0},
    animate:{
        opacity: 1, 
        transition: {duration: 1.5}
    }, 
    exit:{
        opacity: 0, 
        transition: {duration: 0.9}
    }
}

function Contact() {

    /*---------------------------------------------- path location ------------------------------------- */
    let location = useLocation();
    let navigate = useNavigate();

    const toHome = () => {navigate(location.state?.from?.pathname || "/");};
    const toProduct = () => {navigate(location.state?.from?.pathname || "/product");};
    const toPersona = () => {navigate(location.state?.from?.pathname || "/personal");};


    return (
        <div className="main">
            <div className="main_cube">
                <div className="blank"></div>
                <div className="c1">

                    <div className="topBox"></div>

                <form action="https://formsubmit.co/jlampe.designs@gmail.com" method="POST">
            
                <input type="hidden" name="_subject" value="EYYYY! you've got another email"/>
                <input type="hidden" name="_next" value="http://127.0.0.1:5500/html/thanks.html"/>

                    <div className="form-group">
                      <input type="text" name="firstName" placeholder="First name" required/>
                    </div>
                
                    <div className="form-group">
                      <input type="text" name="lastName" placeholder="Last name" required/>
                    </div>
                
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Email address" required/>
                    </div>
                
                    <div className="form-border">
                      <textarea type="text" name="message" placeholder="Write your message here" required cols="30" rows="10"></textarea>
                    </div>

                    <motion.div 
                        {...transitionAnimation}
                        className="button" type="submit">
                            <img  src={Logo} alt="blossom tree"/>
                        click here submit
                    </motion.div>

                </form>

                    <div className="btmNav">

                        <div className="Cube blue"   onClick={toHome}></div>
                        <div className="Cube yellow" onClick={toProduct}></div>
                        <div className="Cube orange" onClick={toPersona}></div>
                        <div className="Cube red height"></div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;