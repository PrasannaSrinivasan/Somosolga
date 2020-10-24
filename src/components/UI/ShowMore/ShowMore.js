import React from 'react';
import classes from "./ShowMore.module.css";
const  showMore = (props) => {
    return (  
        <div className={classes.ShowMore}>
            <a href={props.link}>SHOW MORE</a>
        </div>
    );
}
export default showMore;