import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Place} from "../../../components/place/Place";
import {S} from './About_Styles'


const placeData = [
    {
        name:"Junior Frontend-developer",
        organization:"Team project",
        location:"Samara",
        dates:"2014-2018",
        conditions:"Full Time"
    }, {
        name:"Junior Frontend-developer",
        organization:"Team project",
        location:"Samara",
        dates:"March 2024",
        conditions:"Full Time"
    }, {
        name:"Junior Frontend-developer",
        organization:"Team project",
        location:"Samara",
        dates:"Nov 2023",
        conditions:"Full Time"
    }
]
export const About:React.FC = () => {
    return (
        <S.About>
            <S.Container>
                <SectionTitle>About Me</SectionTitle>
                <S.Title>Work Experience</S.Title>
                {
                    placeData.map((p,index)=>{
                       return <Place name={p.name}
                               organization={p.organization}
                               location={p.location} dates={p.dates} conditions={p.conditions} key={index}/>
                    })
                }

                <S.Title>Educations</S.Title>
                <Place name={"Bachelor in Economics & Management.Business informatics"}
                       organization={"Samara National Research University named after Academician S.P. Queen"}
                       location={"Samara"} dates={"2014-2018"} conditions={"Full Time"}/>

            </S.Container>
        </S.About>
    );
};


