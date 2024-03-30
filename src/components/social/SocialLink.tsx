import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const SocialList = () => {
    return (
        <SocialItem>
            <SocialLink aria-label="GitHub" href="">
                <Icon iconId={'iconGitHub'}  width={"30px"} heigth={"30px"} viewBox={"0 0 30 30"} />
            </SocialLink>
            <SocialLink aria-label="LinkedIn" href="">
                <Icon iconId={'iconIn'}  width={"30px"} heigth={"30px"} viewBox={"0 0 30 30"}/>
            </SocialLink>
            <SocialLink aria-label="Twitter" href="">
                <Icon iconId={'iconTwitter'}  width={"29px"} heigth={"29px"} viewBox={"2 2 30 30"}/>
            </SocialLink>
        </SocialItem>
    );
};

const SocialItem = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-around;
    align-items: center;
`;
const SocialLink = styled.a`
    width: 30px;
    height: 30px;
`;

