import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Contatti = () => {
    return (
        <StyledContatti>
            <SectionTitle>For any questions please mail me:</SectionTitle>
            <StyledForm>
                <StyledInput placeholder={"Your name"}/>
                <StyledInput placeholder={"Phone number or email"}/>
                <StyledInput placeholder={"Message..."} as={"textarea"}/>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
        </StyledContatti>
    );
};

const StyledContatti = styled.section`
    width: 80%;
    margin: 0 auto 0;
    min-height: 100vh;
    height: fit-content;
    @media ${theme.media.mobile} {
        width: 90%;
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    width: 100%;
    max-width: 500px;
    margin: 10% auto;
    
    textarea{
        resize: none;
        height: 155px;
    }
`;

const  StyledInput = styled.input`
    ${font({weight: 300, Fmax:18, Fmin:15, color: `${theme.colors.fontColor}`, lineHeight: 1.3})};
    width: 100%;
    height: 50px;
    line-height: 26px;
    border: none;
    padding: 0 20px;
    background: ${theme.colors.secondBg};
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    
    &:focus{
        border: 0.5px solid ${theme.colors.primaryColor} ;
        outline: transparent;
        border-radius: 20px;
        box-shadow: -5px 3px 15px 3px ${theme.colors.secondColor},  5px 3px 15px 5px ${theme.colors.primaryColor},15px 5px 15px 5px rgba(0,0,0,0) ;
    }
    &:focus-visible{
        outline: 0.5px solid ${theme.colors.primaryColor};
    }
`;
