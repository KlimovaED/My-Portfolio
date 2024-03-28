import React from "react";
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Nav} from "../../components/navigation/Nav";
import {SocialLink} from "../../components/social/SocialLink";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <StyledContainer>
                <Nav/>
                <SocialLink/>
            </StyledContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: transparent;
    display: flex;
    justify-content: space-between;
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