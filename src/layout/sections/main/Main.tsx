import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/logo.jpg';
import figura from '../../../assets/images/Abstract.svg';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
            <FlexWrapper direction={"column"}>
                <StyledText> Hi 👋, </StyledText>
                <StyledText> My name is</StyledText>
                <StyledName>Katerina Klimova</StyledName>
                <StyledTitle>A Web Developer</StyledTitle>
                </FlexWrapper>
                <FlexWrapper position={"relative"} align={"center"} justify={"center"}>
                    <Photo src={photo} alt="img"/>
                    <Figura src={figura} alt=""/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledMain>
    );
};
//

const StyledMain = styled.div`
    min-height: 85vh;
    height: fit-content;
    width: 80%;
    margin: auto;`;

const StyledTitle = styled.h1`
    color: rgba(217, 217, 217, 1);
    font-size: 3rem;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
  `;

const StyledName = styled.h2`
    background: linear-gradient(to bottom right, ${theme.colors.secondColor} 0%, ${theme.colors.primaryColor} 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3rem;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
 
`;

const StyledText = styled.span`
    color: rgba(217, 217, 217, 1);
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -1px;
   `;


const Photo = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
    position: absolute;
    border-radius: 230px;
    border: 10px solid transparent;
    background: linear-gradient(to top right, ${theme.colors.secondColor} 0%, ${theme.colors.primaryColor} 100%);
`;

const Figura = styled.img`
    width: 450px;
    height: 450px;
    position: relative;
`;