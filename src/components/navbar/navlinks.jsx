import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const NavCont = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    color: ${theme.primary};
    list-style: none;
`;

const NavLi = styled.li`
    font-family: 'League Spartan', sans-serif;
    padding: 1.5%;
    margin: .5%;
    
    &:hover {
        border-radius: 10px;
        background-color: rgba(255,255,255,.1);
        color: rgba(204,186,120,1);
    }
`;

export function NavLinks(){
    return (
        <NavCont>
            <NavLi>About</NavLi>
            <NavLi>Portfolio</NavLi>
            {/* <NavLi>Qualifications</NavLi> */}
            <NavLi>Resume</NavLi>
            <NavLi>Contact</NavLi>
        </NavCont>
    );
};