import styled from "styled-components";
import fon from "../../../assets/images/drawing.svg";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const About = styled.section`
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
         display: none;
      }
  }

    @media ${theme.media.mobile} {
        width: 90%;
    }
`;
const Container = styled.div`
    width: 60%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 38px;
    @media ${theme.media.tablet} {
        width: 100%;
    }
    
`;
const Title = styled.h3`
    ${font({weight: 700, Fmax: 42,Fmin:30,color: `${theme.colors.fontColor}`})};
    line-height: 52px;
    letter-spacing: -0.4px;
    text-align: left;
`;

export const S = {
    Title,
    Container,
    About
};