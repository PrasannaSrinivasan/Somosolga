import React, { Component } from 'react';

import More from "../UI/ShowMore/ShowMore";
import classes from "./Partners.module.css";


class Partners extends Component {
    render() { 
        const partnersList = [];
        return ( 
            <div className={classes.Partners}>
                <More styling="#ffd500" textContent="JOIN THE FAMILY" link="#nogo" />
            </div>
         );
    }
}
 
export default Partners;