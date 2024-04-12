import React, {useState, useEffect} from "react";
import {SocialList} from "../../components/social/SocialLink";
import {HeaderMenuDesktop} from "./HeaderMenu/headerMenuDesktop/HeaderMenuDesktop";
import {HeaderMenuMobile} from "./HeaderMenu/headerMenuMobile/HeaderMenuMobile";
import {S} from './Header_Styles';


export const Header: React.FC = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <S.Header>
            { width < breakpoint ?<><S.ButtonMobile isOpen={false}> <span></span> </S.ButtonMobile>
                <S.MobileContainer isOpen={true}> <HeaderMenuMobile/> </S.MobileContainer></>
                :
                <S.Container>
                <HeaderMenuDesktop/>
                <SocialList/>
                </S.Container>
            }
                </S.Header>

);
};

