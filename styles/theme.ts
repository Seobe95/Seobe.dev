export type Colors = {
  text: string
  element: string
  bg_page1: string
  bg_page2: string
  hover: string
  strong_font_color: string
  post_card: string
}

type Theme = 'light' | 'dark'
type ColorsKey = keyof Colors
type ThemedPalette = Record<ColorsKey, string>

const themeVariableSets: Record<Theme, Colors> = {
  dark: {
    text: '#d2d3d7',
    element: '#292927',
    bg_page1: '#080809',
    bg_page2: '#202124',
    post_card: '#171717',
    hover: '#4d4d4d',
    strong_font_color: '#eb5757',
  },
  light: {
    text: '#4d5156',
    element: '#ededeb',
    bg_page1: '#F8F9FA',
    bg_page2: '#ffffff',
    post_card: '#ffffff',
    hover: '#e9e9e9',
    strong_font_color: '#eb5757',
  },
}

const buildCssVariables = (variables: Colors) => {
  const keys = Object.keys(variables) as (keyof Colors)[]
  return keys.reduce((acc, key) => acc.concat(`--${key.replace(/_/g, '-')}: ${variables[key]};`, '\n'), '')
}

export const themes = {
  light: buildCssVariables(themeVariableSets.light),
  dark: buildCssVariables(themeVariableSets.dark),
}

const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`

const variableKeys = Object.keys(themeVariableSets.light) as ColorsKey[]

export const themedPalette: Record<ColorsKey, string> = variableKeys.reduce((acc, current) => {
  acc[current] = cssVar(current)
  return acc
}, {} as ThemedPalette)
