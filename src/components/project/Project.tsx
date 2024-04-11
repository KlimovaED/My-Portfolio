import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";


type ProjectPropsTitle = {
    title: string
    description: string
    src: string
    stack: string
};
export const Project = (props: ProjectPropsTitle) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>
            <ProjectContent>
                <ProjectTitle>{props.title}</ProjectTitle>
                <ProjectText>{props.description}</ProjectText>
                <StackTech>Tech stack :<StackAccent>{props.stack}</StackAccent></StackTech>
                <FlexWrapper direction={"row"} justify={"center"} wrap={"wrap"} gap={"10px 40px"}>
                    <FlexWrapper gap={"2px"} align={"center"} justify={"space-between"}>
                        <Icon iconId={"link"} width={"20"} heigth={"20"} viewBox={"0 0 20 20"}/>
                        <Link href={"#"}>Live Preview</Link>
                    </FlexWrapper>
                    <FlexWrapper gap={"3px"} align={"center"} justify={"space-between"}>
                        <Icon iconId={"codeGitHub"} width={"20"} heigth={"20"} viewBox={"0 0 90 90"} />
                        <Link href={"#"}>View Code</Link>
                    </FlexWrapper>
                </FlexWrapper>
            </ProjectContent>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    max-width: 373px;
    width: 300px;
    min-height: 567px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.secondBg};
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    flex-grow: 1;
`;
const ProjectContent = styled.div`
    width: 80%;
    margin: 5% auto 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

`;
const ProjectTitle = styled.h4`
    ${font({weight: 500, Fmax:28, Fmin:20, color: `${theme.colors.fontColor}`, lineHeight: 1.3})};
    text-align: center;
    letter-spacing: 0;
`;

const ProjectText = styled.p`
    ${font({weight: 300, Fmax:18, Fmin:15, color: `${theme.colors.fontColor}`, lineHeight: 1.5})};
    text-align: left;
`;

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;

`;
const Link = styled.a`
    ${font({weight: 400, Fmax:16, Fmin:15, color: `${theme.colors.fontColor}`, lineHeight: 1.5})};
    letter-spacing: 0;
    text-align: left;
    text-decoration: none;

    &:hover {
        border-bottom: 1px solid ${theme.colors.primaryColor};
        background: linear-gradient(to bottom right, ${theme.colors.secondColor} 0%, ${theme.colors.primaryColor} 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const StackTech = styled.span`
    ${font({weight: 400, Fmax: 16, Fmin: 15, color: `${theme.colors.fontColor}`, lineHeight: 1.5})};
    letter-spacing: 0;
    text-align: left;
`;
const StackAccent = styled.span`
    ${font({weight: 300, Fmax:14, Fmin:13, color: `${theme.colors.fontColor}`, lineHeight: 1.5})};
    letter-spacing: 0;
    text-align: left;
`;





