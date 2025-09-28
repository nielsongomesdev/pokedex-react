import 'styled-components'
import { lightTheme } from './styles/themes'

type Theme = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}