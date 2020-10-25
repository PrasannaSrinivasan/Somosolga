import React from "react";
import wave from "../../../assets/images/Blob_Blanco.svg";
import purpleWave from "../../../assets/images/Blob_Morado.svg";
import classes from "./Wave.module.css";

const waveUp = (props) => {
    
    let waveImg = wave;
    if(props.waveColor === "purple"){
        waveImg = purpleWave;
    }

    return (
        <React.Fragment>
            <img src={waveImg} className={`${classes[props.position]} ${classes[props.design]} ${classes[props.view]}`} alt=" "></img>
            <p style={{ color: props.fontColor}} className={`${classes.Label} ${classes[props.position]}  ${classes[props.view]} ` } > { props.children } </p>
        </React.Fragment>
    );
}
 
export default waveUp;