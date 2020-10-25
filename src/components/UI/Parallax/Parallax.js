import React, { Component } from 'react';
require("./Parallax.css");
class Parallax extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div className="parallax">
            {this.props.children}
        </div>);
    }
}
 
export default Parallax;