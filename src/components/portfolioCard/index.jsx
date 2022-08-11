import React from "react";
import styled from "styled-components";

const CardCont = styled.div`
    width: 30%;
    height: 80%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 5px;
`;

export function PortCard(props) {
    return (
        <CardCont>
            Card
        </CardCont>
    );
}