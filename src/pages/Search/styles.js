import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;

  place-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1020px;
  height: 460px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 40px;
  border-radius: 10px;
  background-color: #f0f0f5;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    h1 {
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
  }
`;
