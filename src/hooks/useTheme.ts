import useThemeStore from './useThemeStore'

export function useTheme() {
  const darkModeState = useThemeStore()
  const theme = (() => {
    if (darkModeState.systemTheme === 'not-ready') return 'light'
    if (darkModeState.userTheme !== 'default') return darkModeState.userTheme
    return darkModeState.systemTheme
  })()

  return theme
}
