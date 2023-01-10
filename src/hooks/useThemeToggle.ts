import { setStorage } from '../lib/storage'
import { useTheme } from './useTheme'
import useThemeStore from './useThemeStore'

export default function useThemeToggle() {
  const { setDarkMode, setLightMode } = useThemeStore((state) => ({
    setLightMode: state.enableLightMode,
    setDarkMode: state.enableDarkMode,
  }))
  const theme = useTheme()

  const save = (value: 'light' | 'dark') => {
    setStorage('theme', value)
    document.cookie = `theme=${value}; path=/;`
  }

  const toggle = () => {
    if (!theme) return
    if (theme === 'dark') {
      setLightMode()
      save('light')
    } else {
      setDarkMode()
      save('dark')
    }
  }

  return {
    theme,
    toggle,
  }
}
