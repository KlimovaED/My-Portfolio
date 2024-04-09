import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "../../../components/skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper justify={"center"} align={"center"} wrap={"wrap"} gap={"20px 3%"}>
                <Skill iconId={"codeJs"} title={"JavaScript"}/>
                <Skill iconId={"codeCSS"} title={"CSS"}/>
                <Skill iconId={"codeHtml"} title={"HTML"}/>
                <Skill iconId={"codeVs"} title={"VisualCode"}/>
                <Skill iconId={"codeReact"} title={"React"}/>
                <Skill iconId={"codeGit"} title={"Git"}/>
                <Skill iconId={"codeBootstrap"} title={"Bootstrap"}/>
                <Skill iconId={"codeGitHub"} title={"GitHub"} />
                <Skill iconId={"codeSass"} title={"Sass"}/>
            </FlexWrapper>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 50vh;
    height: fit-content;
    width: 90%;
    margin: 10% auto 0;
    display: flex;
    flex-direction: column;
    gap: 70px;
    
    
`;


