import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type SkillPropsType = {
    iconId:string
    title:string
}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill >
            <Icon iconId={props.iconId} width={"100"} heigth={"100"}  />
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SkillTitle= styled.h3`
    color: ${theme.colors.fontColor} ;
    font-size: 1rem;
    font-weight: 700;
    line-height: 26px;
    text-align: center;`;


