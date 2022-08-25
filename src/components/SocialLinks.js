import React from "react";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import styled from "styled-components";
import { theme } from "../theme";

const SocialCont = styled.div`
    width: 50vw;
    color: rgba(204,186,120,.9);
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

 const EachLink = styled.div`
    font-family: Roboto, helvetica;
    color: ${theme.secondary_light};
    font-size: 1.15em;
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 2%;
    margin-top: 1%;

    &:first-child {
        margin-left: 0%;
    }
 `;

export function SocialLinks(props) {
    return (
        <SocialCont>
            <EachLink>
                <MDBBtn className='m-1' style={{ backgroundColor: "rgba(204,186,120,1)", padding: '90%', borderRadius: '15px', color: "rgba(6,22,40,.95)" }} href='https://www.linkedin.com/in/benjaminisaachines/' target="_blank">
                    <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>
            </EachLink>
            <EachLink>
                <MDBBtn className='m-1' style={{ backgroundColor: "rgba(204,186,120,1)", padding: '80%', borderRadius: '15px', color: "rgba(6,22,40,.95)" }} href='https://github.com/h1n3s1ght' target="_blank">
                    <MDBIcon fab icon='github' />
                </MDBBtn>
            </EachLink>
            <EachLink className="d-flex">
                <MDBBtn className='m-1' style={{ backgroundColor: "rgba(204,186,120,1)", padding: '80%', borderRadius: '15px', color: "rgba(6,22,40,.95)", }} href='https://www.facebook.com/hin3sight/' target="_blank">
                    <MDBIcon fab icon="facebook" />
                </MDBBtn>
            </EachLink>
            <EachLink>
                <MDBBtn className='m-1' style={{ backgroundColor: "rgba(204,186,120,1)", padding: '80%', borderRadius: '15px', color: "rgba(6,22,40,.95)" }} href='https://twitter.com/_hinesight_' target="_blank">
                    <MDBIcon fab icon='twitter' />
                </MDBBtn>
            </EachLink>
            <EachLink>
                <MDBBtn className='m-1' style={{ backgroundColor: "rgba(204,186,120,1)", padding: '90%', borderRadius: '15px', color: "rgba(6,22,40,.95)" }} href='https://www.instagram.com/hinesight_/' target="_blank">
                    <MDBIcon fab icon='instagram' />
                </MDBBtn>
            </EachLink>

        </SocialCont>
    );
};



//==============================================
//====  Use to render Tablet Formatting  =======
//==============================================

const SocialContTab = styled.div`
    width: 100%;
    color: rgba(204,186,120,.9);
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

 const EachLinkTab = styled.div`
    font-family: Roboto, helvetica;
    color: ${theme.secondary_light};
    font-size: 1.15em;
    margin: 5%;

    &:first-child {
        margin-left: 0%;
    }
 `;


export function SocialLinksTab(props) {
    return (
        <SocialContTab>
            <EachLinkTab>
                <MDBBtn className='m-1' style={{ backgroundColor: "rgba(204,186,120,1)", padding: '90%', borderRadius: '15px', color: "rgba(6,22,40,.95)" }} href='https://www.linkedin.com/in/benjaminisaachines/' target="_blank">
                    <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>
            </EachLinkTab>
            <EachLinkTab>
                <MDBBtn className='m-1' style={{ backgroundColor: "rgba(204,186,120,1)", padding: '80%', borderRadius: '15px', color: "rgba(6,22,40,.95)" }} href='https://github.com/h1n3s1ght' target="_blank">
                    <MDBIcon fab icon='github' />
                </MDBBtn>
            </EachLinkTab>
            <EachLinkTab className="d-flex">
                <MDBBtn className='m-1' style={{ backgroundColor: "rgba(204,186,120,1)", padding: '80%', borderRadius: '15px', color: "rgba(6,22,40,.95)", }} href='https://www.facebook.com/hin3sight/' target="_blank">
                    <MDBIcon fab icon="facebook" />
                </MDBBtn>
            </EachLinkTab>
            <EachLinkTab>
                <MDBBtn className='m-1' style={{ backgroundColor: "rgba(204,186,120,1)", padding: '80%', borderRadius: '15px', color: "rgba(6,22,40,.95)" }} href='https://twitter.com/_hinesight_' target="_blank">
                    <MDBIcon fab icon='twitter' />
                </MDBBtn>
            </EachLinkTab>
            <EachLinkTab>
                <MDBBtn className='m-1' style={{ backgroundColor: "rgba(204,186,120,1)", padding: '90%', borderRadius: '15px', color: "rgba(6,22,40,.95)" }} href='https://www.instagram.com/hinesight_/' target="_blank">
                    <MDBIcon fab icon='instagram' />
                </MDBBtn>
            </EachLinkTab>

        </SocialContTab>
    );
};