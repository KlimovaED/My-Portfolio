import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from './Place_Slyles'
import {FlexWrapper} from "../FlexWrapper";


type PlacePropsType = {
    name: string
    organization: string
    location: string
    dates: string
    conditions: string
}

export const Place:React.FC<PlacePropsType> = (props: PlacePropsType) => {
    return (
        <S.Place>
            <S.Name>{props.name}</S.Name>
            <S.Conditions>{props.conditions}</S.Conditions>
            <FlexWrapper justify={"flex-start"} align={"center"} gap={"2px"}>
                <Icon iconId={"position"} width={"30px"} heigth={"30px"} viewBox={"-5 -5 20 20"}/>
                <S.Organization>{props.organization}</S.Organization>
            </FlexWrapper>
            <FlexWrapper justify={"flex-start"} align={"center"} gap={"2px"}>
                <Icon iconId={"locations"} width={"30px"} heigth={"30px"} viewBox={"-5 -4 20 20"} />
                <S.Location>{props.location}</S.Location>
            </FlexWrapper>
            <FlexWrapper justify={"flex-start"} align={"center"} gap={"5px"}>
                <Icon iconId={"dates"} width={"30px"} heigth={"30px"} viewBox={"-5 -4 20 20"} />
                <S.Dates>{props.dates}</S.Dates>
            </FlexWrapper>
            <hr/>
        </S.Place>
    );
};

