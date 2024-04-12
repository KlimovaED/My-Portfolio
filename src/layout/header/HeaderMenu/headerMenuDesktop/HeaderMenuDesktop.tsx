import React from 'react';
import styled from "styled-components";
import {S} from './../HeaderMenu_Styles';

export const HeaderMenuDesktop: React.FC= () => {
    return (
        <S.DesktopNav>
            <ul>
                <S.MenuItem><S.Link href="">Home</S.Link></S.MenuItem>
                <S.MenuItem><S.Link href="">About</S.Link></S.MenuItem>
                <S.MenuItem><S.Link href="">Skills</S.Link></S.MenuItem>
                <S.MenuItem><S.Link href="">Projects</S.Link></S.MenuItem>
                <S.MenuItem><S.Link href="">Contact</S.Link></S.MenuItem>
            </ul>
        </S.DesktopNav>
    );
};




