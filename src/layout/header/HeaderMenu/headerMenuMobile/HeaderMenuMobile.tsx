import React from 'react';
import {SocialList} from "../../../../components/social/SocialLink";
import {S} from './../HeaderMenu_Styles';



type ItemPropsType = {
    title: string,
    href: string
};
type MenuProps = {
    items: ItemPropsType[],
    isOpen:boolean
};

export const HeaderMenuMobile:React.FC<MenuProps> = ({ items,isOpen }) => {
    return (
        <S.MobileMenu isOpen={isOpen}  >
        <S.MobileNav>
            <ul>
                {items.map((item,index)=>{
                    return <S.MenuItem key={index}><S.NavLink to={item.href} key={index}>{item.title}</S.NavLink></S.MenuItem>
                })}
            </ul>
        </S.MobileNav>
            <SocialList/>
        </S.MobileMenu>
    );
};




