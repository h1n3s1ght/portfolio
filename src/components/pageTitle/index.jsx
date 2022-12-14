import styled from "styled-components";
import { theme } from "../../theme";

export const PageTitle = styled.h1`
    width: 100%;
    font-size: 3.5em;
    font-weight: 700;
    color: ${theme.primary};
    margin-top: 5%;
    text-align: center;
    text-shadow: 2px 2px 6px rgba(0,0,0,.85),
                 0px -5px 35px rgba(255,255,255,.85);
`;