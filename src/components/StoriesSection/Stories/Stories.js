import React from 'react';
import storiesBanner from "../../../assets/images/titulo_awesomestories-03.svg";
import ShowMore from "../../UI/ShowMore/ShowMore";
import classes from "./Stories.module.css";
const stories = () => {
    return (
        <div className={classes.Stories}>
            <img src={storiesBanner} alt="Awesome Stories"/>
            <p> Awesome and detailed visuals for those who dare to share their own unique, powerful and original brand stories.</p>
            <ShowMore link="#showMore"/>
        </div>
    );
}
 
export default stories;