import React from 'react';
import styled from "styled-components";



export const Nav = () => {
    return (
        <StyledNav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </StyledNav>
    );
};

const StyledNav= styled.nav`
    width: 60%;

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;

    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: rgba(167, 167, 167, 1);
        font-size: 20px;
    }

    a:hover {
        border-bottom: 1px solid #bf3fa2;
        background: linear-gradient(to bottom right, #07ade5 0%, #bf3fa2 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

