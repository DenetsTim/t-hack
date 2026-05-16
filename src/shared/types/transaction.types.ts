export const TransactionType = {
    Income: "Income",
    Expense: "Expense"
} as const;

export type TransactionType =
  (typeof TransactionType)[keyof typeof TransactionType]

export type Transaction = {
  type: TransactionType
  amount: number
  category: 'food' | 'transport' | 'entertainment' | 'education' | 'other'
  date: Date
  comment: string
}
