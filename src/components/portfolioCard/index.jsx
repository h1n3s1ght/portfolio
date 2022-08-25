import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";



//==============================================
//====  Use to render Desktop Formatting  ======
//==============================================


const CardCont = styled.div`
    width: 80%;
    min-height: 100vh;
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
    margin-left: 0%;
    position: flex;
    font-size: .95em;
    line-height: 1.15em;
    flex-direction: row;
    justify-content: flex-start;
`;

const BlockDescP = styled.p`
    color: ${theme.secondary};
    font-weight: 600;
    font-size: 1.45em;
    text-align: left;
    word-spacing: 4px;
    line-height: 1.05em;
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
    margin-bottom: 4%;
`;

const BlockImg = styled.img`
    max-width: 80%;
    min-height: 60%;
    margin-left: 10%;
    margin-right: 10%;
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
                <BlockDescP>
                    {description}
                </BlockDescP>
                <BlockDescLink href={link} target="_blank">Click here to see it for yourself!
                </BlockDescLink>
            </BlockDescCont>
           <BlockImgCont>
                <BlockImg src={imgUrl}/>
           </BlockImgCont>
        </CardCont>
    );
}



//==============================================
//====  Use to render Tablet Formatting  =======
//==============================================

const CardContTab = styled.div`
    width: 80%;
    min-height: 100vh;
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

const BlockDescContTab =styled.div`
    font-family: 'League Spartan', sans-serif;
    width: 100%;
    margin-left: 0%;
    position: flex;
    font-size: .95em;
    line-height: 1.15em;
    flex-direction: row;
    justify-content: flex-start;
`;

const BlockDescPTab = styled.p`
    color: ${theme.secondary};
    font-weight: 600;
    font-size: 1.45em;
    text-align: left;
    word-spacing: 4px;
    line-height: 1.05em;
    margin-left: 10%;
    margin-right: 10%;
`;

const BlockDescLinkTab = styled.a`
    text-decoration: none;
    color: ${theme.primary};
    font-family: 'League Spartan', sans-serif;
    font-weight: 500;
    letter-spacing: .25em;
    margin-left: 10%;

    &:hover {
        background-color: ${theme.primary};
        color: white;
        padding: 1% .2%;
        border-radius: 5px;
    }
`;

const BlockImgContTab = styled.div`
    width: 100%;
    margin-top: 2%;
    margin-bottom: 4%;
`;

const BlockImgTab = styled.img`
    max-width: 80%;
    min-height: 40%;
    margin-left: 10%;
    margin-right: 10%;
    border: 1px solid ${theme.secondary_light};
    border-radius: 5px;
`;

export function PortCardTab(props) {

const { imgUrl, title, description, link } = props;

    return (
        <CardContTab>
           <BlockTitle> 
            {title}
           </BlockTitle>
            <BlockDescContTab>
                <BlockDescPTab>
                    {description}
                </BlockDescPTab>
                <BlockDescLinkTab href={link} target="_blank">Click here to see it for yourself!
                </BlockDescLinkTab>
                <BlockImgContTab>
                    <BlockImgTab src={imgUrl}/>
                </BlockImgContTab>
            </BlockDescContTab>
        </CardContTab>
    );
}