import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding: 30px;
  }

  .react-multiple-carousel__arrow--left {
    left: 40px;
    top: 40px;
  }

  .react-multiple-carousel__arrow--right {
    right: 40px;
    top: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: ${(props) => props.theme.purple};
  position: relative;
  text-align: center;

  margin-top: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    left: calc(50% - 28px);
    background-color: ${(props) => props.theme.purple};
  }
`;

export const ContainerItens = styled.div`
  background: url(${(props) => props.$imageUrl});
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 200px;
  border-radius: 20px;
`;

export const CategoryButton = styled(Link)`
  color: ${(props) => props.theme.white};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 22.5px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
