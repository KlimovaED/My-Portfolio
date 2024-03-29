import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

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
    margin: 10% auto 0;
    min-height: 100vh;
    height: fit-content;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
    width: 100%;
    max-width: 500px;
    margin: 10% auto;
`;

const  StyledInput = styled.input`
    width: 100%;
    height: 50px;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight:lighter;
    line-height: 26px;
    color: rgba(217, 217, 217, 1);
    border: none;
    padding: 0 20px;
    background: rgb(54, 54, 54);
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2)
`;
