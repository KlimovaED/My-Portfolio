import React, {ElementRef, useRef} from 'react';
import {S} from './Contatti_Styles';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import emailjs from '@emailjs/browser';


export const Contact:React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e:any) => {
        e.preventDefault();

        if(!form.current) return

        emailjs
            .sendForm('service_2calrgo', 'template_hft9ts7', form.current, {
                publicKey: 'UOx_7o10rBbW5xQSC',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert("Вы успешно отправили сообщение!")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };
    return (
        <S.Contact id="contact">
            <SectionTitle>For any questions please mail me:</SectionTitle>
            <S.Form ref={form} onSubmit={sendEmail}>
                <S.Input name={'user_name'} required type="text" placeholder={"Your name"}/>
                <S.Input name={'user_email'} required  type="email" placeholder={"Your email"}/>
                <S.Input name={'message'} required  placeholder={"Message..."} as={"textarea"} style={{paddingTop:"10px"}}/>
                <Button type={"submit"}>Send message</Button>
            </S.Form>
        </S.Contact>
    );
};

