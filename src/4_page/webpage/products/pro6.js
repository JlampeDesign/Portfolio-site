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
    const prod6 = () => {navigate(location.state?.from?.pathname || "/pro6");};
    /*---------------------------------------------- path location ------------------------------------- */
    let location = useLocation();
    let navigate = useNavigate();

    const toHome = () => {navigate(location.state?.from?.pathname || "/");};
    const toProduct = () => {navigate(location.state?.from?.pathname || "/product");};
    const toPersona = () => {navigate(location.state?.from?.pathname || "/personal");};
    const toContact = () => {navigate(location.state?.from?.pathname || "/contact");};
     /*---------------------------------------------- personal text ------------------------------------- */

    const titel = "Magnetic train";

    const line0 = "This school project was a group project that was aiming to solve the problematic streaming setup for 'week-starts' .";

    const line1 = "This project was a custom project sponsored by the school and led by me.";
    const line2 = "The idea of the project was to make a magnet powered train that would place a robotic arm on a certain place that would lower the camera to the desired height.";

    const line3 = "My part in this project was leading the team, designing the rails and robotic arm and building hardware for the train.";
    const line4 = "This was mostly designing and sourcing the parts for the communication and command system";

    const endLine = "If you want to see more, click on the Bonsai tree in the top right.";

    const writerBox = () => {
       return( 
            <WindupChildren >
                <Pace getPace={(char) => (char === " " ? 35 : 70)}>

                <div className="titeltext">{titel}  <Pause ms={500}/></div>

                <div className="midline">
                    <p>{line0}</p>                  <Pause ms={500}/>
                    <p>{line1}</p>                  <Pause ms={500}/>
                    <p>{line2}</p>                  <Pause ms={500}/>
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
                className="logoGit" onClick={prod6}>
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