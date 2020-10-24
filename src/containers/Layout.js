import React, { Component } from 'react';
import Header from "../components/Header/Header";
import VideoSection from "../components/VideoSection/VideoSection";
import StoriesSection from "../components/StoriesSection/StoriesSection";
class Layout extends Component{
    render(){
        return (
            <React.Fragment>
                <Header/>
                <VideoSection/>
                <StoriesSection/>
            </React.Fragment>
            //Main
            //Footer
        );
    }
}

export default Layout;