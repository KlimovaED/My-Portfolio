import React, {useState, useEffect} from "react";
import {SocialList} from "../../components/social/SocialLink";
import {HeaderMenuDesktop} from "./HeaderMenu/headerMenuDesktop/HeaderMenuDesktop";
import {HeaderMenuMobile} from "./HeaderMenu/headerMenuMobile/HeaderMenuMobile";
import {S} from './Header_Styles';


export const Header: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <S.Header>
            {width < breakpoint ? <><S.ButtonMobile isOpen={menuIsOpen} onClick={onBurgerBtnClick}> <span></span>
                </S.ButtonMobile>
                    <HeaderMenuMobile isOpen={menuIsOpen} /></>
                :
                <S.Container>
                    <HeaderMenuDesktop/>
                    <SocialList/>
                </S.Container>
            }
        </S.Header>

    );
};

