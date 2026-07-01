import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Background from '../../assets/bacground.svg';
import BannerHamburguer from '../../assets/banner-hamburguer.svg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.secondWhite};
  position: relative;
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('${Background}');
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #${(props) => props.theme.purple};
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${(props) => props.theme.purple};
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    background: #${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    transform: scale(1.05);
  }

  &::before {
    content: '←';
    font-size: 20px;
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
  width: 100%;
  position: relative;
  background: url('${BannerHamburguer}') no-repeat;
  background-position: center;
  background-color: ${(props) => props.theme.mainBlack};
  background-size: cover;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 65px;
    color: ${(props) => props.theme.white};
    position: absolute;
    right: 18%;
    top: 30%;
  }

  span {
    display: block;
    color: ${(props) => props.theme.white};
    font-size: 20px;
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) =>
    props.$isActiveCategory ? (props) => props.theme.purple : '#dea9ff'};
  font-size: 24px;
  padding-bottom: 5px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) =>
    props.$isActiveCategory && `3px solid ${(props) => props.theme.purple} `};
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;
`;
