import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";



export const Nav: React.FC= () => {
    return (
        <StyledNav>
            <ul>
                <ListItem><Link href="">Home</Link></ListItem>
                <ListItem><Link href="">About</Link></ListItem>
                <ListItem><Link href="">Skills</Link></ListItem>
                <ListItem><Link href="">Projects</Link></ListItem>
                <ListItem><Link href="">Contact</Link></ListItem>
            </ul>
        </StyledNav>
    );
};

const StyledNav= styled.nav`
    width: 40%;

    ul {
        display: flex;
        justify-content: space-around;
        gap:2%;
    }
    @media ${theme.media.mobile} {
        display: none;
    }
`;

const ListItem = styled.li`
`;

const Link = styled.a`
    font-family:"DM Sans", sans-serif; 
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0;
    &:hover {
        border-bottom: 1px solid #bf3fa2;
        background: linear-gradient(to bottom right, #07ade5 0%, #bf3fa2 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

