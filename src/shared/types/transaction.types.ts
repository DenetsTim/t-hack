// ─── TransactionType (const enum pattern) ────────────────────────────────────

export const TransactionType = {
  Income: 'Income',
  Expense: 'Expense'
} as const

export type TransactionType =
  (typeof TransactionType)[keyof typeof TransactionType]

// ─── Category ─────────────────────────────────────────────────────────────────

export type TransactionCategory =
  | 'food'
  | 'transport'
  | 'entertainment'
  | 'education'
  | 'other'

// ─── Transaction ──────────────────────────────────────────────────────────────

export type Transaction = {
  type: TransactionType
  amount: number
  category: TransactionCategory
  date: Date
  comment: string
}

// ─── Filter / Sort ────────────────────────────────────────────────────────────

export type SortOption = 'Дата ↑' | 'Дата ↓' | 'Сумма'

export type CategoryFilter = TransactionCategory | 'all'
export type TypeFilter = TransactionType | 'all'

export interface FilterState {
  search: string
  category: CategoryFilter
  type: TypeFilter
  sort: SortOption
}
