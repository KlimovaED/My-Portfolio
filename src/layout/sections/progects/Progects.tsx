import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Progect} from "../../../components/progect/Progect";

export const Progects = () => {
    return (
        <StyledProgects>
            <SectionTitle>Progects</SectionTitle>
            <StyledContent>
                <Progect title={"Project Tile goes here"}
                         description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                <Progect title={"Project Tile goes here"}
                         description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                <Progect title={"Project Tile goes here"}
                         description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
            </StyledContent>
        </StyledProgects>
    );
};

const StyledProgects = styled.section`
    width: 80%;
    margin: auto;
    border: 1px solid red;
    min-height: 100vh;
    height: fit-content;
`;

const StyledContent = styled.div`
    margin-top: 10%;
    border: 1px solid green;
    width: 100%;
    min-height: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px 0;
`;

