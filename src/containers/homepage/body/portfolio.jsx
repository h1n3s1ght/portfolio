import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { PageTitle } from "../../../components/pageTitle";
import { theme } from "../../../theme";

const PortCont = styled(Element)`
    min-height: 100vh;
    background-image: linear-gradient(180deg, rgba(255,255,255,.8), ${theme.primary});
    display: flex;
    flex-direction: column;
`;

export function Portfolio(props) {
    return (
        <PortCont>
            <PageTitle>
                Portfolio
            </PageTitle>
        </PortCont>
    );
}