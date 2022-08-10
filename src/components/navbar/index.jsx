import React from "react";
import styled from "styled-components";
import { ContactBtn } from "../button/contact";
import { Logo } from "../logo";
import { NavLinks } from "./navlinks";

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