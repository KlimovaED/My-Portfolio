import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    width: 80%;
    height: 15vh;
    margin: auto;
    overflow: hidden;
`;

const ButtonMobile=styled.button<{isOpen:boolean}>`
    display:flex;
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    border: none;
    background: transparent;
    z-index: 99999;
   
    
    span{
        display: block;
        position: absolute;
        left: 40px;
        bottom: 50px;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.fontColor};

        ${props => props.isOpen && css<{isOpen:boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before{
            content: "";
            display: block;
            position: absolute;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.fontColor};
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen:boolean}>`
                transform:rotate(-45deg) translateY(0);
        `}
        }
        &::after{
            content: "";
            display: block;
            position: absolute;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.fontColor};
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen:boolean}>`
                transform:rotate(45deg) translateY(0);
                width: 36px;
        `}
        }
    }
`;
const MobileContainer = styled.div<{isOpen:boolean}>`
    display: none;
    
    ${props => props.isOpen && css<{isOpen:boolean}>`
    
    `}

   
}
`;


const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: flex-end;
    gap:3%;
    align-items: center;
  
`;

export const S = {
    Header, Container,ButtonMobile,MobileContainer
}