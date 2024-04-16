import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import arrow from '../../assets/images/9004749_arrow_up_move_direction_icon.svg';
import {animateScroll as scroll} from "react-scroll";
import {theme} from "../../styles/Theme";


export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowBtn(true);
            } else {
                setShowBtn(false)
            }
        })
    }, []);

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => scroll.scrollToTop()}>
                    <IconBtn src={arrow} alt="circled-up-2"/>
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    background-color: transparent;
    border: none;
    position: fixed;
    right: 30px;
    bottom: 30px;
    opacity: 0.7;

    &:hover, &:active {
        opacity: 1;
        transition: ${theme.animation.transition};
    }
    @media ${theme.media.mobile} {
       opacity: 0.8;
    }
 
    
`;

const IconBtn = styled.img`
    width: 72px;
    height: 72px;
    @media ${theme.media.mobile} {
        width: 60px;
        height: 60px;
    }
`;


