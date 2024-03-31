import React from "react";
import styled from "styled-components";
import {SocialList} from "../../components/social/SocialLink";
import {HeaderMenu} from "./headerMenu/HeaderMenu";



export const Header = () => {
    return (
        <StyledHeader>

            <StyledContainer>
                <HeaderMenu/>
                <SocialList/>
            </StyledContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    width: 80%;
    height: 15vh;
    margin: auto;
    overflow: hidden;
`;
const StyledContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: flex-end;
    gap:5%;
    align-items: center;
`;