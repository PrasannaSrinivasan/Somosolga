import React from "react";
import wave from "../../../assets/images/Blob_Blanco.svg";
import classes from "./Wave.module.css";
const waveUp = (props) => {
    
    return <img src={wave} className={`${classes[props.position]} ${classes[props.design]}`}></img>;
}
 
export default waveUp;