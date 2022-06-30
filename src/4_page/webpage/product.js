import "../css/general.css";
import "../css/product.css"

import { useLocation, useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'

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

function Product() {

    /*---------------------------------------------- path location ------------------------------------- */
let location = useLocation();
let navigate = useNavigate();

const toHome = () => {navigate(location.state?.from?.pathname || "/");};
const toPersona = () => {navigate(location.state?.from?.pathname || "/personal");};
const toContact = () => {navigate(location.state?.from?.pathname || "/contact");};

  return (
    <div className="main">
        <div className="main_cube">
            <div className="blank top"></div>
            <div className="c1">
                
                <div className="productBox">
                    <div className="generalBox">
                        <motion.div {...transitionAnimation} className="indvBox">
                            <h1>Dummy portfolio</h1>
                        </motion.div>
                    </div>
                    <div className="generalBox">
                        <motion.div {...transitionAnimation} className="indvBox">
                            <h1>Portfolio</h1>
                        </motion.div>
                    </div>
                    <div className="generalBox">
                        <motion.div {...transitionAnimation} className="indvBox">
                            <h1>Pavilion</h1>
                        </motion.div>
                    </div>
                    <div className="generalBox">
                        <motion.div {...transitionAnimation} className="indvBox">
                            <h1>Tiny House</h1>
                        </motion.div>
                    </div>
                    <div className="generalBox">
                        <motion.div {...transitionAnimation} className="indvBox">
                            <h1>Barber site</h1>
                        </motion.div>
                    </div>
                    <div className="generalBox">
                        <motion.div {...transitionAnimation} className="indvBox">
                            <h1>Magnetic train</h1>
                        </motion.div>
                    </div>
                    
                    
                    
                </div>

                <div className="btmNav">

                    <div className="Cube blue" onClick={toHome}></div>
                    <div className="Cube yellow height"></div>
                    <div className="Cube orange"      onClick={toPersona}></div>
                    <div className="Cube red"         onClick={toContact}></div>

                </div>

            </div>
            <div className="blank bottom"></div>
        </div>
    </div>
  );
}

export default Product;