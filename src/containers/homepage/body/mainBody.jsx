import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { StickyNavbar, StickyNavbarTab } from "../../../components/navbar/sticky";
import { About, AboutTab } from "./about";
import { Portfolio, PortfolioMob, PortfolioTab } from "./portfolio";

const BodyCont = styled(Element)``;


//==============================================
//====  Use to render Desktop Formatting  =======
//==============================================

export function MainBody(prop){
    return (
        <BodyCont>
            <StickyNavbar/>
            <About/>
            <Portfolio/>
        </BodyCont>
    );
}


//==============================================
//====  Use to render Tablet Formatting  =======
//==============================================

export function MainBodyTab(prop){
    return (
        <BodyCont>
            <StickyNavbarTab/>
            <AboutTab/>
            <PortfolioTab/>
        </BodyCont>
    );
}


//==============================================
//====  Use to render Mobile Formatting  =======
//==============================================

export function MainBodyMob(prop){
    return (
        <BodyCont>
            <AboutTab/>
            <PortfolioMob/>
        </BodyCont>
    );
}