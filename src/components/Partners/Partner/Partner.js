import React from 'react';
import classes from "./Partner.module.css";
const Partner = (props) => {
    const partners = props.partnersList.map( (item,index) => {
        return <img src={item} key={index} alt="Partner Logo" />
    });
    return ( 
        <div className={classes.Partner}>
            {partners}
        </div>
     );
}
 
export default Partner;