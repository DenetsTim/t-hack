import { CATEGORY_OPTIONS } from '@/shared/consts/transactions.data'
import type { Transaction } from '@/shared/types/transaction.types'
import { TransactionType } from '@/shared/types/transaction.types'
import styles from './TransactionRow.module.css'

interface TransactionRowProps {
  transaction: Transaction
}

export function TransactionRow({ transaction: t }: TransactionRowProps) {
  const isIncome = t.type === TransactionType.Income

  const categoryLabel =
    CATEGORY_OPTIONS.find(o => o.value === t.category)?.label ?? t.category

  const dateLabel = t.date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit'
  })

  const displayAmount = isIncome
    ? `+${t.amount.toLocaleString('ru-RU')} ₽`
    : `−${t.amount.toLocaleString('ru-RU')} ₽`

  return (
    <div className={styles.row}>
      <div className={styles.left}>
        <span className={styles.date}>{dateLabel}</span>
        <div>
          <div className={styles.title}>{t.comment}</div>
          <div className={styles.meta}>
            <span className={styles.category}>{categoryLabel}</span>
            <span
              className={`${styles.badge} ${isIncome ? styles.badgeIncome : styles.badgeExpense}`}
            >
              {isIncome ? 'Доход' : 'Расход'}
            </span>
          </div>
        </div>
      </div>

      <span
        className={`${styles.amount} ${isIncome ? styles.amountIncome : styles.amountExpense}`}
      >
        {displayAmount}
      </span>
    </div>
  )
}
