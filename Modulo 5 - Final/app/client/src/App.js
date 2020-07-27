import React, { useState, useEffect } from 'react';
import api from './services/api';

import List from './Components/List';
import Header from './Components/Header';

export default function App() {
  const [transactions, setTransactions] = useState([]);
  // const [inputError, setInputError] = useState('');
  // const [newTransaction, setNewTransaction] = useState('');

  // () => {
  //   const storagedTransactions = api.get(`/api/transaction?period=${year}-${month}`)
  //   if (storagedTransactions) {
  //     return JSON.stringify(storagedTransactions);
  //   } else {
  //     return [];
  //   }
  // }, []

  let year = '2021';
  let month = '12';

  useEffect(() => {
    api.get(`/api/transaction?period=${year}-${month}`, JSON.stringify(transactions))
      .then(response => {
        setTransactions(response.data)
      }
      )
  }, [month, transactions, year]);

  // async function handleShowTransaction(event) {
  //   console.log(event)
  //   event.preventDefault();

  //   if (!newTransaction) {
  //     setInputError('Digite o dado correto.');
  //     return;
  //   }

  //   try {
  //     const response = await api.get(`/api/transaction?period=${year}-${month}`)
  //     const transaction = response.data;

  //     setTransactions([...transactions, transaction]);
  //     setNewTransaction('');
  //     setInputError('');
  //   } catch {
  //     setInputError('Erro na busca por essa transação.')
  //   }
  // }

  const number = transactions.length;

  const income = transactions
    .filter(trx => trx.type === '+')
    .reduce((a, b) => a + b.value, 0);

  const outcome = transactions
    .filter(trx => trx.type === '-')
    .reduce((a, b) => a + b.value, 0);

  return (
    <>
      <Header
        number={number}
        income={income}
        outcome={outcome}
        balance={income - outcome}
      />

      <ul>
        {transactions.map(trx => (
          <List
            key={trx._id}
            category={trx.category}
            value={trx.value}
            description={trx.description}
          />
        ))}
      </ul>

    </>
  );
}
