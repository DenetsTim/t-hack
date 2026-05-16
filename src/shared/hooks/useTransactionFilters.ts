import { useMemo, useState } from 'react'
import { MOCK_TRANSACTIONS } from '../consts/transactions.data'
import type {
  CategoryFilter,
  FilterState,
  SortOption,
  Transaction,
  TypeFilter
} from '../types/transaction.types'

interface UseTransactionFiltersReturn extends FilterState {
  filtered: Transaction[]
  openDropdown: string | null
  hasActiveFilters: boolean
  setSearch: (v: string) => void
  setCategory: (v: CategoryFilter) => void
  setType: (v: TypeFilter) => void
  setSort: (v: SortOption) => void
  toggleDropdown: (name: string) => void
  closeDropdowns: () => void
  selectDropdown: (setter: (v: never) => void, value: never) => void
}

export function useTransactionFilters(
  transactions: Transaction[] = MOCK_TRANSACTIONS
): UseTransactionFiltersReturn {
  const [search, setSearch] = useState<string>('')
  const [category, setCategory] = useState<CategoryFilter>('all')
  const [type, setType] = useState<TypeFilter>('all')
  const [sort, setSort] = useState<SortOption>('Дата ↑')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const filtered = useMemo<Transaction[]>(() => {
    let list = [...transactions]

    if (search.trim()) {
      list = list.filter(t =>
        t.comment.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (category !== 'all') {
      list = list.filter(t => t.category === category)
    }

    if (type !== 'all') {
      list = list.filter(t => t.type === type)
    }

    list.sort((a, b) => {
      if (sort === 'Дата ↑') return b.date.getTime() - a.date.getTime()
      if (sort === 'Дата ↓') return a.date.getTime() - b.date.getTime()
      if (sort === 'Сумма') return b.amount - a.amount
      return 0
    })

    return list
  }, [transactions, search, category, type, sort])

  const toggleDropdown = (name: string): void =>
    setOpenDropdown(prev => (prev === name ? null : name))

  const closeDropdowns = (): void => setOpenDropdown(null)

  const selectDropdown = (setter: (v: never) => void, value: never): void => {
    setter(value)
    setOpenDropdown(null)
  }

  const hasActiveFilters =
    category !== 'all' || type !== 'all' || !!search.trim()

  return {
    search,
    setSearch,
    category,
    setCategory,
    type,
    setType,
    sort,
    setSort,
    openDropdown,
    toggleDropdown,
    closeDropdowns,
    selectDropdown,
    filtered,
    hasActiveFilters
  }
}
