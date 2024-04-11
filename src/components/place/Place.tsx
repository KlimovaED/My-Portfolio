import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../FlexWrapper";
import {font} from "../../styles/Common";

type PlacePropsType = {
    name: string
    organization: string
    location: string
    dates: string
    conditions: string
}

export const Place = (props: PlacePropsType) => {
    return (
        <StyledPlace>
            <Name>{props.name}</Name>
            <Conditions>{props.conditions}</Conditions>
            <FlexWrapper justify={"flex-start"} align={"center"} gap={"2px"}>
                <Icon iconId={"position"} width={"30px"} heigth={"30px"} viewBox={"-5 -5 20 20"}/>
                <Organization>{props.organization}</Organization>
            </FlexWrapper>
            <FlexWrapper justify={"flex-start"} align={"center"} gap={"2px"}>
                <Icon iconId={"locations"} width={"30px"} heigth={"30px"} viewBox={"-5 -4 20 20"} />
                <Location>{props.location}</Location>
            </FlexWrapper>
            <FlexWrapper justify={"flex-start"} align={"center"} gap={"5px"}>
                <Icon iconId={"dates"} width={"30px"} heigth={"30px"} viewBox={"-5 -4 20 20"} />
                <Dates>{props.dates}</Dates>
            </FlexWrapper>
            <hr/>
        </StyledPlace>
    );
};

const StyledPlace = styled.div`
    display: flex;
    align-items: center;
    gap:15px 0;
    flex-wrap: wrap;
    justify-content: space-between;
    hr{
        border-color: ${theme.colors.fontColor};
        opacity: 0.7;
        width: 100%;
    }
`;

const Name = styled.h4`
    ${font({weight: 400, Fmax: 20,Fmin:17,color: `${theme.colors.fontColor}`})};
    width: 70%;
   
`;
const Conditions = styled.span`
    min-width: 110px;
    width: 10%;
    font-size: 0.8rem;
    text-align: center;
    padding: 5px 10px;
    background: ${theme.colors.primaryColor};
    border-radius: 20px;
    @media ${theme.media.mobile} {
        min-width: 90px;
    }
`;
const Organization = styled.span`
    ${font({weight: 500, Fmax: 12,Fmin:11,color: `${theme.colors.fontColor}`})};
    opacity: 0.7;
    line-height: 28px;
    text-align: left;
    @media ${theme.media.mobile} {
        line-height:15px;
    }
`;
const Location = styled.span`
    ${font({weight: 500, Fmax: 12,Fmin:11,color: `${theme.colors.fontColor}`})};
    opacity: 0.7;
    line-height: 28px;
    text-align: left;
`;
const Dates = styled.span`
    ${font({weight: 500, Fmax: 12,Fmin:11,color: `${theme.colors.fontColor}`})};
    opacity: 0.7;
    line-height: 28px;
    text-align: left;
`;
