/* eslint-disable no-console */
import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiDollarSign } from 'react-icons/fi';

import Button from '../Button';
import Input from '../Input';

import { stockRequest } from '~/store/modules/stock/actions';
import { chartRequest } from '~/store/modules/chart/actions';

import { Container } from './styles';

function Header() {
  const [symbol, setSymbol] = useState('');

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(chartRequest(symbol));
    dispatch(stockRequest(symbol));

    setSymbol('');
  }

  return (
    <Container>
      <Link to="/">
        <FiDollarSign />
      </Link>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter a symbol"
          name="symbol"
          required
          value={symbol}
          onChange={event => setSymbol(event.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>
    </Container>
  );
}

export default memo(Header);
