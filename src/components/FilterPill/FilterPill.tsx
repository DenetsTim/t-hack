import styles from './FilterPill.module.css'

interface FilterPillProps {
  label: string
  onRemove: () => void
}

export function FilterPill({ label, onRemove }: FilterPillProps) {
  return (
    <div className={styles.pill}>
      <span>{label}</span>
      <button
        type="button"
        className={styles.remove}
        onClick={onRemove}
        aria-label="Убрать фильтр"
      >
        ✕
      </button>
    </div>
  )
}
