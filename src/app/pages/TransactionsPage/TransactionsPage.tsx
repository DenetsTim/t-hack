import { ArrowDownIcon, ArrowUpIcon, FileIcon } from 'lucide-react'
import styles from './TransactionsPage.module.css'
import { exportToCSV, sampleData } from '@/app/utils/exportToCSV'
import { Link } from 'react-router'
import type { Transaction } from '@/shared/types/transaction.types'

const TransactionsPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.balance}>
        <h1>Баланс</h1>
        <h2>24 850 ₽</h2>
      </div>
      <div className={styles.transactions_wrapper}>
        <div className={styles.incomes}>
          <div className={styles.text_wrapper}>
            <h1>Доходы</h1>
            <h2>32 000 ₽</h2>
          </div>
          <ArrowUpIcon size={32} strokeWidth={1.5} color="var(--income)" />
        </div>
        <div className={styles.expenses}>
          <div className={styles.text_wrapper}>
            <h1>Расходы</h1>
            <h2>7 150 ₽</h2>
          </div>
          <ArrowDownIcon size={32} strokeWidth={1.5} color="var(--expense)" />
        </div>
      </div>
      <div className={styles.buttons}>
        <Link to="/add" type="button" className={styles.add_button}>Добавить</Link>
        <button type="button" className={styles.csv_button} onClick={() => exportToCSV(JSON.parse(localStorage.getItem('transactions') as string) as Transaction[])}><FileIcon />CSV</button>
      </div>
    </div>
  )
}

export default TransactionsPage
