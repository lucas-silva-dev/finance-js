import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Chart from '~/components/Chart';

import { currencyFormat } from '~/utils/format';

import { Container, Content } from './styles';

function Search() {
  const [stock, setStock] = useState({});

  const stockData = useSelector(state => state.stock.stock);

  useEffect(() => {
    setStock(stockData);
  }, [stockData]);

  return (
    <Container>
      <Content>
        <section>
          <h1>{stock.companyName}</h1>

          <h2>
            <span>Stock Price: </span>
            {currencyFormat(stock.latestPrice)}
          </h2>
          <h2>
            <span>Exchange: </span>
            {stock.primaryExchange}
          </h2>
        </section>
        <Chart />
      </Content>
    </Container>
  );
}

export default Search;
