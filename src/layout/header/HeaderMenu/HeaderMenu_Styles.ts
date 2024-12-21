import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {Link} from "react-scroll";
import {motion} from "framer-motion";

const MobileMenu= styled.div<{isOpen:boolean}>`
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
const MobileNav= styled.nav`
    width: 100%;

    ul {
        display: flex;
        flex-direction: column;
       align-items: center;
        gap:30px;
    }
`;

const MenuItem = styled(motion.li)`
`;

const NavLink = styled(Link)`
    ${font({family:"DM Sans",weight: 500, Fmax:20, Fmin:20, color: `${theme.colors.fontColor}`})};
    cursor: pointer;
    transition: ${theme.animation.transition};
    
 
    &:hover {
        border-bottom: 1px solid #bf3fa2;
        background: linear-gradient(to bottom right, #07ade5 0%, #bf3fa2 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const DesktopNav= styled.nav`
    width: 70%;

    ul {
        display: flex;
        justify-content: space-around;
        gap:2%;
    }
`;
export const S = {
    NavLink,MenuItem,MobileMenu,MobileNav,DesktopNav
}

export const Nav={
    NavLink
}
