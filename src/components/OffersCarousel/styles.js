import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
  }
  overflow-x: hidden;

  .react-multi-carousel-list {
    overflow: visible !important;
  }

  .react-multiple-carousel__arrow--left {
    left: 5px;
    top: 35px;
  }

  .react-multiple-carousel__arrow--right {
    right: 45px;
    top: 35px;
  }

  padding-left: 40px;
  padding-bottom: 50px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 6px;
  color: ${(props) => props.theme.gren};
  position: relative;
  text-align: center;
  margin-bottom: 45px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    left: calc(50% - 28px);
    background-color: ${(props) => props.theme.gren};
  }
`;
