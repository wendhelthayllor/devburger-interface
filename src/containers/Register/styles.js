import styled from "styled-components";
import BackgroundLogin from '../../assets/background.svg'

import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div `
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div `
    background: linear-gradient(to right, #1F2020, #3C3C3C);
    background-position: center;
    background-size: cover;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 80%;
    }
`;

export const RightContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;
    
    background: url('${BackgroundLogin}');
    background-color: #3C3C3C;

    p {
        color:#FFF;
        font-size:18px;
        font-weight: 800;

        a {
            text-decoration: underline;
        }
    }
    `;

export const Title = styled.h2 `
    font-family: "Road Rage", serif;
    font-size: 40px;
    font-weight: 400;
    color: #9758a6;
`;

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 5px;
    width:100%;

    input{
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
    }

    label{
        font-size:18px;
        font-weight: 600;
        color: #FFF;
    }

    p {
        font-size: 14px;
        font-weight: 600;
        line-height:80%;
        color: #cf3057;
        height: 10px;
    }

`;

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #fff;
`;