import React, {Component} from 'react';
import classes from "./Feed.module.css";

import FeedItem from "./FeedItem/FeedItem";

import thumbnail1 from "../../assets/images/Foto_abridora-p-1600.jpeg";
import thumbnail2 from "../../assets/images/FLAGS_2.gif";
import thumbnail3 from "../../assets/images/MAFISUSHI_1.gif";
import thumbnail4 from "../../assets/images/Gelatina_anillos-p-1600.jpeg";
import thumbnail5 from "../../assets/images/Foto-abridora-huevos--p-1600.jpeg";
import thumbnail6 from "../../assets/images/VOLLEY_1.gif";



class Feed extends Component{
    state = {
        thumbnail: [thumbnail1,thumbnail2,thumbnail3,thumbnail4,thumbnail5,thumbnail6]
    }

    render(){
        let feedItems  = this.state.thumbnail.map((item,index) => {
            return <FeedItem key={index} thumbnailImg={item} />
        }); 
        return (  
            <div className={classes.Feed}>
                {feedItems}
            </div>
        )
    }
}

export default Feed;