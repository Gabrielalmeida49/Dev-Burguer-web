import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;

  * {
    color: #484848;
    font-weight: 500;
  }

  .container-top {
    display: grid;
    grid-gap: 10px 20%;

    grid-template-areas:
      'tittle tittle'
      'items items-price'
      'delevery-tax delevery-tax-price';

    .tittle {
      grid-area: tittle;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
      background-color: #484848;
      color: ${(props) => props.theme.white};
      width: 100%;
      padding: 15px;
      text-align: center;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    .items {
      grid-area: items;
      padding-left: 20px;
    }

    .items-price {
      grid-area: items-price;
      padding-right: 20px;
    }

    .delevery-tax {
      grid-area: delevery-tax;
      padding-left: 20px;
    }

    .delevery-tax-price {
      grid-area: delevery-tax-price;
      padding-right: 20px;
    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    font-size: 20px;
    font-weight: 700;
    margin-top: 24px;
    padding: 24px;

    * {
      color: #484848;
      font-weight: 700;
    }
  }
`;
