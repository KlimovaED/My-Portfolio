import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Progect} from "../../../components/progect/Progect";
import progImg1 from '../../../assets/images/projects/project1.webp';
import progImg2 from '../../../assets/images/projects/project2.webp';
import progImg3 from '../../../assets/images/projects/project3.webp';


export const Progects = () => {
    return (
        <StyledProgects>
            <SectionTitle>Progects</SectionTitle>
            <StyledContent>
                <Progect title={"Project Tile goes here"}
                         description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                         src={progImg1}/>
                <Progect title={"Project Tile goes here"}
                         description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                         src={progImg2}/>
                <Progect title={"Project Tile goes here"}
                         description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                         src={progImg3}/>
            </StyledContent>
        </StyledProgects>
    );
};

const StyledProgects = styled.section`
    width: 80%;
    margin: auto;
    min-height: 100vh;
    height: fit-content;
`;

const StyledContent = styled.div`
    margin-top: 10%;
    width: 100%;
    min-height: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px 5%;
`;

