import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala";
import "@fontsource/sora";
import "@fontsource/poppins";
import "@fontsource/outfit"

const GlobalStyles = createGlobalStyle`

/* *{
  outline: 1px solid red !important;
} */

*,*::beforeAll,*::after{
  margin: 0;
  padding: 0;
}

body{
  //font-family: 'Outfit', sans-serif;
  font-family: 'outfit';
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6{
  //font-family: 'Outfit', sans-serif;
  font-family: 'outfit';
  margin: 0;
  padding: 0;
}

a{
  color: inherit;
  text-decoration:none;
}
`;

export default GlobalStyles;
