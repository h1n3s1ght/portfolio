import React from "react";
import styled from "styled-components";
import { theme } from "../../theme"


//==============================================
//====  Use to render Desktop Formatting  ======
//==============================================

const BlockCont = styled.div`
    margin-left: 11%;
    min-height: 50vh; 
    width: 78%;
    display: flex;
    background-color: rgba(255,255,255, .8);
    flex-direction: ${({ isRev }) => isRev && "row-reverse"};
    justify-content: flex-end;
    align-items: center;
    border-radius: 5px;
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const BlockImg = styled.img`
    width: 25em;
    height: 23em;
    border-radius: 10px;
    border: .5px solid ${theme.secondary};
    margin: 1% 3%;
    align-content: right;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const DescCont = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 65%;
    min-width: 55%;
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
    color: ${theme.secondary};
    font-size: 1.45em;
    text-align: left;
    word-spacing: 4px;
`;

export function BodyBlock(props) {

    // Write a function to get Title
    //==============================

    const { imgUrl, title, description, description2 , description3, isRev } = props;

    return (
        <BlockCont isRev={isRev}>
            <DescCont>
                <BlockTitle>
                    {title}
                </BlockTitle>
                <Details>
                    {description}
                    <br/> <br/>
                    {description2}
                    <br/> <br/>
                    {description3}
                </Details>
            </DescCont>
            <BlockImg src={imgUrl}/>
        </BlockCont>
    );
}

//==============================================
//====  Use to render Tablet Formatting  =======
//==============================================

const BlockContTab = styled.div`
    margin-left: 8%;
    min-height: 95vh; 
    width: 84%;
    display: flex;
    background-color: rgba(255,255,255, .8);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const BlockImgTab = styled.img`
    width: 50%;
    height: auto;
    border-radius: 10px;
    border: .5px solid ${theme.secondary};
    margin: 0% 3% 4% 3%;
    align-content: right;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const DescContTab = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 85%;
    min-width: 65%;
    align-items: center;
    margin: 3%;
`;

const BlockTitleTab = styled.h3`
    // width: 75%;
    text-align: center;
    color: ${theme.primary};
    font-size: 2em;
    font-weight: 700;
    margin: 1em 0;
    text-shadow: 2px 2px 6px rgba(0,0,0,.85),
                 0px -5px 35px rgba(255,255,255,.85);
`;

const DetailsTab = styled.p`
    color: ${theme.secondary};
    font-weight: 600;
    font-size: 1.45em;
    text-align: left;
    word-spacing: 4px;
    line-height: 1.05em;
`;

export function BodyBlockTab(props) {

    // Write a function to get Title
    //==============================

    const { imgUrl, title, description, description2 , description3 } = props;

   
        return (
            <BlockContTab >
                <DescContTab>
                    <BlockTitleTab>
                        {title}
                    </BlockTitleTab>
                    <DetailsTab>
                        {description}
                        <br/> <br/>
                        {description2}
                        <br/> <br/>
                        {description3}
                    </DetailsTab>
                </DescContTab>
                <BlockImgTab src={imgUrl}/>
            </BlockContTab>
        );
   }
