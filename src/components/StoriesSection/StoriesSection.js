import React, { Component } from 'react';

import Stories from "./Stories/Stories";
import Feed from "./Feed/Feed";
import Curve from "../UI/Curve/Curve";
import classes from "./StoriesSection.module.css";

class StoriesSection extends Component {
    
    render() { 
        return ( 
            <div className={classes.StoriesSection}>
                <Curve position="Top" design="CurveUp"/>
                <Stories />
                <Feed />
                <Curve position="Bottom" design="CurveDown"/>
            </div>
         );
    }
}
 
export default StoriesSection;