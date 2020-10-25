import React, {Component} from "react";
import olgaLogo from "../../assets/images/Logo_Celeste.svg";


import close from "../../assets/images/Close.svg";
import classes from "./Header.module.css";


import WatchReels from "../UI/WatchReelsLogo/WatchReelsLogo";
import NavigationLink from "./NavigationLink/NavigationLink";

class Header extends Component{
    state = {
        navOpen: false,
        navItems: [
            {link:"#whatWeDo", label: "WHAT WE DO"},
            {link:"#ourWork", label: "OUR WORK"},
            {link:"#duo", label: "THE DUO"},
            {link:"#contactUs", label: "CONTACT US"}
        ]
    }

    toggleNavigation = () => {
        this.setState( prevState => {
            return { navOpen: !prevState.navOpen };
        } );
    }
    

    render(){
        
        let navLink = null, navItems = null;

        const navOpen = this.state.navOpen;
        if ( ! navOpen) {
            navLink = <div className={classes.ToggleIcon} onClick={this.toggleNavigation}>
                <div></div>
                <div></div>
                <div></div>
            </div>;
        }else{
            const items = this.state.navItems.slice(0);
            navLink = <div className={classes.ToggleIcon} onClick={this.toggleNavigation}> <img src={close} alt="Logo" style={{width: "15px"}} /></div>
            navItems = items.map( ( item,index ) =>  (
                 <NavigationLink key={index} link={item.link} content={item.label} onClick={this.toggleNavigation}/>
            ))
        }
        
        return (
            <React.Fragment>
                <div className={classes.Header}>
                    <a href="#nogo" className={classes.Logo} >
                        <img src={olgaLogo} alt="Logo" />
                    </a>
                    {navLink}
                
                </div>
                <div className={`${classes.NavPanel} ${navOpen ? classes.NavOpen : classes.NavClosed }`}> 
                    {navItems} 
                    <WatchReels link="#work"/>
                </div> 
            </React.Fragment>

        );
               
    }
}
export default Header;

