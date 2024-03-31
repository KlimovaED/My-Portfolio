import React from 'react';
import styled from "styled-components";

export const HeaderMenu = () => {
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
    width: 60%;

    ul {
        display: flex;
        justify-content: space-around;
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
