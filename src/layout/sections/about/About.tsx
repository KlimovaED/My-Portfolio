import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Place} from "../../../components/place/Place";
import {theme} from "../../../styles/Theme";
import fon from '../../../assets/images/drawing.svg';

export const About = () => {
    return (
        <StyledAbout>
            <StyledContainer>
                <SectionTitle>About Me</SectionTitle>
                <StyledTitle>Work Experience</StyledTitle>
                <Place name={"Junior Frontend-developer"}
                       organization={"Team project"}
                       location={"Samara"} dates={"March 2024"} conditions={"Full Time"}/>
                <Place name={"Bachelor in Economics & Management.Business informatics"}
                       organization={"Samara National Research University named after Academician S.P. Queen"}
                       location={"Samara"} dates={"2014-2018"} conditions={"Full Time"}/>
                <Place name={"Bachelor in Economics & Management.Business informatics"}
                       organization={"Samara National Research University named after Academician S.P. Queen"}
                       location={"Samara"} dates={"2014-2018"} conditions={"Full Time"}/>

                <StyledTitle>Educations</StyledTitle>
                <Place name={"Bachelor in Economics & Management.Business informatics"}
                       organization={"Samara National Research University named after Academician S.P. Queen"}
                       location={"Samara"} dates={"2014-2018"} conditions={"Full Time"}/>

            </StyledContainer>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 100vh;
    height: fit-content;
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: flex-end;
    position: relative;
  &::before{
     content: "";
      position: absolute;
      left: -400px;
      top: 0;
      width: 900px;
      height: 900px;
      background-image: url(${fon});
      background-size: 900px 900px;
      transform: scaleX(-1);
      opacity: 0.5;

      @media ${theme.media.mobile} {
          width: 300px;
      }
  }

    @media ${theme.media.mobile} {
        width: 90%;
    }
`;
const StyledContainer = styled.div`
    width: 60%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 38px;
    @media ${theme.media.mobile} {
        width: 90%;
    }
    
`;
const StyledTitle = styled.h3`
    color: ${theme.colors.fontColor};
    font-size: 2rem;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: -0.4px;
    text-align: left;
`;

