import {
  type SortOption,
  type Transaction,
  type TransactionCategory,
  TransactionType
} from '../types/transaction.types'

export const CATEGORY_OPTIONS: Array<{
  value: TransactionCategory | 'all'
  label: string
}> = [
  { value: 'all', label: 'Все' },
  { value: 'food', label: 'Еда' },
  { value: 'transport', label: 'Транспорт' },
  { value: 'entertainment', label: 'Развлечения' },
  { value: 'education', label: 'Образование' },
  { value: 'other', label: 'Другое' }
]

export const TYPE_OPTIONS: Array<{
  value: TransactionType | 'all'
  label: string
}> = [
  { value: 'all', label: 'Все' },
  { value: TransactionType.Income, label: 'Доход' },
  { value: TransactionType.Expense, label: 'Расход' }
]

export const SORT_OPTIONS: SortOption[] = ['Дата ↑', 'Дата ↓', 'Сумма']

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    type: TransactionType.Income,
    amount: 12000,
    category: 'education',
    date: new Date('2025-05-16'),
    comment: 'Стипендия'
  },
  {
    type: TransactionType.Expense,
    amount: 220,
    category: 'food',
    date: new Date('2025-05-15'),
    comment: 'Кофе'
  },
  {
    type: TransactionType.Expense,
    amount: 1200,
    category: 'transport',
    date: new Date('2025-05-15'),
    comment: 'Проездной'
  },
  {
    type: TransactionType.Income,
    amount: 20000,
    category: 'other',
    date: new Date('2025-05-14'),
    comment: 'Подработка'
  },
  {
    type: TransactionType.Expense,
    amount: 2430,
    category: 'food',
    date: new Date('2025-05-13'),
    comment: 'Продукты'
  },
  {
    type: TransactionType.Expense,
    amount: 399,
    category: 'entertainment',
    date: new Date('2025-05-12'),
    comment: 'Подписка'
  }
]
