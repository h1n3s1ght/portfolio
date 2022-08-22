import React from "react";
import styled from "styled-components";
import { FooterLogo } from "../../../components/logo/footerLogo";
import SocialLinks from "../../../components/SocialLinks";
import { theme } from "../../../theme";

const FooterCont = styled.div`
    width: 100vw;
    min-height: 18vh;
    background-color: ${theme.secondary};
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const Copyright = styled.h5`
    width: 50vw;
    color: ${theme.primary};
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    font-size: .95em;
    text-align: center;
    margin-top: 3%;
    margin-bottom: 0%;
    line-height: 1.5em;
`;

const EmailLink = styled.a`
    text-decoration: none;
    color: ${theme.primary};
`;

const LeftSide = styled.div`
    width: 20%;
    margin-left: 1%;
    margin-right: 4%;
`;

const Centered = styled.div`
    height: 18vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin: 0;
`;

const RightSide = styled.div`
    width: 22%;
    color: ${theme.primary};
    font-family: 'League Spartan', sans-serif;
    font-weight: 600;
    font-size: .95em;
    text-align: left;
    padding-top: 1%;
    margin-bottom: 0%;
    padding-left: 4%;
    line-height: 1.5em;
`;

export function Footer(props) {
    return (
        <>
        <FooterCont>
            <LeftSide>
                <FooterLogo />
            </LeftSide>
            <Centered>
                <SocialLinks/>
                <Copyright>
                    Ⓒ Copyright 2022 by Ben Hines <br/> All rights reserved.
                </Copyright>
            </Centered>
            <RightSide>
                Would you like to hire me?
                <br/><br/> 
                Contact Info: 
                <br/> 
                E: <EmailLink href="mailto: benjaminisaachines@gmail.com">
                    <i>benjaminisaachines@gmail.com</i>
                </EmailLink> 
                    <br/>
                P: (513)-257-4118 
                <br/>
                Nashville, TN, United States
            </RightSide>
        </FooterCont>
        </>
    );
}