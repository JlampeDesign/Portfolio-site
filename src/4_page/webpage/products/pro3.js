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
    const prod3 = () => {navigate(location.state?.from?.pathname || "/pro3");};
    /*---------------------------------------------- path location ------------------------------------- */
    let location = useLocation();
    let navigate = useNavigate();

    const toHome = () => {navigate(location.state?.from?.pathname || "/");};
    const toProduct = () => {navigate(location.state?.from?.pathname || "/product");};
    const toPersona = () => {navigate(location.state?.from?.pathname || "/personal");};
    const toContact = () => {navigate(location.state?.from?.pathname || "/contact");};
     /*---------------------------------------------- personal text ------------------------------------- */

    const titel = "3D printer";

    const line0 = "This 3D printer project is not a School orientated project but a hobby project.";

    const line1 = "My first 3D printer was getting a bit old and I desided that I wanted to build one by myself instead of buying it off the shelve.";
    const line2 = "I wanted to build a compact, quiet and fast 3D printer. Basicly everything my old 3D printer wasn't.";

    const line3 = "I designed, outsourced and 3D printed all the parts needed for the 3D printer.";
    const line4 = "The printer runs on the newest marlin software and is controlled by a Raspberry Pi 4.";

    const endLine = "If you want to see more, click on the Bonsai tree in the top right";

    const writerBox = () => {
       return( 
            <WindupChildren >
                <Pace getPace={(char) => (char === " " ? 35 : 70)}>

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
                className="logoGit" onClick={prod3}>
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