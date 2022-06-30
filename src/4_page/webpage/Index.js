import React from 'react'
// package imports
import {motion} from 'framer-motion'
import { useLocation, useNavigate } from "react-router-dom";
//style imports
import "../css/general.css";
import "../css/animation.css";
// image imports
import Logo from '../../images/LogoPink.svg'
// variables
const transitionAnimation = {
    initial:{opacity: 0},
    animate:{
        opacity: 1, 
        transition: {duration: 1.2}
    }, 
    exit:{
        opacity: 0, 
        transition: {duration: 0.9}
    }
}


function Index() {

    /*---------------------------------------------- path location ------------------------------------- */
let location = useLocation();
let navigate = useNavigate();

const toProduct = () => {navigate(location.state?.from?.pathname || "/product");};
const toPersona = () => {navigate(location.state?.from?.pathname || "/personal");};
const toContact = () => {navigate(location.state?.from?.pathname || "/contact");};

  return (
    <div className="main">
        <div className="main_cube">
            <div className="blank top"></div>
            
            <div className="c1">
                        <motion.div 
                            {...transitionAnimation} 
                            className="logo">
                            <img  src={Logo} alt="blossom tree" />
                        </motion.div>

                <div className="btmNav an1">

                    <div className="Cube blue height"></div>
                    <div className="Cube yellow"    onClick={toProduct}></div>
                    <div className="Cube orange"    onClick={toPersona}></div>
                    <div className="Cube red"       onClick={toContact}></div>

                </div>

            </div>
            <div className="blank bottom"></div>
        </div>
    </div>
  );
}

export default Index;