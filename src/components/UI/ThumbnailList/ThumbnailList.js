import React from 'react';
import classes from './ThumbnailList.module.css';
const thumbnailList = (props) => {
    let items = null;

    if(! props.addLinks){
        items = props.listItems.map( (item,index) => {
            return (<div  key={index} className={classes.ThumbnailList}> 
                        <img src={item.icon} alt={item.label}/> 
                        <span>{item.label}</span> 
                    </div>
            )
        });
    }else{
        items = props.listItems.map( (item,index) => {
            return (<div  key={index} className={classes.ThumbnailList}> 
                        <a href ={item.link} className={classes.ThumbnailList}>
                            <img src={item.icon} alt={item.label} /> 
                            <span>{item.label}</span> 
                        </a>
                    </div>
            )
        });
    }


    return (  
        <div className={classes.Thumbnail}>
            {items}
        </div>
    );
}
 
export default thumbnailList;