import React from 'react';
import styled from "styled-components";
import {SocialList} from "../../components/social/SocialLink";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Nav} from "../../components/navigation/Nav";

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterContent>
            <Name>Klimova <NameColor>Katerina</NameColor></Name>
            <FlexWrapper gap={"5%"}>
                <Number>+ 39-333-923-3458</Number>
                <Email>klimovaed@icloud.com</Email>
            </FlexWrapper>
            <SocialList/>
            </FooterContent>
            <Line></Line>
            <FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
                <Nav/>
                <FooterText>With <NameColor> Love </NameColor> & <NameColor>Coffee</NameColor></FooterText>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter= styled.footer`
    width: 80%;
    min-height: 25vh;
    margin: auto;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap:5px;
`;

const FooterContent = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap:10px 0;
    justify-content: space-between;
`;
const Name = styled.h5`
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    color: rgba(217, 217, 217, 1);
`;
const NameColor = styled.span`
    background: linear-gradient(to bottom right, #07ade5 0%, #bf3fa2 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const Number = styled.span`
    color: rgba(217, 217, 217, 1);
    width: 160px;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight:lighter;
    line-height: 26px;
`;

const Email=styled.span`
    color: rgba(217, 217, 217, 1);
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight:lighter;
    line-height: 26px;
`;

const Line = styled.hr`
   width: 100%;
    border-color: rgba(217, 217, 217, 0.5);
    border-width: 0.5px;
`;

const FooterText = styled.span`
    color: rgba(217, 217, 217, 1);
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight:lighter;
    line-height: 26px;
`;





