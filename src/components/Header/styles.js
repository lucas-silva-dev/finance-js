import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  a {
    margin-left: 20px;
    height: 60px;

    svg {
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
