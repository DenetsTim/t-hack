import {
  type Transaction,
  TransactionType
} from '../../shared/types/transaction.types'

export function downloadArrayToCSV(data: Transaction[]): void {
  if (!data || data.length === 0) return

  const headers = Object.keys(data[0])

  const csvRows = data.map((row: Transaction) =>
    headers
      .map((header: string) => {
        let cell =
          row[header] !== undefined && row[header] !== null ? row[header] : ''
        cell = String(cell).replace(/"/g, '""')
        return `"${cell}"`
      })
      .join(';')
  )

  const csvContent = [headers.join(';'), ...csvRows].join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', 'transactions.csv')
  link.style.visibility = 'hidden'

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  URL.revokeObjectURL(url)
}

export const sampleData: Transaction[] = [
  {
    type: TransactionType.Expense,
    amount: 100,
    category: 'food',
    date: new Date(),
    comment: 'test'
  },
  {
    type: TransactionType.Expense,
    amount: 100,
    category: 'education',
    date: new Date(),
    comment: 'test2'
  },
  {
    type: TransactionType.Expense,
    amount: 100,
    category: 'other',
    date: new Date(),
    comment: 'test3'
  }
]
