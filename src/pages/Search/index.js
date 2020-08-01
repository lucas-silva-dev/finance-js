import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';

import Chart from '~/components/Chart';

import { currencyFormat } from '~/utils/format';

import { Container, Content, StockData } from './styles';

function Search() {
  const [stock, setStock] = useState({});

  const { loading } = useSelector(state => state.stock);
  const stockData = useSelector(state => state.stock.stock);

  useEffect(() => {
    setStock(stockData);
  }, [stockData]);

  return (
    <Container loading={loading}>
      {loading ? (
        <FaSpinner size={80} color="#632342" />
      ) : (
        <Content>
          <StockData>
            <h1>{stock.companyName}</h1>

            <h2>
              <span>Stock Price: </span>
              {currencyFormat(stock.latestPrice)}
            </h2>
            <h2>
              <span>Exchange: </span>
              {stock.primaryExchange}
            </h2>
          </StockData>
          <Chart />
        </Content>
      )}
    </Container>
  );
}

export default Search;
