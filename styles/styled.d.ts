import 'styled-components'
import { Colors, ResponseType } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    light: Colors
    dark: Colors
  }
}
