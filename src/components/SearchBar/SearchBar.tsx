import { SearchIcon } from 'lucide-react'
import styles from './SearchBar.module.css'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className={styles.wrap}>
      <SearchIcon size={16} strokeWidth={1.5} />
      <input
        className={styles.input}
        placeholder="Поиск по описанию"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {value && (
        <button
          type="button"
          className={styles.clear}
          onClick={() => onChange('')}
          aria-label="Очистить поиск"
        >
          ✕
        </button>
      )}
    </div>
  )
}
