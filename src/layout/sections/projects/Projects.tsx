import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "../../../components/project/Project";
import progImg1 from '../../../assets/images/projects/project1.webp';
import progImg2 from '../../../assets/images/projects/project2.webp';
import progImg3 from '../../../assets/images/projects/project3.webp';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../../styles/slider.css';
import {NavMenu} from "../../../components/navigation/NavMenu";
import {motion, AnimatePresence} from "framer-motion";


const projectMenu: Array<{ status: "all" | "landing" | "react" | "spa", title: string }> = [
    {title: "all", status: "all"},
    {title: "landing page", status: "landing"},
    {title: "react", status: "react"},
    {title: "spa", status: "spa"}]

const ProjectsData = [
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description.This is sample" +
            " project lorem ipsum generator for dummy content",
        src: progImg1,
        stack: " HTML , JavaScript, SASS, React",
        link: "#",
        linkGitHub: "#",
        type: "spa",
        id: 1
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description.This is sample" +
            " project lorem ipsum generator for dummy content",
        src: progImg2,
        stack: " HTML , JavaScript, SASS, React",
        link: "#",
        linkGitHub: "#",
        type: "react",
        id: 2
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description.This is sample" +
            " project lorem ipsum generator for dummy content",
        src: progImg3,
        stack: " HTML , JavaScript, SASS, React",
        link: "#",
        linkGitHub: "#",
        type: "react",
        id: 3
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description.This is sample" +
            " project lorem ipsum generator for dummy content",
        src: progImg1,
        stack: " HTML , JavaScript, SASS, React",
        link: "#",
        linkGitHub: "#",
        type: "landing",
        id: 4
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description.This is sample" +
            " project lorem ipsum generator for dummy content",
        src: progImg2,
        stack: " HTML , JavaScript, SASS, React",
        link: "#",
        linkGitHub: "#",
        type: "spa",
        id: 5
    },
    {
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description.This is sample" +
            " project lorem ipsum generator for dummy content",
        src: progImg3,
        stack: " HTML , JavaScript, SASS, React",
        link: "#",
        linkGitHub: "#",
        type: "react",
        id: 6
    }
]

export const Projects: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 576;
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
    let filtersProjects = ProjectsData;

    if (currentFilterStatus === "landing") {
        filtersProjects = ProjectsData.filter(work => work.type === "landing")
    }
    if (currentFilterStatus === "react") {
        filtersProjects = ProjectsData.filter(work => work.type === "react")
    }
    if (currentFilterStatus === "spa") {
        filtersProjects = ProjectsData.filter(work => work.type === "spa")
    }

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    function chancheFilterStatus(value: "all" | "landing" | "react" | "spa") {
        setCurrentFilterStatus(value);
    }


    return (
        <StyledProjects id="projects">
            <SectionTitle>Progects</SectionTitle>
            <NavMenu tabsItems={projectMenu} chancheFilterStatus={chancheFilterStatus}/>
            <StyledContent>
                {
                    width < breakpoint ?
                        <AliceCarousel>{
                            filtersProjects.map((project, index) => {
                                return <Project title={project.title}
                                                description={project.description}
                                                src={project.src}
                                                stack={project.stack} link={project.link}
                                                linkGitHub={project.linkGitHub}
                                                key={project.id} dava-value={index + 1}/>
                            })}
                        </AliceCarousel> : (
                            <AnimatePresence>
                                {filtersProjects.map((project, ) => {
                                    return (
                                        <motion.div style={{width:"300px",flexGrow:1,maxWidth:"373px"}}
                                                    initial={{opacity: 0}}
                                                    animate={{opacity: 1}}
                                                    exit={{opacity: 0}}
                                                    key={project.id}
                                                    layout>
                                            <Project title={project.title}
                                                     description={project.description}
                                                     src={project.src}
                                                     stack={project.stack} link={project.link}
                                                     linkGitHub={project.linkGitHub}
                                                     key={project.id}/>
                                        </motion.div>
                                    )
                                })}
                            </AnimatePresence>)
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

