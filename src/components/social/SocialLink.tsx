import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const SocialLink = () => {
    return (
        <StyledContainer>
            <StyledLink href="">
                <Icon iconId={'iconGitHub'} />
            </StyledLink>
            <StyledLink href="">
                <Icon iconId={'iconIn'}/>
            </StyledLink>
            <StyledLink href="">
                <Icon iconId={'iconTwitter'}/>
            </StyledLink>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-around;
    align-items: center;
`;
const StyledLink = styled.a`
    width: 30px;
    height: 30px;
`;

