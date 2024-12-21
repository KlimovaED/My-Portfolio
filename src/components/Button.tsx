import styled from "styled-components";
import {theme} from "../styles/Theme";

export  const Button = styled.button`
    margin-top: 5%;
    max-width: 240px;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 20px;
    background: linear-gradient(90.00deg, rgb(19, 176, 245),rgb(231, 15, 170));
    color: black;
    font-size: 1.1rem;
    font-weight:lighter;
    line-height: 26px;
    cursor: pointer;
&:hover{
    transform: scale(1.1);
    transition: ${theme.animation.transition};
}
`;
export const ButtonBorder = styled(Button)`
    border: 3px solid transparent;
    background: linear-gradient(#000000, #000000) padding-box,
    linear-gradient(45deg, ${theme.colors.secondColor}, ${theme.colors.primaryColor}) border-box;
    color: white;

`;
