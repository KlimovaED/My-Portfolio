import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "../../../components/skill/Skill";
import {theme} from "../../../styles/Theme";
import AliceCarousel from 'react-alice-carousel';


const skillData = [
    {
        iconId: "nodeJS",
        title: "NodeJs",
        vievBox:"-3 -3 140 140"
    },
    {
        iconId: "StoryBook",
        title: "StoryBook",
        vievBox:"-3 -3 140 140"
    },
    {
        iconId: "codeRedux",
        title:"Redux",
        vievBox:"-5 -5 290 290"
    },
    {
        iconId: "codeTS",
        title: "TypeScript",
        vievBox:"-10 -20 290 290"
    },
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
        /*   <StyledSkills id="skills">
                 <SectionTitle>My Skills</SectionTitle>
                 <FlexWrapper justify={"center"} align={"center"} wrap={"wrap"} gap={"30px 3%"}>
                     {
                         skillData.map((s,index)=>{
                             return <Skill iconId={s.iconId} title={s.title} vievBox={s.vievBox} key={index}/>
                         })
                     }
                 </FlexWrapper>
             </StyledSkills>*/
        <StyledSkills id="skills">
            <SectionTitle>My Skills</SectionTitle>
            <AliceCarousel
                mouseTracking
                items={skillData.map((skill,index) => <Skill iconId={skill.iconId} title={skill.title} vievBox={skill.vievBox} key={index}/>)}
                responsive={{
                    0: { items: 1 },
                    600: { items: 5 },
                    1024: { items: 9 },
                }}
                controlsStrategy="responsive"
                autoPlay
                autoPlayInterval={3000}
                infinite
            />
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


