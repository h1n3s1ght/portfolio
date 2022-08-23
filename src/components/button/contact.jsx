import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const BtnWrap = styled.button`
    padding: ${({ small }) => small ? "6px 12px": "7px 15px"};
    border-radius: 10px;
    border: 2px solid transparent;
    background-color: rgba(255,255,255,.1);
    color: ${theme.primary};
    font-weight: 500;
    font-size: ${({ small }) => small ? ".9em" : "1.5em"};
    font-family: 'League Spartan', sans-serif;
    outline: none;
    transition: all 220ms ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: rgba(255,255,255,.3);
    }
`;


//==============================================
//====  Use to render Desktop Formatting  ======
//==============================================

export function ContactBtn(props) {
    return <BtnWrap {...props}> { props.children } </BtnWrap>
}


//==============================================
//====  Use to render Tablet Formatting  =======
//==============================================

export function ContactBtnTab(props) {
    return <BtnWrap {...props}> { props.children } </BtnWrap>
}