import { DefaultTheme } from 'styled-components'

export type Colors = {
  text: string
  element: string
  bg_page1: string
  bg_page2: string
}

export type ResponseType = {
  mobile: string
  tablet: string
  laptop: string
  desktop: string
}

const breakPoints = {
  xlarge: '1200px',
  large: '1024px',
  medium: '768px',
  small: '576px',
}

export const responsive = {
  mobile: `(max-width: ${breakPoints.small})`,
  tablet: `(max-width: ${breakPoints.medium})`,
  laptop: `(max-width: ${breakPoints.large})`,
  desktop: `(min-width: ${breakPoints.xlarge})`,
}

const theme: DefaultTheme = {
  dark: {
    text: '#d2d3d7',
    element: '#202124',
    bg_page1: '#080809',
    bg_page2: '#202124',
  },
  light: {
    text: '#4d5156',
    element: '#ffffff',
    bg_page1: '#F8F9FA',
    bg_page2: '#ffffff',
  },
}

export default theme
