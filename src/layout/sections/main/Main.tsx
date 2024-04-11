import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/logo.jpg';
import figura from '../../../assets/images/Abstract.svg';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


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


const StyledMain = styled.section`
    min-height: 85vh;
    height: fit-content;
    width: 80%;
    margin: auto;
    background: black;
    @media ${theme.media.mobile} {
        width: 90%;
        margin: auto;
    }

`;

const StyledTitle = styled.h1`
    ${font({weight: 700, Fmax: 50,Fmin:30,color: "rgba(217, 217, 217, 1)"})};
    letter-spacing: -1px;
    
    @media ${theme.media.mobile} {
        line-height:50px;
    }
  `;

const StyledName = styled.h2`
    ${font({weight: 700, Fmax: 50,Fmin:30})};
    background: linear-gradient(to bottom right, ${theme.colors.secondColor} 0%, ${theme.colors.primaryColor} 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -1px;
`;

const StyledText = styled.span`
    ${font({weight: 700, Fmax: 50,Fmin:30,color: "rgba(217, 217, 217, 1)"})};
    letter-spacing: -1px;
    @media ${theme.media.mobile} {
        line-height:45px;
    }
   `;


const Photo = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
    position: absolute;
    border-radius: 230px;
    border: 10px solid transparent;
    background: linear-gradient(to top right, ${theme.colors.secondColor} 0%, ${theme.colors.primaryColor} 100%);
    @media ${theme.media.mobile} {
        width: 250px;
        height: 250px;
        margin-top: 10%;
    }
`;

const Figura = styled.img`
    width: 450px;
    height: 450px;
    position: relative;
    @media ${theme.media.mobile} {
        width: 350px;
        height: 350px;
        margin-top: 10%;
        margin-left: -30px;
    }
`;