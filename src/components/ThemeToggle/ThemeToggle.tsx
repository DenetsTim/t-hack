import { SunIcon, MoonIcon } from 'lucide-react'
import styles from './ThemeToggle.module.css'
import { useEffect, useState } from 'react'

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
        <MoonIcon strokeWidth={1.5} />
      ) : (
        <SunIcon strokeWidth={1.5} color="black" />
      )}
    </button>
  )
}

export default ThemeToggle
