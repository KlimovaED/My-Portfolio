import React from 'react';
import {SocialList} from "../../../../components/social/SocialLink";
import {S} from './../HeaderMenu_Styles';



export const HeaderMenuMobile:React.FC = () => {
    return (
        <S.MobileMenu isOpen={false}>
        <S.MobileNav>
            <ul>
                <S.MenuItem><S.Link href="">Home</S.Link></S.MenuItem>
                <S.MenuItem><S.Link href="">About</S.Link></S.MenuItem>
                <S.MenuItem><S.Link href="">Skills</S.Link></S.MenuItem>
                <S.MenuItem><S.Link href="">Projects</S.Link></S.MenuItem>
                <S.MenuItem><S.Link href="">Contact</S.Link></S.MenuItem>
            </ul>
        </S.MobileNav>
            <SocialList/>
        </S.MobileMenu>
    );
};




