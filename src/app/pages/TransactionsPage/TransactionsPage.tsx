import { ArrowDownIcon, ArrowUpIcon, FileIcon } from 'lucide-react'
import { useCallback } from 'react'
import { Link } from 'react-router'
import { exportToCSV, sampleData } from '@/app/utils/exportToCSV'
import FilterBar from '@/components/FilterBar/FilterBar'
import Header from '@/components/Header/Header'
import { useTransactionFilters } from '@/shared/hooks/useTransactionFilters'
import styles from './TransactionsPage.module.css'

const TransactionsPage = () => {
  const {
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
    hasActiveFilters
  } = useTransactionFilters()

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') closeDropdowns()
    },
    [closeDropdowns]
  )

  const stopProp = useCallback((e: React.SyntheticEvent) => {
    e.stopPropagation()
  }, [])

  return (
    <div
      role="presentation"
      className={styles.wrapper}
      onClick={closeDropdowns}
      onKeyDown={handleKeyDown}
    >
      <Header />
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
        <Link to="/add" type="button" className={styles.add_button}>
          Добавить
        </Link>
        <button
          type="button"
          className={styles.csv_button}
          onClick={e => {
            e.stopPropagation()
            exportToCSV(sampleData)
          }}
        >
          <FileIcon size={24} strokeWidth={1.5} />
          CSV
        </button>
      </div>

      <div role="presentation" onClick={stopProp} onKeyDown={stopProp}>
        <FilterBar
          search={search}
          category={category}
          type={type}
          sort={sort}
          openDropdown={openDropdown}
          hasActiveFilters={hasActiveFilters}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onTypeChange={setType}
          onSortChange={setSort}
          onToggleDropdown={toggleDropdown}
          onSelectDropdown={selectDropdown}
        />
      </div>
    </div>
  )
}

export default TransactionsPage
