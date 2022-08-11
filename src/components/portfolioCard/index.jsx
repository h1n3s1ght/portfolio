import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const CardCont = styled.div`
    width: 70%;
    height: 80%;
    margin-left: 15%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px, rgba(0, 0, 0, 0.25) 0px 5px 5px, rgba(0, 0, 0, 0.12) 0px -12px 30px;
    border-radius: 5px;
    background-color: white;
`;

const BlockTitle = styled.h3`
    // width: 75%;
    text-align: center;
    color: ${theme.primary};
    font-size: 2em;
    font-weight: 700;
    margin: 1em 0;
    text-shadow: 2px 2px 6px rgba(0,0,0,.85),
                 0px -5px 35px rgba(255,255,255,.85);
`;

export function PortCard(props) {
    return (
        <CardCont>
           <BlockTitle> Card </BlockTitle>
        </CardCont>
    );
}