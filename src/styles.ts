import { createGlobalStyle } from "styled-components";
import { Colors } from 'shared/enums';

export const GlobalStyle = createGlobalStyle`
:root {
  --mainColor: ${Colors.PRIMARY}
}

* {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  width: 100%;
  height: 100%;
  font-size: 10px;
}

body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-family: "Ubuntu", sans-serif, -apple-system, BlinkMacSystemFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#appRoot {
  width: 100%;
  height: 100%;
  overflow: hidden auto;
  background-image: linear-gradient(
    180deg,
    var(--mainColor) 0,
    var(--mainColor) 328px,
    #fff 328px,
    #fff 100%
  );
  background-attachment: local;
}
`;
