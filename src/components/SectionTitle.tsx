import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    color: ${theme.colors.fontColor} ;
    font-size: 3rem;
    font-weight: 700;
    line-height: 70px;
    text-align: center;
    @media ${theme.media.mobile} {
        font-size: 2rem;
    }
`;