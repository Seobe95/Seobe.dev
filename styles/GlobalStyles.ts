import { createGlobalStyle } from 'styled-components'
import { themedPalette, themes } from './theme'
import localFont from '@next/font/local'

const font = localFont({ src: '../public/fonts/RobotoMono-Regular.ttf' })

const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
  height : 100%;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
  color : ${themedPalette.text};
  background: ${themedPalette.bg_page1};
}


body {
  ${themes.light}
}

@media (prefers-color-scheme: dark) {
  body {
    ${themes.dark}
  }
}

body[data-theme='light'] {
  ${themes.light}
}

body[data-theme='dark'] {
  ${themes.dark}
}

#root {
  min-height: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

code { 
  ${font.style}
}
`

export default GlobalStyle
