import React from "react";
import wave from "../../../assets/images/Blob_Blanco.svg";
import classes from "./Wave.module.css";
const waveUp = (props) => {
    
    return (
        <React.Fragment>
            <img src={wave} className={`${classes[props.position]} ${classes[props.design]}`}></img>
            <p className={`${classes.Label} ${classes[props.position]} ` }>{props.children}</p>
        </React.Fragment>
        );
}
 
export default waveUp;