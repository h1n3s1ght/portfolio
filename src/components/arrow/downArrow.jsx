import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ArrowCont = styled.div`
    width: 35%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(255,255,255,.1);
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        border: 1px solid rgba(255,255,255,.15);
        transition: all 100ms ease-in-out;
        margin-top: 6%;
    }
`;

const ArrowIcon = styled.div`
    color: ${theme.primary};
    font-size: 2.25em;
`;

export function DownArrow() {
    return (
        <ArrowCont>
            <ArrowIcon>
                <FontAwesomeIcon icon={faAngleDown}/>
            </ArrowIcon>
        </ArrowCont>
    )
};

const ArrowContMob = styled.div`
    width: 45%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(255,255,255,.1);
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        border: 1px solid rgba(255,255,255,.15);
        transition: all 100ms ease-in-out;
        margin-top: 6%;
    }
`;

const ArrowIconMob = styled.div`
    color: ${theme.primary};
    font-size: 2.25em;
`;

export function DownArrowMob() {
    return (
        <ArrowContMob>
            <ArrowIconMob>
                <FontAwesomeIcon icon={faAngleDown}/>
            </ArrowIconMob>
        </ArrowContMob>
    )
};