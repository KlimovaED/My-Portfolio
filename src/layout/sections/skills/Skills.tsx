import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "../../../components/skill/Skill";
import {theme} from "../../../styles/Theme";


const skillData = [
    {
        iconId:"codeJs",
        title:"JavaScript"
    },
    {
        iconId:"codeCSS",
        title:"CSS"
    },
    {
        iconId:"codeHtml",
        title:"HTML"
    }, {
        iconId:"codeVs",
        title:"VisualCode"
    }, {
        iconId:"codeReact",
        title:"React"
    }, {
        iconId:"codeGit",
        title:"Git"
    }, {
        iconId:"codeBootstrap",
        title:"Bootstrap",
        vievBox:"-5 -3 100 100"
    }, {
        iconId:"codeGitHub",
        title:"GitHub",
        vievBox:"-10 -5 110 110"
    }, {
        iconId:"codeSass",
        title:"Sass",
        vievBox:"-10 -5 110 110"
    }
]
export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper justify={"center"} align={"center"} wrap={"wrap"} gap={"30px 3%"}>
                {
                    skillData.map((s,index)=>{
                        return <Skill iconId={s.iconId} title={s.title} vievBox={s.vievBox} key={index}/>
                    })
                }
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 50vh;
    height: fit-content;
    width: 90%;
    margin:  auto ;
    display: flex;
    flex-direction: column;
    gap: 70px;

    @media ${theme.media.mobile} {
       gap:30px;
    }
`;


