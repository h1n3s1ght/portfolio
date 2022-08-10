import React from "react";
import styled from "styled-components";
import { ContactBtn } from "../button/contact";
import { Logo } from "../logo";

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
    margin-top: .75%;
    margin-left: .75%;
`;

const AccessCont = styled.div`

`;

const Links = styled.div`
    display: flex;
    flex-direction: row;
`;

export function Navbar(props) {
    return (
        <NavCont>
            <LogoCont>
                <Logo inline/>
            </LogoCont>
            <AccessCont>
                <ContactBtn small>Contact</ContactBtn>
            </AccessCont>
            <Links>
                
            </Links>
        </NavCont>
    );
};