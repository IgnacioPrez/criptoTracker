import 'styled-components';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    background: string;
    text: string;
    grey: string;
    green: string;
    red: string;
    blue: string;
    yellow: string;
    lightGrey: string;
    input: string;
  }
}
