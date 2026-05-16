import { useEffect, useState } from 'react';
import TransactionsPage from './app/pages/TransactionsPage/TransactionsPage'
import Header from './components/Header/Header'
import type { Transaction } from './shared/types/transaction.types';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions') as string) as Transaction[] | null

    if (savedTransactions) {
      return savedTransactions
    }

    return [];
  })

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  return (
    <>
      <Header />
      <TransactionsPage />
    </>
  )
}

export default App
