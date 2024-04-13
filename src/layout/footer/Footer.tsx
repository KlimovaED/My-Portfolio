import React from 'react';
import {SocialList} from "../../components/social/SocialLink";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Nav} from "../../components/navigation/Nav";
import {S} from './Footer_Styles'


export const Footer = () => {
    return (
        <S.Footer>
            <S.Content>
            <S.Name>Klimova <S.NameColor>Katerina</S.NameColor></S.Name>
            <FlexWrapper gap={"5%"}>
                <S.Number>+ 39-333-923-3458</S.Number>
                <S.Email>klimovaed@icloud.com</S.Email>
            </FlexWrapper>
            <SocialList/>
            </S.Content>
            <S.Line></S.Line>
            <FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
                <Nav/>
                <S.Text>With <S.NameColor> Love </S.NameColor> & <S.NameColor>Coffee</S.NameColor></S.Text>
            </FlexWrapper>
        </S.Footer>
    );
};







