import React, { Component } from 'react';
import Header from "../components/Header/Header";
import VideoSection from "../components/VideoSection/VideoSection";
import Section from "./Section/Section";
import Stories from "../components/Stories/Stories";
import Details from "../components/Details/Details";
import WatchReels from "../components/UI/WatchReelsLogo/WatchReelsLogo";
import More from "../components/UI/ShowMore/ShowMore";
import MoreInfo from "../components/MoreInfo/MoreInfo";
import Partners from "../components/Partners/Partners";


import Curve from "../components/UI/Curve/Curve";
import Feed from "../components/Feed/Feed";
import Wave from "../components/UI/Wave/Wave";

import photographyLogo from "../assets/images/titulo_photography-05.svg";
import animationsLogo from "../assets/images/titulo_animation-06.svg";
import contactLogo from "../assets/images/titulo_contact-12.svg";
import stalkUsLogo from "../assets/images/titulo_stalk-13.svg";
import duoLogo from "../assets/images/titulo_DUO-11.svg";

import tickIcon from "../assets/images/ICO_CHECK.svg";
import mailIcon from "../assets/images/ICO_MAIL.svg";
import telIcon from "../assets/images/ICO_Holder.svg";
import phoneIcon from "../assets/images/ICO_MAF.svg";
import instaIcon from "../assets/images/ICO_IG.svg";
import fbIcon from "../assets/images/ICO_FB.svg";
import behanceIcon from "../assets/images/ICO_BE.svg";
import linkedinIcon from "../assets/images/ICO_IN.svg";
import dribbleIcon from "../assets/images/ICO_BBB.svg";
import Parallax from '../components/UI/Parallax/Parallax';



class Layout extends Component{
    render(){
        const photographyThumbnailList = [{icon: tickIcon,label: "Food & Beverages" },{icon: tickIcon,label: "Products"},{icon: tickIcon,label: "E-commerce"}];
        const animationsThumbnailList = [{icon: tickIcon,label: "Motion Graphics" },{icon: tickIcon,label: "3D Animation"},{icon: tickIcon,label: "Videography"}];
        const contactThumbnailList = [
            {icon: mailIcon,label: "test@test.com", link: "#nogo" },
            {icon: telIcon,label: "+91 9876543210", link: "#nogo"},
            {icon: phoneIcon,label: "+91 9988776655", link: "#nogo"}];
        const stalkUsThumbnailList = [
            {icon: instaIcon,label: "Instagram", link: "#nogo" },
            {icon: fbIcon ,label: "Facebook", link: "#nogo"},
            {icon: behanceIcon,label: "Behance", link: "#nogo"},
            {icon: linkedinIcon,label: "Linkedin", link: "#nogo"},
            {icon: dribbleIcon,label: "Dribble", link: "#nogo" }];
        const aboutUsThumbnailList = [
            {icon: tickIcon,label: "DIRECT CONTACT, DEEP UNDERSTANDING", link: "#nogo" },
            {icon: tickIcon,label: "NO INTERMEDIARIES, LESS HASSLE", link: "#nogo"},
            {icon: tickIcon,label: "FAST RESPONSES, AGILE RESULTS", link: "#nogo"}];
        
            return (
            <React.Fragment>
                <Header/>

                <VideoSection>
                    <Wave position="Bottom" design="WaveUp" view="In" fontColor="#000"> <span style={{ color:"#01d7d9", fontWeight: "bolder",fontSize: "30px"}}>↓</span>  </Wave>    
                </VideoSection>

                <Section id="whatWeDo">
                    <Curve position="Top" design="CurveUp"/>
                    <Stories />
                    <Feed />
                    <Curve position="Bottom" design="CurveDown" />
                </Section>

                <Section id="ourWork">
                    <Wave position="Top" design="WaveDown" view="In" fontColor="#000"> Services </Wave>
                    <Details 
                        pageLogo={photographyLogo}
                        thumbnailLinks={false} 
                        textContent={"Share emotions through beautifully lit, creatively composed and conceptualized photographic captured images."} 
                        thumbnailList={photographyThumbnailList} 
                        styling={{backgroundColor: "#ff0037"}} >
                            <More link="#nogo" textContent="EXPLORE MORE" styling={"#fff"} />
                        </Details>
                    <Details 
                        pageLogo={animationsLogo}
                        thumbnailLinks={false} 
                        textContent={"Bend the limits of reality through clever designed, smoothly animated and cleanly edited moving images."} 
                        thumbnailList={animationsThumbnailList}
                        styling={{backgroundColor: " #01d7d9"}} >
                        <WatchReels />
                        </Details>
                </Section>
                
                <Section id="">
                    <Wave waveColor="purple" position="Top" design="WaveUp" view="Out" fontColor="#ffd500" > <a href="#nogo"> HIRE US </a> </Wave> 
                    <Partners/>
                    <Wave waveColor="purple" position="Bottom" design="WaveDown" view="Out" fontColor="#fff"> ABOUT US</Wave>
                </Section>
                <Section id="duo">
                    <Parallax>
                        <Details 
                            headerContent={<React.Fragment><span>{"WE ARE NOT A STUDIO,"}</span><br/><span>  WE ARE A</span></React.Fragment>}
                            pageLogo={duoLogo} 
                            thumbnailLinks={true}
                            thumbnailList={aboutUsThumbnailList} 
                            styling={{backgroundColor: "",padding: "0 15%"}} />
                            <Details 
                            styling={{backgroundColor: "",padding: "0 15%"}} />
                    </Parallax>
                </Section>
                <Section>
                    <Wave position="Top" design="WaveUp" view="Out" fontColor="#ff0037" > <a href="#nogo"> CONTACT US </a> </Wave> 
                    <MoreInfo/>
                </Section>
                
                <Section id="contactUs">
                    <Wave position="Top" design="WaveDown" view="In" fontColor="#000"> !Hey </Wave>
                    <Details 
                        pageLogo={contactLogo} 
                        thumbnailLinks={true}
                        thumbnailList={contactThumbnailList} 
                        styling={{backgroundColor: "#ff0037",padding: "5% 15%"}} />
                    <Details 
                        pageLogo={stalkUsLogo} 
                        thumbnailLinks={true}
                        thumbnailList={stalkUsThumbnailList} 
                        styling={{backgroundColor: "#01d7d9",padding: "5% 15%"}} />
                     <Wave position="Bottom" design="WaveUp" view="In" > Mic Drop </Wave>
                </Section>

            </React.Fragment>

        );
    }
}

export default Layout;