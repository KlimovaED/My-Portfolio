import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "../../../components/project/Project";
import progImg1 from '../../../assets/images/projects/project1.webp';
import progImg2 from '../../../assets/images/projects/project2.webp';
import progImg3 from '../../../assets/images/projects/project3.webp';
import {theme} from "../../../styles/Theme";


export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Progects</SectionTitle>
            <StyledContent>
                <Project title={"Project Tile goes here"}
                         description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                         src={progImg1}
                stack={" HTML , JavaScript, SASS, React"}/>
                <Project title={"Project Tile goes here"}
                         description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                         src={progImg2}
                         stack={" HTML , JavaScript, SASS, React"}/>
                <Project title={"Project Tile goes here"}
                         description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                         src={progImg3}
                         stack={" HTML , JavaScript, SASS, React"}/>
            </StyledContent>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    width: 90%;
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

