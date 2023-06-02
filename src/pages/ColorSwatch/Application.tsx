import * as React from "react";

import { ColorSwatch } from "./ColorSwatch";
import { ColorInputs } from "./ColorInputs";
// import { ColorSliders } from './ColorSliders';
import { ColorSlider } from "./ColorSlider";

import { ThemeContext } from "./theme-context";
import { RGBContext } from "./context";
import { ColorAdjustment } from "./ColorAdjustment";
import { RGBColorType } from "./types";

const Application = () => {
  const themes = React.useContext(ThemeContext);
  const { ...rgb } = React.useContext(RGBContext);

  const rgbToHex = ({ red, green, blue }: RGBColorType): string =>
    "#" +
    [red, green, blue].map((x) => x.toString(16).padStart(2, "0")).join("");

  const toRGBString = ({ red, green, blue }: RGBColorType): string =>
    `rgb${red},${green},${blue}`;

  return (
    <main
      style={{
        ...themes.dark,
      }}
    >
      <ColorSwatch />
      <div className="color-name-types">
        <h2>{toRGBString({ ...rgb })}</h2>
        <h2>{rgbToHex({ ...rgb })}</h2>
      </div>
      <ColorInputs {...rgb} />
      {/* <ColorSliders /> */}
      <ColorAdjustment Adjustment={ColorSlider} />
    </main>
  );
};

export default Application;
