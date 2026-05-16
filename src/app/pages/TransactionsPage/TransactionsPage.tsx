import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'
import styles from './TransactionsPage.module.css'

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
      <button type="button">Добавить транзакцию</button>
    </div>
  )
}

export default TransactionsPage
