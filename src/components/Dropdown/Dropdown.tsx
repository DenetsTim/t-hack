import type { FC } from 'react'
import styles from './Dropdown.module.css'

export interface DropdownOption {
  value: string
  label: string
}

interface DropdownProps {
  label: string
  value: string
  options: DropdownOption[]
  open: boolean
  onToggle: () => void
  onSelect: (value: string) => void
  active?: boolean
  noReset?: boolean
}

const Dropdown: FC<DropdownProps> = ({
  label,
  value,
  options,
  open,
  onToggle,
  onSelect,
  active = false,
  noReset = false
}) => {
  const selectedOption = options.find(opt => opt.value === value)
  const isDefault = value === options[0]?.value
  const displayLabel =
    isDefault && !noReset ? label : (selectedOption?.label ?? label)

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={`${styles.btn} ${active && !noReset ? styles.btnActive : ''}`}
        onClick={onToggle}
      >
        <span>{displayLabel}</span>
        <span className={styles.arrow}>{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className={styles.menu}>
          {options.map(opt => (
            <button
              type="button"
              key={opt.value}
              className={`${styles.item} ${value === opt.value ? styles.itemActive : ''}`}
              onClick={() => onSelect(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
