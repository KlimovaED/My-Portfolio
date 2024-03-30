import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {Icon} from "../icon/Icon";


type ProgectPropsTitle = {
    title: string
    description: string
    src: string
};
export const Progect = (props: ProgectPropsTitle) => {
    return (
        <StyledProgect>
            <Image src={props.src} alt=""/>
            <ProgectContent>
            <ProgectTitle>{props.title}</ProgectTitle>
            <ProgectText>{props.description}</ProgectText>
            <FlexWrapper direction={"row"} justify={"center"} wrap={"wrap"} gap={"10px 40px"}>
                <FlexWrapper gap={"2px"} align={"center"} justify={"space-between"}>
                    <Icon iconId={"link"} width={"25"} heigth={"25"} viewBox={"0 0 25 25"}/>
                    <Link href={"#"}>Live Preview</Link>
                </FlexWrapper>
                <FlexWrapper gap={"2px"} align={"center"}>
                    <Icon iconId={"codeGitHub"} width={"25"} heigth={"25"} />
                    <Link href={"#"}>View Code</Link>
                </FlexWrapper>
            </FlexWrapper>
            </ProgectContent>
        </StyledProgect>
    );
};

const StyledProgect = styled.div`
    width: 30%;
    min-width: 260px;
    min-height: 567px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgb(54, 54, 54);
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;
`;
const ProgectContent = styled.div`
    width: 80%;
    margin:5% auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap:10px;
   
`;
const ProgectTitle = styled.h4`
    color: rgb(204, 204, 204);
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 26px;
    text-align: center;
    margin: 0;
`;

const ProgectText = styled.p`
    color: rgb(204, 204, 204);
    font-family: "Poppins", sans-serif;
    font-size: 1.1rem;
    font-weight:lighter;
    line-height: 26px;
    text-align: left;
`;

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;

`;
const Link = styled.a`
    color: rgb(255, 255, 255);
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0;
    text-align: left;
    text-decoration: none;
`;





