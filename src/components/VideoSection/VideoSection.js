import React, {Component} from "react";
import homePageVideo1 from "../../assets/videos/WebEdit-transcode.mp4";
import homePageVideo2 from "../../assets/videos/WebEdit-transcode.webm";
import backgroundImage from  "../../assets/images/WebEdit-poster-00001.jpg";
import bannerImage from "../../assets/images/titulo_visualstorytellers-02.svg";
import classes from "./VideoSection.module.css";
class VideoSection extends Component {
   
    render() { 
        const bgImg = {
             backgroundImage: `url(${backgroundImage})`
          };
          
        return (
            <div className={classes.VideoSection} >
                <div className={classes.VideoBlock}>
                    <video loop autoPlay style={bgImg}>
                        <source src={homePageVideo1} type="video/mp4" />
                        <source src={homePageVideo2} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={classes.BannerBlock}>
                    <img src={bannerImage}></img>
                </div>
            </div>
        );
    }
}
 
export default VideoSection;