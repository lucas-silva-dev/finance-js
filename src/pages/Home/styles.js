import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    display: flex;
    width: 140px;
    height: 140px;
    margin-right: 40px;
  }

  div {
    display: flex;
    flex-direction: column;

    h1,
    h2,
    p {
      margin: 5px 0;
      color: #333;
    }
  }
`;
