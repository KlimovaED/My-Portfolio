import React from 'react';
import styled from "styled-components";

type ProgectPropsTitle ={
    title:string
    description:string
};
export const Progect = (props:ProgectPropsTitle) => {
    return (
        <StyledProgect>
            <ProgectTitle>{props.title}</ProgectTitle>
            <ProgectText>{props.description}</ProgectText>

        </StyledProgect>
    );
};

const StyledProgect = styled.div`
    width: 30%;
    min-height: 567px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    background: rgb(54, 54, 54);
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
`;
const ProgectTitle = styled.h4`
    color: rgb(204, 204, 204);
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 26px;
    text-align: center;`;

const ProgectText = styled.p`
    width: 85%;
    margin: 0 auto;
    color: rgb(204, 204, 204);
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 26px;
    text-align: left;
`;