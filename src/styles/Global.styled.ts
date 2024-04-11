import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *::-webkit-scrollbar {
      width: 20px;
    }
    *::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom right, ${theme.colors.secondColor} 0%, ${theme.colors.primaryColor} 100%);
        border: 5px solid black;
        border-radius: 20px;
    }
    
    body {
        background: ${theme.colors.background};
        color: ${theme.colors.fontColor} ;
        height: fit-content;
        margin: 0;
        font-family:'Poppins' , -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    a{
        color: ${theme.colors.fontColor};
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
    section{
        padding:100px 0;
        @media ${theme.media.mobile} {
            padding:70px 0;
        }
    }
`;