import "../css/general.css";
import "../css/product.css"

import { useLocation, useNavigate} from "react-router-dom";
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
/*---------------------------------------------- git location ------------------------------------- */
    const prod1 = () => {navigate(location.state?.from?.pathname || "/0101");};
    const prod2 = () => {navigate(location.state?.from?.pathname || "/0102");};
    const prod3 = () => {navigate(location.state?.from?.pathname || "/0103");};
    const prod4 = () => {navigate(location.state?.from?.pathname || "/0104");};
    const prod5 = () => {navigate(location.state?.from?.pathname || "/0105");};
    const prod6 = () => {navigate(location.state?.from?.pathname || "/0106");};

/*---------------------------------------------- path location ------------------------------------- */
    let location = useLocation();
    let navigate = useNavigate();

    const toHome = () => {navigate(location.state?.from?.pathname || "/");};
    const toPersona = () => {navigate(location.state?.from?.pathname || "/personal");};
    const toContact = () => {navigate(location.state?.from?.pathname || "/contact");};
/*---------------------------------------------- render ------------------------------------- */
  return (
    <div className="main">
        <div className="main_cube">
            <div className="blank top"></div>
            <div className="c1">
                
                <div className="productBox">
                    <div className="generalBox">
                        <motion.div {...transitionAnimation} className="indvBox" onClick={prod1}>
                            <h1>Dummy portfolio</h1>
                        </motion.div>
                    </div>
                    <div className="generalBox">
                        <motion.div {...transitionAnimation} className="indvBox" onClick={prod2}>
                            <h1>Portfolio</h1>
                        </motion.div>
                    </div>
                    <div className="generalBox">
                        <motion.div {...transitionAnimation} className="indvBox" onClick={prod3}>
                            <h1>3D printer</h1>
                        </motion.div>
                    </div>
                    <div className="generalBox">
                        <motion.div {...transitionAnimation} className="indvBox" onClick={prod4}>
                            <h1>Tiny House</h1>
                        </motion.div>
                    </div>
                    <div className="generalBox">
                        <motion.div {...transitionAnimation} className="indvBox" onClick={prod5}>
                            <h1>Barber site</h1>
                        </motion.div>
                    </div>
                    <div className="generalBox">
                        <motion.div {...transitionAnimation} className="indvBox" onClick={prod6}>
                            <h1>Magnetic train</h1>
                        </motion.div>
                    </div>
                    
                    
                    
                </div>

                <div className="btmNav">

                    <div className="Cube blue"          onClick={toHome}></div>
                    <div className="Cube yellow height"></div>
                    <div className="Cube orange"        onClick={toPersona}></div>
                    <div className="Cube red"           onClick={toContact}></div>

                </div>

            </div>
            <div className="blank bottom"></div>
        </div>
    </div>
  );
}

export default Product;