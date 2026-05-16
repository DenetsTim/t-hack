import { SearchIcon } from 'lucide-react'
import styles from './FilterTable.module.css'

const FilterTable = () => {
  return (
    <div>
      <input
        className={styles.search}
        type="search"
        placeholder="Поиск по описанию"
      />
    </div>
  )
}

export default FilterTable
