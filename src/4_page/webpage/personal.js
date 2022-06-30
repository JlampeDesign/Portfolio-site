// css imports
import "../css/general.css";
import "../css/textWriter.css"
// image imports
import Logo from '../../images/LogoGreen.svg'
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

    /*---------------------------------------------- path location ------------------------------------- */
    let location = useLocation();
    let navigate = useNavigate();

    const toHome = () => {navigate(location.state?.from?.pathname || "/");};
    const toProduct = () => {navigate(location.state?.from?.pathname || "/product");};
    const toContact = () => {navigate(location.state?.from?.pathname || "/contact");};
     /*---------------------------------------------- personal text ------------------------------------- */

    const titel = "Hello there!";

    const line0 = "My name is Job. I'm a dutch ICT student and the founder of 上品 Designs";

    const line1 = "For 2 years I have worked with a variety of 3D modeling software and architecture companies.";
    const line2 = "Now I'm up for a new challenge and I want to combine this with my passion for technology through coding.";

    const line3 = "My passion in the ICT world lays with robotics and specialy the designing defition.";
    const line4 = "Effentualy I want to progress into the prostetic limb design defition. ";

    const endLine = "If you are interrested in working together send me an Email via the contact page.";

    const writerBox = () => {
       return( 
            <WindupChildren >
                <Pace getPace={(char) => (char === " " ? 35 : 90)}>

                <div className="titeltext">{titel}  <Pause ms={500}/></div>

                <div className="midline">
                    <p>{line0}</p>                  <Pause ms={500}/>
                    <p>{line1}  {line2}</p>         <Pause ms={500}/>
                    <p>{line3}  {line4}</p>         <Pause ms={500}/>
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
                className="imageBox">
                <img  src={Logo} alt="blossom tree" />
            </motion.div>

            <div className="textBox">
                <div>{writerBox()}</div>
            </div>

            <div className="btmNav"> 

                <div className="Cube blue"   onClick={toHome}></div>
                <div className="Cube yellow" onClick={toProduct}></div>
                <div className="Cube orange height"></div>
                <div className="Cube red"    onClick={toContact}></div>

            </div>

            </div>
        </div>
    </div>
  );
}

export default Persona;