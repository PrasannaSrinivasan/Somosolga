import React, { Component } from 'react';
import Header from "../components/Header/Header";
import VideoSection from "../components/VideoSection/VideoSection";
class Layout extends Component{
    render(){
        return (
            <React.Fragment>
                <Header/>
                <VideoSection/>
            </React.Fragment>
            //Main
            //Footer
        );
    }
}

export default Layout;