import React from "react";
import styled from "styled-components";
import { FooterLogo, FooterLogoTab } from "../../../components/logo/footerLogo";
import { SocialLinks, SocialLinksTab } from "../../../components/SocialLinks";
import { theme } from "../../../theme";


//==============================================
//====  Use to render Desktop Formatting  ======
//==============================================

const FooterCont = styled.div`
    width: 100vw;
    min-height: 24vh;
    background-color: ${theme.secondary};
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding:1%;
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
                <u>Contact Info: </u>
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


//==============================================
//====  Use to render Tablet Formatting  =======
//==============================================

const FooterContTab = styled.div`
    width: 100vw;
    min-height: 32vh;
    background-color: ${theme.secondary};
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 1% 1% 5% 1%;
`;

const CopyrightTab = styled.h5`
    width: 100%;
    color: ${theme.primary};
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    font-size: .95em;
    text-align: center;
    margin-top: 3%;
    margin-bottom: 0%;
    line-height: 1.5em;
`;

const LeftSideTab = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 49%;
    margin-left: 1%;
    margin-right: 0%;
`;

const RightSideTab = styled.div`
    width: 48%;
    color: ${theme.primary};
    font-family: 'League Spartan', sans-serif;
    font-weight: 600;
    font-size: .95em;
    text-align: right;
    // padding-top: 1%;
    margin-right: 2%;
    margin-bottom: 0%;
    padding-left: 4%;
    line-height: 1.5em;
`;


export function FooterTab(props) {
    return (
        <>
        <FooterContTab>
            <LeftSideTab>
                <FooterLogoTab />
                <SocialLinksTab/>
                <CopyrightTab>
                    Ⓒ Copyright 2022 by Ben Hines <br/> All rights reserved.
                </CopyrightTab>
            </LeftSideTab>
            <RightSideTab>
                Would you like to hire me?
                <br/><br/> 
                <u>Contact Info: </u>
                <br/> 
                E: <EmailLink href="mailto: benjaminisaachines@gmail.com">
                    <i>benjaminisaachines@gmail.com</i>
                </EmailLink> 
                    <br/>
                P: (513)-257-4118 
                <br/>
                Nashville, TN, United States
            </RightSideTab>
        </FooterContTab>
        </>
    );
}

//==============================================
//====  Use to render Tablet Formatting  =======
//==============================================

const FooterContMob = styled.div`
    width: 100vw;
    min-height: 50vh;
    background-color: ${theme.secondary};
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 1% 1% 5% 1%;
`;

const CopyrightMob = styled.h5`
    width: 100%;
    color: ${theme.primary};
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    font-size: .95em;
    text-align: center;
    margin-top: 3%;
    margin-bottom: 0%;
    line-height: 1.5em;
`;

const LeftSideMob = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;
    // margin-left: 1%;
    // margin-right: 0%;
    color: ${theme.primary};
    font-family: 'League Spartan', sans-serif;
    font-weight: 600;
    font-size: .95em;
    text-align: center;
    line-height: 1.5em;
`;


export function FooterMob(props) {
    return (
        <>
        <FooterContMob>
            <LeftSideMob>
                <FooterLogoTab />
                <SocialLinksTab />
                Would you like to hire me?
                <br/> 
                <u>Contact Info: </u>
                E: <EmailLink href="mailto: benjaminisaachines@gmail.com">
                    <i>benjaminisaachines@gmail.com</i>
                </EmailLink> 
                P: (513)-257-4118 <br/>
                Nashville, TN, United States
                <br/> <br/>
                <CopyrightMob>
                    Ⓒ Copyright 2022 by Ben Hines <br/> All rights reserved.
                </CopyrightMob>
            </LeftSideMob>
        </FooterContMob>
        </>
    );
}