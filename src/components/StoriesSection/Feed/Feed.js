import React from 'react';
import classes from "./Feed.module.css";

import thumbnail1 from "../../../assets/images/Foto_abridora-p-1600.jpeg";
import thumbnail2 from "../../../assets/images/FLAGS_2.gif";
import thumbnail3 from "../../../assets/images/MAFISUSHI_1.gif";
import thumbnail4 from "../../../assets/images/Gelatina_anillos-p-1600.jpeg";
import thumbnail5 from "../../../assets/images/Foto-abridora-huevos--p-1600.jpeg";
import thumbnail6 from "../../../assets/images/VOLLEY_1.gif";

const feed = () => {
    return (  
    <div className={classes.Feed}>
        
        <img src={thumbnail1} alt="Thumbnail"/ >
        <img src={thumbnail2} alt="Thumbnail" / >
        <img src={thumbnail3} alt="Thumbnail" / >
        <img src={thumbnail4} alt="Thumbnail" / >
        <img src={thumbnail5} alt="Thumbnail" / >
        <img src={thumbnail6} alt="Thumbnail" / >
    </div>

    );
}
 
export default feed;