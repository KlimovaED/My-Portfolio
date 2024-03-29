import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/logo.jpg';
import figura from '../../../assets/images/Abstract.svg';
import {FlexWrapper} from "../../../components/FlexWrapper";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
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
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    color: rgba(217, 217, 217, 1);
    font-family: "Poppins", sans-serif;
    font-size: 3rem;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    margin: 0;
    padding: 0;`;

const StyledName = styled.h2`
    background: linear-gradient(to bottom right, #07ade5 0%, #bf3fa2 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Poppins", sans-serif;
    font-size: 3rem;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    margin: 0;
    padding: 0;
`;

const StyledText = styled.span`
    color: rgba(217, 217, 217, 1);
    font-family: "Poppins", sans-serif;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -1px;
   `;


const Photo = styled.img`
    box-sizing: border-box;
    width: 300px;
    height: 300px;
    object-fit: cover;
    position: absolute;
    border-radius: 230px;
    border: 10px solid transparent;
    background: linear-gradient(to top right, #07ade5 0%, #bf3fa2 100%);
`;

const Figura = styled.img`
    width: 450px;
    height: 450px;
    position: relative;
`;