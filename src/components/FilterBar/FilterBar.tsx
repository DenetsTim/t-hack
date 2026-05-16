import type { FC } from 'react'
import {
  CATEGORY_OPTIONS,
  SORT_OPTIONS,
  TYPE_OPTIONS
} from '@/shared/consts/transactions.data'
import type {
  CategoryFilter,
  SortOption,
  TypeFilter
} from '@/shared/types/transaction.types'
import Dropdown from '../Dropdown/Dropdown'
import { FilterPill } from '../FilterPill/FilterPill'
import { SearchBar } from '../SearchBar/SearchBar'
import styles from './FilterBar.module.css'

interface FilterBarProps {
  search: string
  category: CategoryFilter
  type: TypeFilter
  sort: SortOption
  openDropdown: string | null
  hasActiveFilters: boolean
  onSearchChange: (v: string) => void
  onCategoryChange: (v: CategoryFilter) => void
  onTypeChange: (v: TypeFilter) => void
  onSortChange: (v: SortOption) => void
  onToggleDropdown: (name: string) => void
  onSelectDropdown: (setter: (v: never) => void, value: never) => void
}

const FilterBar: FC<FilterBarProps> = ({
  search,
  category,
  type,
  sort,
  openDropdown,
  hasActiveFilters,
  onSearchChange,
  onCategoryChange,
  onTypeChange,
  onSortChange,
  onToggleDropdown,
  onSelectDropdown
}) => {
  const categoryLabel = CATEGORY_OPTIONS.find(o => o.value === category)?.label
  const typeLabel = TYPE_OPTIONS.find(o => o.value === type)?.label

  const sortOptions = SORT_OPTIONS.map(s => ({ value: s, label: s }))

  return (
    <div className={styles.wrap}>
      <SearchBar value={search} onChange={onSearchChange} />

      <div className={styles.row}>
        <Dropdown
          label="Категория"
          value={category}
          options={CATEGORY_OPTIONS}
          open={openDropdown === 'category'}
          onToggle={() => onToggleDropdown('category')}
          onSelect={v =>
            onSelectDropdown(onCategoryChange as (v: never) => void, v as never)
          }
          active={category !== 'all'}
        />
        <Dropdown
          label="Тип"
          value={type}
          options={TYPE_OPTIONS}
          open={openDropdown === 'type'}
          onToggle={() => onToggleDropdown('type')}
          onSelect={v =>
            onSelectDropdown(onTypeChange as (v: never) => void, v as never)
          }
          active={type !== 'all'}
        />
        <Dropdown
          label="Сортировка"
          value={sort}
          options={sortOptions}
          open={openDropdown === 'sort'}
          onToggle={() => onToggleDropdown('sort')}
          onSelect={v =>
            onSelectDropdown(onSortChange as (v: never) => void, v as never)
          }
          active
          noReset
        />
      </div>

      {hasActiveFilters && (
        <div className={styles.pills}>
          {search && (
            <FilterPill
              label={`"${search}"`}
              onRemove={() => onSearchChange('')}
            />
          )}
          {category !== 'all' && categoryLabel && (
            <FilterPill
              label={categoryLabel}
              onRemove={() => onCategoryChange('all')}
            />
          )}
          {type !== 'all' && typeLabel && (
            <FilterPill
              label={typeLabel}
              onRemove={() => onTypeChange('all')}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default FilterBar
