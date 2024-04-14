import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "../../../components/project/Project";
import progImg1 from '../../../assets/images/projects/project1.webp';
import progImg2 from '../../../assets/images/projects/project2.webp';
import progImg3 from '../../../assets/images/projects/project3.webp';


const ProjectsData = [
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description.This is sample" +
            " project lorem ipsum generator for dummy content",
        src: progImg1,
        stack: " HTML , JavaScript, SASS, React",
        link: "#",
        linkGitHub: "#"
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description.This is sample" +
            " project lorem ipsum generator for dummy content",
        src: progImg2,
        stack: " HTML , JavaScript, SASS, React",
        link: "#",
        linkGitHub: "#"
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description.This is sample" +
            " project lorem ipsum generator for dummy content",
        src: progImg3,
        stack: " HTML , JavaScript, SASS, React",
        link: "#",
        linkGitHub: "#"
    }
]
export const Projects :React.FC= () => {
    return (
        <StyledProjects id="projects">
            <SectionTitle>Progects</SectionTitle>
            <StyledContent>
                {
                    ProjectsData.map((project,index) => {
                        return <Project title={project.title}
                                        description={project.description}
                                        src={project.src}
                                        stack={project.stack} link={project.link}
                                        linkGitHub={project.linkGitHub}
                        key={index}/>
                    })
                }

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

