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
    const prod5 = () => {navigate(location.state?.from?.pathname || "/pro5");};
    /*---------------------------------------------- path location ------------------------------------- */
    let location = useLocation();
    let navigate = useNavigate();

    const toHome = () => {navigate(location.state?.from?.pathname || "/");};
    const toProduct = () => {navigate(location.state?.from?.pathname || "/product");};
    const toPersona = () => {navigate(location.state?.from?.pathname || "/personal");};
    const toContact = () => {navigate(location.state?.from?.pathname || "/contact");};
     /*---------------------------------------------- personal text ------------------------------------- */

    const titel = "Barber site";

    const line0 = "This school project was a group project and was based around a fictional barber who needed a website.";

    const line1 = "The entire project contains a front-end where the users can make an appointment, a personal front-end for the employees,";
    const line2 = "a front-end to see the barber shop occupation, a back-end that stores all the client data and hardware that sends the occupation data to the database.";

    const line3 = "My part in this group project was developing a occupation system that showed users how many seats where being used and how many people where in the shop";
    
    const line4 = "I did this with ESP microcontrollers, switches and motion detectors that would send the received data to the database.";
    const line5 = "This would later be displayed on the user front-end and all the raw sensor data would be displayed on the engineer page that only the team could visit";

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
                    <p>{line4} {line5}</p>
                </div>

                <div className="endlinev2">{endLine}    <Pause ms={500}/></div>

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
                className="logoGit" onClick={prod5}>
                <img  src={Logo} alt="blossom tree" />
            </motion.div>

            <div className="textBoxBig">
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