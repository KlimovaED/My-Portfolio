import React from 'react';
import {SocialList} from "../../../../components/social/SocialLink";
import {S} from './../HeaderMenu_Styles';
import * as fs from "fs";
import {fstat, fsync} from "node:fs";

type MenuMobileProps = {
    isOpen:boolean

}

export const HeaderMenuMobile:React.FC<MenuMobileProps> = (props:MenuMobileProps) => {
    return (
        <S.MobileMenu isOpen={props.isOpen}  >
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




