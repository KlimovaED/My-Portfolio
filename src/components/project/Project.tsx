import React from 'react';
import {S} from './Project_Styles'
import {FlexWrapper} from "../FlexWrapper";
import {Icon} from "../icon/Icon";



type ProjectPropsTitle = {
    title: string
    description: string
    src: string
    stack: string
    linkGitHub:string
    link:string
};
export const Project = (props: ProjectPropsTitle) => {
    return (
        <S.Project>
            <S.Image src={props.src} alt=""/>
            <S.Content>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.description}</S.Text>
                <S.StackTech>Tech stack :<S.StackAccent>{props.stack}</S.StackAccent></S.StackTech>
                <FlexWrapper direction={"row"} justify={"center"} wrap={"wrap"} gap={"10px 40px"}>
                    <FlexWrapper gap={"2px"} align={"center"} justify={"space-between"}>
                        <Icon iconId={"link"} width={"20"} heigth={"20"} viewBox={"0 0 20 20"}/>
                        <S.Link href={props.link}>Live Preview</S.Link>
                    </FlexWrapper>
                    <FlexWrapper gap={"3px"} align={"center"} justify={"space-between"}>
                        <Icon iconId={"codeGitHub"} width={"20"} heigth={"20"} viewBox={"0 0 90 90"} />
                        <S.Link href={props.linkGitHub}>View Code</S.Link>
                    </FlexWrapper>
                </FlexWrapper>
            </S.Content>
        </S.Project>
    );
};






