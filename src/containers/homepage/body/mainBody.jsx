import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { StickyNavbar } from "../../../components/navbar/sticky";
import { About } from "./about";
import { Contact } from "./contact";
import { Portfolio } from "./portfolio";
import { Qualifications } from "./quals";
import { Resume } from "./resume";

const BodyCont = styled(Element)`

`;

export function MainBody(prop){
    return (
        <BodyCont>
            <StickyNavbar/>
            <About/>
            <Portfolio/>
            <Qualifications/>
            <Resume/>
            <Contact/>
        </BodyCont>
    );
}