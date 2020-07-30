import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  background: #ffffff;
  background: #f0f0f5;
  border-bottom: 1px solid #efefef;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;

  a {
    margin-left: 20px;
    height: 60px;

    img {
      height: 100%;
      width: 40px;
    }
  }

  form {
    width: 100%;
    max-width: 280px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;
