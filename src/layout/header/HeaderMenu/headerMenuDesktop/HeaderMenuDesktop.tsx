import React from 'react';
import {S} from './../HeaderMenu_Styles';



type ItemPropsType = {
        title: string,
        href: string
};
type MenuProps = {
    items: ItemPropsType[];
};


export const HeaderMenuDesktop = ({ items }: MenuProps) => {
    return (
        <S.DesktopNav>
            <ul>
                {items.map((item,index)=>{
                    return <S.MenuItem key={index}><S.NavLink to={item.href} smooth={true} spy={true} key={index}>{item.title}</S.NavLink></S.MenuItem>
                })}
            </ul>
        </S.DesktopNav>
    );
};



