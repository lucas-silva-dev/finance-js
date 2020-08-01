import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);

  }
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1020px;
  height: 480px;
  /* margin: 0 auto; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 40px;
  border-radius: 10px;
  background-color: #f0f0f5;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 1030px) {
    width: 95%;
  }

  @media (max-width: 920px) {
    width: 90%;
    padding: 30px 30px 40px;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 620px) {
    padding: 30px 10px 40px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const StockData = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    display: flex;
    margin-bottom: 20px;
    color: #333;
  }

  h2 {
    display: flex;
    place-items: center;
    text-align: center;

    color: #333;
    font-size: 18px;

    span {
      margin-right: 8px;
    }
  }

  /* @media (max-width: 960px) {
    margin-left: 10px;
  } */

  @media (max-width: 920px) {
    h1 {
      margin-bottom: 5px;
    }
  }
`;
