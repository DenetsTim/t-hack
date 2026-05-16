import { SunIcon } from 'lucide-react'
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
  return (
    <button type="button" className={styles.toggler}>
      <SunIcon />
    </button>
  )
}

export default ThemeToggle
