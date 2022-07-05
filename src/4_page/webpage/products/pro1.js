// css imports
import "../../css/general.css";
import "../../css/textWriter.css"
// image imports
import Logo from '../../../images/LogoGreen.svg'
// package imports
import {motion} from 'framer-motion'
import {WindupChildren, Pace, Pause } from "windups";
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

function Persona() {
    /*---------------------------------------------- git location ------------------------------------- */
    const prod1 = () => {navigate(location.state?.from?.pathname || "/pro1");};
    /*---------------------------------------------- path location ------------------------------------- */
    let location = useLocation();
    let navigate = useNavigate();

    const toHome = () => {navigate(location.state?.from?.pathname || "/");};
    const toProduct = () => {navigate(location.state?.from?.pathname || "/product");};
    const toPersona = () => {navigate(location.state?.from?.pathname || "/personal");};
    const toContact = () => {navigate(location.state?.from?.pathname || "/contact");};
     /*---------------------------------------------- personal text ------------------------------------- */

    const titel = "Dummy portfolio";

    const line0 = "The dummy portfolio is one of the first real software based projects I finished.";

    const line1 = "This project stays on my portfolio site so visitors can compare other products with this one";
    const line2 = "and see how much I have grown since my first project.";

    const line3 = "The site is a scrollable one-pager that shows the basic elements that a portfolio site has to consist of.";

    const line4 = "The following languages are used for the making of this product: ";
    const line5 = "- HTML5		- CSS 		- JavaScript";

    const endLine = "If you want to see more, click on the Bonsai tree in the top right.";

    const writerBox = () => {
       return( 
            <WindupChildren >
                <Pace getPace={(char) => (char === " " ? 35 : 70)}>

                <div className="titeltext">{titel}  <Pause ms={500}/></div>

                <div className="midline">
                    <p>{line0}</p>                  <Pause ms={500}/>
                    <p>{line1}  {line2}</p>         <Pause ms={500}/>
                    <p>{line3}</p>                  <Pause ms={500}/>
                    <p>{line4}</p>                  <Pause ms={500}/>
                    <p>{line5}</p>
                </div>

                <div className="endline">{endLine}    <Pause ms={500}/></div>

                </Pace>
            </WindupChildren>
        )
    }
    
  return (
    <div className="main">
        <div className="main_cube">
            
            <div className="blank"></div>
            
            <div className="c1">

            <motion.div 
                {...transitionAnimation} 
                className="logoGit" onClick={prod1}>
                <img  src={Logo} alt="blossom tree" />
            </motion.div>

            <div className="textBox">
                <div>{writerBox()}</div>
            </div>

            <div className="btmNav"> 

                <div className="Cube blue"   onClick={toHome}></div>
                <div className="Cube yellow" onClick={toProduct}></div>
                <div className="Cube orange" onClick={toProduct}></div>
                <div className="Cube red"    onClick={toContact}></div>

            </div>

            </div>
        </div>
    </div>
  );
}

export default Persona;