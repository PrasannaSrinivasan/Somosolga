import React, { Component } from 'react';
import ThumbnailList from "../UI/ThumbnailList/ThumbnailList";
import classes from "./Details.module.css";
class Details extends Component {

    render() { 
        return (
            <div className={classes.Details} style={this.props.styling}>
                {
                    this.props.headerContent && <p>{this.props.headerContent}</p>
                }
                <img src={this.props.pageLogo} />
                {
                    this.props.textContent && <p> {this.props.textContent}</p>
                } 
                {
                    this.props.thumbnailList &&  <ThumbnailList addLinks={this.props.thumbnailLinks} listItems={this.props.thumbnailList} />
                }
               
                {this.props.children}
            </div>
        );
    }
}
 
export default Details;