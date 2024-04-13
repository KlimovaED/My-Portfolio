import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../../components/FlexWrapper";

const Footer= styled.footer`
    width: 80%;
    min-height: 15vh;
    margin: auto;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap:15px;

    @media ${theme.media.mobile} {
       justify-content: center;
        align-items: center;
        width: 90%;
        padding-bottom: 20px;
    }
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap:10px 0;
    justify-content: space-between;
    @media ${theme.media.mobile} {
       flex-direction:column;
        justify-content: center;
        gap: 20px 0 ;
        ${FlexWrapper}{
            flex-direction:column;
            align-items: center;
        }
    }
`;
const Name = styled.h5`
    font-size: 1.2rem;
    color: ${theme.colors.fontColor} ;
    @media ${theme.media.mobile} {
        text-align: center;
        width: 100%;
    }
`;
const NameColor = styled.span`
    background: linear-gradient(to bottom right, #07ade5 0%, #bf3fa2 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const Number = styled.span`
    color: ${theme.colors.fontColor} ;
    width: 180px;
    font-size: 1rem;
    font-weight:lighter;
    line-height: 26px;
`;

const Email=styled.span`
    color: ${theme.colors.fontColor} ;
    font-size: 1rem;
    font-weight:lighter;
    line-height: 26px;
`;

const Line = styled.hr`
   width: 100%;
    border-color: rgba(217, 217, 217, 0.5);
    border-width: 0,5px;
`;

const Text = styled.span`
    color: ${theme.colors.fontColor} ;
    font-size: 1rem;
    font-weight:lighter;
    line-height: 26px;
`;

export const S = {
   Text,Line,Email,Number,NameColor,Name,Content,Footer
}