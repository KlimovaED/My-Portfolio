import React from 'react';
import {S} from './Contatti_Styles';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";


export const Contact:React.FC = () => {
    return (
        <S.Contact id="contact">
            <SectionTitle>For any questions please mail me:</SectionTitle>
            <S.Form>
                <S.Input placeholder={"Your name"}/>
                <S.Input placeholder={"Phone number or email"}/>
                <S.Input placeholder={"Message..."} as={"textarea"}/>
                <Button type={"submit"}>Send message</Button>
            </S.Form>
        </S.Contact>
    );
};

