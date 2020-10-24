import React, {Component} from "react";
import olgaLogo from "../../assets/images/Logo_Celeste.svg";
import navImg1 from "../../assets/images/BTN_REEL.svg";

import close from "../../assets/images/Close.svg";
import classes from "./Header.module.css";

import NavigationLink from "./NavigationLink/NavigationLink";

class Header extends Component{
    state = {
        navOpen: false,
        navItems: [
            {link:"#nogo", label: "WHAT WE DO"},
            {link:"#nogo", label: "OUR WORK"},
            {link:"#nogo", label: "THE DUO"},
            {link:"#nogo", label: "CONTACT US"}
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
                 <NavigationLink key={index} link={item.link} content={item.label}/>
            ))
            //navPanel = <div className={classes.NavPanel}> {{navItems}}  </div>
        }
        
        return (
            <React.Fragment>
                <div class={classes.Header}>
                    <a href="#nogo" class={classes.Logo} >
                        <img src={olgaLogo} alt="Logo" />
                    </a>
                    {navLink}
                
                </div>
                <div nameBlock="Nav Panel" className={`${classes.NavPanel} ${navOpen ? classes.NavOpen : classes.NavClosed }`}> 
                    {navItems} 
                    {/* Following Image Component shd be replaced by Text */}
                    <div className={classes.NavLink}>
                        <a href="#nogo" class={classes.Logo} style={{padding:"0px",height: "100px",width: "100px"}} >
                            <img src={navImg1} alt="Watch Reels" />
                        </a> 
                    </div> 
                </div> 
            </React.Fragment>

        );
                // <div className={classes.ToggleIcon} onClick={this.toggleNavigation}>
                //     <div></div>
                //     <div></div>
                //     <div></div>
                // </div>
                // <div className={classes.ToggleIcon} onClick={this.toggleNavigation}>
                //     <img src={close} alt="Logo" style={{width: "15px"}} />
                // </div>
        // Header Logo
        // Snadwidch Icon with Dropdown
    }
}
export default Header;

