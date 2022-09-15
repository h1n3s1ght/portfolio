import React from "react";
import styled from "styled-components";
import { Logo, LogoTab } from "../logo";
import { NavLinks, NavLinksTab } from "./navlinks";


//==============================================
//====  Styles used in all Size Formatting  ====
//==============================================

const NavCont = styled.div`
    width: 100%;
    height: 9%;
    padding: 0 1em;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
`;

const LogoCont = styled.div`
    width: 45%;
    margin-top: .75%;
    margin-left: .75%;
`;


const Links = styled.div`
    width: 55%;
`;

//==============================================
//====  Use to render Desktop Formatting  ======
//==============================================

export function Navbar(props) {
    return (
        <NavCont>
            <LogoCont>
                <Logo inline/>
            </LogoCont>
            <Links>
                <NavLinks/>
            </Links>
        </NavCont>
    );
};


//==============================================
//====  Use to render Tablet Formatting  =======
//==============================================

const LinksTab = styled.div`
    padding-right: 2%;
    padding-top: 1%;
    width: 53%;
`;

export function NavbarTab(props) {
    return (
        <NavCont>
            <LogoCont>
                <LogoTab inline/>
            </LogoCont>
            <LinksTab>
                <NavLinksTab/>
            </LinksTab>
        </NavCont>
    );
};

//==============================================
//====  Use to render Mobile Formatting  =======
//==============================================

const LinksMob = styled.div`
    padding-right: 2%;
    padding-top: 1%;
    width: 100%;
`;

export function NavbarMob(props) {
    return (
        <NavCont>
            <LinksMob>
                {/* <NavLinksMob/> */}
            </LinksMob>
        </NavCont>
    );
};