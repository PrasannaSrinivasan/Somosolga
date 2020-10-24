import React from "react";
import curveImg from "../../../assets/images/Blob_Esquina_Blanca.svg";
import classes from "./Curve.module.css";
const curve = (props) => {
    
return (
    <React.Fragment>
        <img src={curveImg} className={`${classes[props.position]} ${classes[props.design]}`}></img>
    </React.Fragment>
    );
}
 
export default curve;