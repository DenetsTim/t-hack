export const TransactionType = {
<<<<<<< HEAD
    Income: "Income",
    Expense: "Expense"
} as const;
=======
  Income: 1,
  Expense: -1
} as const
>>>>>>> 77237499ed85ca5e0d9b71a14a28f59fd73a1680

export type TransactionType =
  (typeof TransactionType)[keyof typeof TransactionType]

export type Transaction = {
  type: TransactionType
  amount: number
  category: 'food' | 'transport' | 'entertainment' | 'education' | 'other'
  date: Date
  comment: string
}
