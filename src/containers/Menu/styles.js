import styled from 'styled-components';
import BannerHmburger from '../../assets/banner-menu.svg';
import Background from '../../assets/background.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;  
    background: linear-gradient(
        rgba(255,255,255, 0.6),
        rgba(255,255,255, 0.6)
    ),
    url('${Background}');
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
    width: 100%;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

    background: url('${BannerHmburger}');
    background-color: #1f1f1f;
    background-position: center;
    background-size: cover;

    h1 {
        font-family: "Road Rage", serif;
        font-size: 80px;
        line-height: 65px;
        color: #ffff;
        position: absolute;

        right: 20%;
        top: 10%;
        
        span {
            display: block;
            color: #ffff;
            font-size: 16px;
        }
    }
`;

export const Button = styled.button`
    width: 100px;
    height: 50px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    margin: 30px 0 10px 0;
    border: 0;
    border-radius: 25px;
    background-color:  ${(props) => props.theme.purple};
    font-family: "Road Rage", serif;
    font-size: 30px;
    color: #FFF;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #6f357c;
    }

    &:active {
        opacity: 0.9;
    }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  background: none;
  padding: 10px;
  color: ${props => props.$isActiveCategory ? (props) => props.theme.purple : '#696969'};
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 5px;
  line-height: 20px;
  
  border: none;
  border-bottom: ${props => props.$isActiveCategory && `3px solid   ${(props) => props.theme.purple}`};
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto;
`;