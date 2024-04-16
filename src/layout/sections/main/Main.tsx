import React from 'react';
import photo from '../../../assets/images/logo.jpg';
import figura from '../../../assets/images/Abstract.svg';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from './Main_Styles';



export const Main:React.FC = () => {
    return (
        <S.Main id="home">
            <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"} gap={"3%"}>
            <FlexWrapper direction={"column"}>
                <S.Text> Hi 👋, </S.Text>
                <S.Text> My name is</S.Text>
                <S.Name>Katerina Klimova</S.Name>
                <S.Title>A Web Developer</S.Title>
                </FlexWrapper>
                <FlexWrapper position={"relative"} align={"center"} justify={"center"}>
                    <S.Photo src={photo} alt="img"/>
                    <S.Figura src={figura} alt=""/>
                </FlexWrapper>
            </FlexWrapper>
        </S.Main>
    );
};


