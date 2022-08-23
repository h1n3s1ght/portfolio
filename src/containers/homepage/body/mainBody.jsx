import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { StickyNavbar } from "../../../components/navbar/sticky";
import { About } from "./about";
import { Portfolio } from "./portfolio";
import { Qualifications } from "./quals";

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
            <Qualifications/>
        </BodyCont>
    );
}


//==============================================
//====  Use to render Tablet Formatting  =======
//==============================================

export function MainBodyTab(prop){
    return (
        <BodyCont>
            <StickyNavbar/>
            <About/>
            <Portfolio/>
            <Qualifications/>
        </BodyCont>
    );
}


//==============================================
//====  Use to render Mobile Formatting  =======
//==============================================

export function MainBodyMob(prop){
    return (
        <BodyCont>
            <StickyNavbar/>
            <About/>
            <Portfolio/>
            <Qualifications/>
        </BodyCont>
    );
}