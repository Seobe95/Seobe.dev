import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
}

/* 
body {
  --text: ${theme.light.text};
  --background: ${theme.light.bg_page1}; 
  transition: 0.125s all ease-in;
}

@media (prefers-color-scheme: dark) {
  body {
    --text: ${theme.dark.text};
    --background: ${theme.dark.bg_page1}; 
  }
}

body[data-theme='light'] {
  --text: ${theme.light.text};
  --background: ${theme.light.bg_page1}; 
}

body[data-theme='dark'] {
  --text: ${theme.dark.text};
  --background: ${theme.dark.bg_page1}; 
}

body {
  color: var(--text);
  background: var(--background);
} */

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

`

export default GlobalStyle
