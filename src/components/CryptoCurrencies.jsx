import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const CryptoCurrencies = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const { cryptos, setCryptos} = useState(cryptosList?.data?.coins);

  console.log(cryptos);
  return (
    <div>
      <h1>hdddh</h1>
    </div>
  )
}

export default CryptoCurrencies;
