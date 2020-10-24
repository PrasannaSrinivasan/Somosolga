import React from "react";
import classes from "./WatchReelsLogo.module.css";
import watchReelsLogo from "../../../assets/images/BTN_REEL.svg";
const WatchReelsLogo = (props) => {
    return (
    <div className={classes.WatchReelsLogo}>
        <a href={props.link}>
            <img src={watchReelsLogo} alt="Watch Reels" />
        </a> 
    </div>
) ;
}
 
export default WatchReelsLogo;