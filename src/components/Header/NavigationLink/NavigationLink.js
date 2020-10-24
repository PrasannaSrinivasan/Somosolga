import React, { Component } from 'react';
import classes from "./NavigationLink.module.css";

class NavigationLink extends Component {
    
    render() { 
        return (
            <div className={classes.NavLink}>
                <a href={this.props.link}>{this.props.content}</a>
            </div>
        )
    }
}
 
export default NavigationLink;