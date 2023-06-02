import { render } from "react-dom";

import Application from "./Application";

import { ThemeProvider } from "./theme-context";
import { RGBContextProvider } from "./context";
import ColorSwatchStyled from "./style";

// import './style.scss';

// const rootElement = document.getElementById('root');
// render(
//   <ThemeProvider>
//     <RGBContextProvider>
//       <ColorSwatchStyled>
//       <Application />
//       </ColorSwatchStyled>
//     </RGBContextProvider>
//   </ThemeProvider>,
//   rootElement
// );

const ColorSwatch = () => {
  return (
    <ThemeProvider>
      <RGBContextProvider>
        <ColorSwatchStyled>
          <Application />
        </ColorSwatchStyled>
      </RGBContextProvider>
    </ThemeProvider>
  );
};

export default ColorSwatch;
