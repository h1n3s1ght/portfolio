import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLinksMob } from './navlinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "@fortawesome/free-solid-svg-icons";
import { theme } from '../../theme';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const HamNav = styled.nav`
    position: fixed;
    margin: 0;
    padding: 0;
    min-height: 8vh;
    background: rgba(204,186,120,.95);
    z-index: 1401;
    color: ${theme.secondary};
`;

const HamBtn = styled.button`
    position: fixed;
    left: 2vw;
    top: 2vh;
    z-index: 15;
    cursor: pointer;
    height: 3vh;
    margin: 0;
    border: 0px;
    background: none;
    font-size: 1.5em;
`;


export function Hamburger() {

const [ navOpen, setNavOpen ] = useState(false);

const handleToggle = () => {
    setNavOpen(!navOpen)
};

    return (
        <HamNav>
            <HamBtn onClick={handleToggle}> 
        
            { navOpen ? 
            <FontAwesomeIcon icon={faXmark}/> :
             <FontAwesomeIcon icon={faBars}/>
             }
            </HamBtn>

            <ul className={`menuNav ${navOpen ? " showMenu" : ""}`}>
                {navOpen ? <NavLinksMob/> : ''}
            </ul>
        </HamNav>
    );
};