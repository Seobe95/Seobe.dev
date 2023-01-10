import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface ThemeStoreState {
  userTheme: 'light' | 'dark' | 'default'
  systemTheme: 'light' | 'dark' | 'not-ready'
  enableDarkMode: () => void
  enableLightMode: () => void
  setSystemTheme: (value: 'light' | 'dark') => void
}

const useThemeStore = create<ThemeStoreState>()(
  devtools((set) => ({
    userTheme: 'default',
    systemTheme: 'not-ready',
    enableDarkMode: () => set(() => ({ userTheme: 'dark' }), false, 'THEME/change_user_theme_dark'),
    enableLightMode: () => set(() => ({ userTheme: 'light' }), false, 'THEME/change_user_theme_light'),
    setSystemTheme: (value) => set(() => ({ systemTheme: value }), false, 'THEME/change_system_theme'),
  })),
)

export default useThemeStore
