import React, { Component } from 'react';

import More from "../UI/ShowMore/ShowMore";
import classes from "./Partners.module.css";

import belcorp from "../../assets/images/LOGO_Belcorp.svg";
import rimac from "../../assets/images/LOGO_RIMAC.svg";
import amex from "../../assets/images/LOGO_AMEX.svg";
import scotiaBank from "../../assets/images/LOGO_Scotiabank.svg";
import quinoa from "../../assets/images/LOGO_QUINOA.svg";
import jockey from "../../assets/images/LOGO_JOCKEY.svg";
import breca from "../../assets/images/LOGO_BRECA.svg";
import sustainable from "../../assets/images/LOGO_SUSTAINABLE.svg";
import pucp from "../../assets/images/LOGO_PUCP.svg";
import profuturo from "../../assets/images/LOGO_PROFUTURO.svg";
import grifo from "../../assets/images/LOGO_GRIFO.svg";
import insitum from "../../assets/images/LOGO_INSITUM.svg";
import innova from "../../assets/images/LOGO_INNOVA.svg";
import compadre from "../../assets/images/LOGO_COMPADRE.svg";
import arauco from "../../assets/images/LOGO_ARAUCO.svg";
import bachiche from "../../assets/images/LOGO_BACHICHE.svg";
import brein from "../../assets/images/LOGO_BREIN.svg";
import bolena from "../../assets/images/LOGO_BOLENA.svg";
import arellano from "../../assets/images/LOGO_ARELLANO.svg";
import aporta from "../../assets/images/LOGO_APORTA.svg";
import esmeralda from "../../assets/images/LOGO_ESMERALDA.svg";
import regatas from "../../assets/images/LOGO_REGATAS.svg";
import crediscotia from "../../assets/images/LOGO_CREDISCOTIA.svg";
import avendano from "../../assets/images/LOGO_AVENDANO.svg";
import Partner from './Partner/Partner';



class Partners extends Component {
    render() { 
        const partnersList = [belcorp,rimac,amex,scotiaBank,quinoa,jockey,breca,sustainable,pucp,
            profuturo,grifo,insitum,innova,compadre,arauco,bachiche,brein,bolena,arellano,aporta,esmeralda,regatas,crediscotia,avendano];
        return ( 
            <div className={classes.Partners}>
                <p className={classes.Label}> FRIENDS WHO TRUST US</p>
                <Partner partnersList={partnersList} />
                <More styling="#ffd500" textContent="JOIN THE FAMILY" link="#nogo" />
            </div>
         );
    }
}
 
export default Partners;