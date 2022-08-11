import React from "react";
import styled from "styled-components";
import { Logo } from "../logo";
import { NavLinks } from "./navlinks";

const NavCont = styled.div`
    width: 100%;
    height: 7%;
    margin-top: 0%;
    padding: 0 1em;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    background-image: linear-gradient(180deg, rgba(6,22,40,.98), rgba(6,22,40,.02));
`;

//rgba(255,255,255,.5)

const LogoCont = styled.div`
    width: 45%;
    margin-top: .75%;
    margin-left: .75%;
    margin-bottom: .3%;
`;

const Links = styled.div`
    width: 55%;
`;

export function StickyNavbar(props) {
    return (
        <NavCont className="sticky-nav">
            <LogoCont>
                <Logo inline/>
            </LogoCont>
            <Links>
                <NavLinks/>
            </Links>
        </NavCont>
    );
};