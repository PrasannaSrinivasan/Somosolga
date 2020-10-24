import React from 'react';
import classes from "./MoreInfo.module.css";
import More from "../UI/ShowMore/ShowMore";
const moreInfo = () => {
    return ( 
        <div className={classes.MoreInfo}>
            <p >A GLANCE AT SOME OF OUR WORK</p>
            <More link="#nogo" textContent="EXPLORE MORE" styling={"#ff0037"} />
        </div>
     );
}
 
export default moreInfo;