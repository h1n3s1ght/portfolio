import React from "react";
import styled from "styled-components";
import { theme } from "../../theme"

const BlockCont = styled.div`
    margin-left: 6%; 
    width: 86%;
    display: flex;
    flex-direction: ${({ isRev }) => isRev && "row-reverse"};
    justify-content: flex-end;
    align-items: center;
    border-radius: 5px;
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const BlockImg = styled.img`
    width: 22em;
    height: 23em;
    border-radius: 5px;
    margin: 1%;
    align-content: right;
`;

const DescCont = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 70%;
    min-width: 60%;
    align-items: center;
    margin: 3%;
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

const Details = styled.p`
    color: black;
    font-size: 1.45em;
    text-align: left;
    word-spacing: 4px;
`;

export function BodyBlock(props) {

    // Write a function to get Title
    //==============================

    const { imgUrl, title, description, isRev } = props;

    return (
        <BlockCont isRev={isRev}>
            <DescCont>
                <BlockTitle>
                    {title}
                </BlockTitle>
                <Details>
                    {description}
                </Details>
            </DescCont>
            <BlockImg src={imgUrl}/>
        </BlockCont>
    );
}