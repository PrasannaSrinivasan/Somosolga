import React from 'react';
import classes from "./ShowMore.module.css";
const  showMore = (props) => {
    return (  
        <div className={classes.ShowMore} >
            <a style={{color: props.styling, borderBottomColor: props.styling}} href={props.link}>{props.textContent}</a>
        </div>
    );
}
export default showMore;