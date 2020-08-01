import styled, { keyframes, css } from 'styled-components';
import { ResponsiveContainer } from 'recharts';

export const TooltipContainer = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  background: #632342aa;

  p {
    display: flex;
    flex: 1;
    justify-content: space-between;

    font-size: 14px;
    line-height: 21px;
    color: #eee;
  }
`;

export const ChartContainer = styled.section`
  width: 75%;

  height: 320px;

  display: flex;
  flex-direction: column;
  flex: 1;

  margin-left: 10px;

  @media (max-width: 960px) {
    margin-left: 0px;
  }

  @media (max-width: 920px) {
    width: 100%;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #cfcfcf;
  }
`;

export const PeriodContent = styled.div`
  margin-bottom: 15px;
  margin-right: 10px;
  display: flex;
  align-self: flex-end;

  li {
    list-style: none;

    & + li {
      margin-left: 5px;
    }

    button {
      font-size: 14px;
      padding: 4px 10px;
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);

  }
`;

export const ResponsiveChart = styled(ResponsiveContainer)`
  width: 100%;
  height: 100%;
  display: flex;
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
