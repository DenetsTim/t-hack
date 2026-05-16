import ThemeToggle from '../ThemeToggle/ThemeToggle'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.text_wrapper}>
        <h1>UniCash</h1>
        <p>Студенческие транзакции</p>
      </div>
      <div className={styles.buttons_wrapper}>
        <ThemeToggle />
        <div className={styles.avatar}>AM</div>
      </div>
    </header>
  )
}

export default Header
