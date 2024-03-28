import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledA  href="">
         <Icon iconId ={'logo-gray'} />
        </StyledA>
    );
};

const StyledA = styled.a`
transform: translateY(25px);
height: 100%;
`;