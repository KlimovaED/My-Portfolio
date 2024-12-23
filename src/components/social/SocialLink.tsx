import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const SocialList:React.FC = () => {
    return (
        <SocialItem>
            <SocialLink aria-label="GitHub" href="https://github.com/KlimovaED">
                <Icon iconId={'iconGitHub'}  width={"30px"} heigth={"30px"} viewBox={"0 0 30 30"} />
            </SocialLink>
            <SocialLink aria-label="LinkedIn" href="https://www.linkedin.com/in/katerina-klimova-5744192ab/">
                <Icon iconId={'iconIn'}  width={"30px"} heigth={"30px"} viewBox={"0 0 30 30"}/>
            </SocialLink>
            <SocialLink aria-label="Twitter" href="https://t.me/klimovaklimova">
                <Icon iconId={'iconTwitter'}  width={"30px"} heigth={"30px"} viewBox={"0 0 30 30"}/>
            </SocialLink>
        </SocialItem>
    );
};

const SocialItem = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-around;
    align-items: center;
    @media ${theme.media.mobile} {
        width: 80%;
    }
`;
const SocialLink = styled.a`
    width: 30px;
    height: 30px;
`;

