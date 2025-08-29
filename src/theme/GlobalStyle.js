import { createGlobalStyle } from "styled-components";
import Theme from "./index";

const GlobalStyle = createGlobalStyle`
body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
}
`

export default GlobalStyle;
