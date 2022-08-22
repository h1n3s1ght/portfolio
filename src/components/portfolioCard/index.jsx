import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const CardCont = styled.div`
    width: 80%;
    height: 90%;
    margin-left: 10%;
    margin-top: 3%;
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
    text-align: center;
    color: ${theme.primary};
    font-size: 2em;
    font-weight: 700;
    margin: 1em 0;
    text-shadow: 2px 2px 6px rgba(0,0,0,.85),
                 0px -5px 35px rgba(255,255,255,.85);
`;

const BlockDescCont =styled.div`
    font-family: 'League Spartan', sans-serif;
    width: 80%;
    margin-left: 10%;
    position: flex;
    font-size: .95em;
    line-height: 1.5em;
    flex-direction: row;
    justify-content: flex-start;
`;

const BlockDescH5 = styled.h5`
    width: 84%;
    text-align: left;
    color: ${theme.secondary};
    font-size: 1.25em;
    font-weight: 700;
`;

const BlockDescLink = styled.a`
    text-decoration: none;
    color: ${theme.primary};
    font-family: 'League Spartan', sans-serif;
    font-weight: 500;
    letter-spacing: .25em;

    &:hover {
        background-color: ${theme.primary};
        color: white;
        padding: 1% .2%;
        border-radius: 5px;
    }
`;

const BlockImgCont = styled.div`
    width: 100%;
    margin-top: 2%;
`;

const BlockImg = styled.img`
    width: 70%;
    max-height: 80%;
    margin-left: 15%;
    margin-right: 15%;
    border: 1px solid ${theme.secondary_light};
    border-radius: 5px;
`;

export function PortCard(props) {

const { imgUrl, title, description, link } = props;

    return (
        <CardCont>
           <BlockTitle> 
            {title}
           </BlockTitle>
            <BlockDescCont>
                <BlockDescH5>
                    {description}
                </BlockDescH5>
                <BlockDescLink href={link} target="_blank">Click here to see it for yourself!
                </BlockDescLink>
            </BlockDescCont>
           <BlockImgCont>
                <BlockImg src={imgUrl}/>
           </BlockImgCont>
        </CardCont>
    );
}