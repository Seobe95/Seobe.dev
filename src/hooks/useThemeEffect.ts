import useThemeStore from './useThemeStore'
import shallow from 'zustand/shallow'
import { useEffect } from 'react'
import { getStorage } from '../lib/storage'

export function useThemeEffect() {
  const { theme, dispatch } = useThemeStore(
    (state) => ({ theme: state.userTheme, dispatch: state.setSystemTheme }),
    shallow,
  )
  useEffect(() => {
    const storageItem = getStorage('theme')
    if (storageItem) {
      dispatch(storageItem === 'dark' ? 'dark' : 'light')
      return
    }
    const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    dispatch(preferDarkMode ? 'dark' : 'light')
  }, [dispatch])

  useEffect(() => {
    if (theme !== 'default') {
      document.body.dataset.theme = theme
    }
  }, [theme])
}
