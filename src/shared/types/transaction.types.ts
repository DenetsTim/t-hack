const TransactionType = {
    Income: 1,
    Expense: -1
} as const;

export type Transaction = {
    type: typeof TransactionType,
    amount: number,
    category: "food" | "transport" | "entertainment" | "education" | "other",
    date: Date,
    comment: string
}
