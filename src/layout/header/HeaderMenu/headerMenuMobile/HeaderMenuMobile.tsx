import React from 'react';
import {SocialList} from "../../../../components/social/SocialLink";
import {S} from './../HeaderMenu_Styles';
import { motion } from "framer-motion"

const variants = {
    open: { opacity: 1, x: 0, zIndex:999},
    closed: { opacity: 0, x: "-100%"}
};
const variantsUl = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};
const variantsLi = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};




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
        <motion.nav
            animate={isOpen ? "open" : "closed"}
            variants={variants}
        >
        <S.MobileMenu isOpen={isOpen}  >
        <S.MobileNav>
            <motion.ul variants={variantsUl}>
                {items.map((item,index)=>{
                    return  (
                    <S.MenuItem  key={index}
                                  variants={variantsLi}
                                  whileTap={{ scale: 0.95 }} ><S.NavLink to={item.href} key={index}>{item.title}</S.NavLink></S.MenuItem>
                    )})}
                    </motion.ul>
                </S.MobileNav>
                    <SocialList/>
                </S.MobileMenu>
        </motion.nav>
    );
};




