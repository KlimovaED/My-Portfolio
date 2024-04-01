import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {SocialList} from "../../../components/social/SocialLink";



export const HeaderMenuMobile = () => {
    return (
        <StyledMobileMenu isOpen={true}>
        <StyledNav>
            <ul>
                <ListItem><Link href="">Home</Link></ListItem>
                <ListItem><Link href="">About</Link></ListItem>
                <ListItem><Link href="">Skills</Link></ListItem>
                <ListItem><Link href="">Projects</Link></ListItem>
                <ListItem><Link href="">Contact</Link></ListItem>
            </ul>
        </StyledNav>
            <SocialList/>
        </StyledMobileMenu>
    );
};
const StyledMobileMenu= styled.div<{isOpen:boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: ${theme.colors.secondBg};
    display: none;
    flex-direction: column;
    gap:70px;
    align-items: center;
    justify-content: center;
    
    ${props => props.isOpen && css<{isOpen:boolean}>`
    display: flex;
    `}
`;
const StyledNav= styled.nav`
    width: 100%;

    ul {
        display: flex;
        flex-direction: column;
       align-items: center;
        gap:30px;
    }
   
`;

const ListItem = styled.li`
`;

const Link = styled.a`
    font-family:"DM Sans", sans-serif; 
    font-weight: 500;
    font-size: 20px;
    &:hover {
        border-bottom: 1px solid #bf3fa2;
        background: linear-gradient(to bottom right, #07ade5 0%, #bf3fa2 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;
