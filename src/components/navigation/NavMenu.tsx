import React from 'react';
import styled from "styled-components";
import {Link} from "react-scroll";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

type TabMenuPropsType = {
    tabsItems: Array<{ status: "all" | "landing" | "react" | "spa", title: string }>,
    chancheFilterStatus: (value: "all" | "landing" | "react" | "spa") => void
}

export const NavMenu = (props: TabMenuPropsType) => {
    return (
        <StyledNavMenu>
            <ul>
                {
                    props.tabsItems.map((item, index) => {
                        return <ListItem key={index}><NavLink as={"button"} onClick={() => {
                            props.chancheFilterStatus(item.status)
                        }}>{item.title}</NavLink></ListItem>
                    })
                }
            </ul>
        </StyledNavMenu>
    );
};

const StyledNavMenu = styled.nav`
    width: 100%;
    padding-top: 40px;

    ul {
        max-width: 352px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: auto;
    }
`;
const ListItem = styled.li`

`;
const NavLink = styled.a`
    ${font({family: "DM Sans", weight: 500, Fmax: 20, Fmin: 20, color: `${theme.colors.fontColor}`})};
    cursor: pointer;
    transition: ${theme.animation.transition};
    text-transform: uppercase;
    background-color: transparent;
    border: none;


    &:hover {
        border-bottom: 1px solid #bf3fa2;
        background: linear-gradient(to bottom right, #07ade5 0%, #bf3fa2 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;
