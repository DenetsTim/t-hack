import { MoonIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.css'

type ThemeMode = 'light' | 'dark'

const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null

    if (savedTheme) {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      type="button"
      className={styles.toggler}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <MoonIcon strokeWidth={1.5} color='white' />
      ) : (
        <SunIcon strokeWidth={1.5} color='black' />
      )}
    </button>
  )
}

export default ThemeToggle
