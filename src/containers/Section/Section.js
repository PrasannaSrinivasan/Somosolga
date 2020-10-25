import React, { Component } from 'react';

import classes from "./Section.module.css";

class StoriesSection extends Component {
    
    render() { 
        return ( 
            <div className={classes.StoriesSection} id={this.props.id}>
                {this.props.children}
            </div>
         );
    }
}
 
export default StoriesSection;