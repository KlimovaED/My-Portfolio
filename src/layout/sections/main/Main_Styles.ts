import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.section`
    min-height: 85vh;
    height: fit-content;
    width: 80%;
    margin: auto;
    background: black;
    padding-top: 0;
    @media ${theme.media.mobile} {
        width: 90%;
        margin: auto;
    }

`;

const Title = styled.h1`
    ${font({weight: 700, Fmax: 58,Fmin:30,color: "rgba(217, 217, 217, 1)"})};
    letter-spacing: -1px;
    
    @media ${theme.media.mobile} {
        line-height:50px;
    }
  `;

const Name = styled.h2`
    ${font({weight: 700, Fmax: 58,Fmin:30})};
    background: linear-gradient(to bottom right, ${theme.colors.secondColor} 0%, ${theme.colors.primaryColor} 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -1px;
`;

const Text = styled.span`
    ${font({weight: 700, Fmax: 58,Fmin:30,color: "rgba(217, 217, 217, 1)"})};
    letter-spacing: -1px;
    @media ${theme.media.mobile} {
        line-height:45px;
    }
   `;


const Photo = styled.img`
    width: 320px;
    height: 320px;
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
    width: 500px;
    height: 500px;
 
    position: relative;
    @media ${theme.media.mobile} {
        width: 350px;
        height: 350px;
        margin-top: 10%;
        margin-left: -30px;
    }
`;

export const S ={
    Figura,
    Photo,
    Text,
    Name,
    Title,
    Main
}