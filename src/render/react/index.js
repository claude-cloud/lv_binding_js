import ArcConfig from "./components/Arc/config";
import ButtonConfig from "./components/Button/config";
import CalendarConfig from "./components/Calendar/config";
import ChartConfig from "./components/Chart/config";
import CheckboxConfig from "./components/Checkbox/config";
import DropdownlistConfig from "./components/Dropdownlist/config";
import GIFConfig from "./components/GIF/config";
import ImageConfig from "./components/Image/config";
import InputConfig from "./components/Input/config";
import KeyboardConfig from "./components/Keyboard/config";
import LineConfig from "./components/Line/config";
import MaskConfig from "./components/Mask/config";
import ProgressBarConfig from "./components/ProgressBar/config";
import RollerConfig from "./components/Roller/config";
import SliderConfig from "./components/Slider/config";
import SwitchConfig from "./components/Switch/config";
import TabsConfig from "./components/Tabs/config";
// import WindowConfig from "./components/Window/config";
import TextConfig from "./components/Text/config";
import TextareaConfig from "./components/Textarea/config";
import ViewConfig from "./components/View/config";
import { registerComponent } from "./components/config";
import { Renderer } from "./core/renderer";
import * as React from "react";

export const View = registerComponent(new ViewConfig());
// export const Window = registerComponent(new WindowConfig());
export const Text = registerComponent(new TextConfig());
export const Image = registerComponent(new ImageConfig());
export const Button = registerComponent(new ButtonConfig());
export const Slider = registerComponent(new SliderConfig());
export const Arc = registerComponent(new ArcConfig());
export const Switch = registerComponent(new SwitchConfig());
export const Textarea = registerComponent(new TextareaConfig());
export const Input = registerComponent(new InputConfig());
export const Keyboard = registerComponent(new KeyboardConfig());
export const Checkbox = registerComponent(new CheckboxConfig());
export const Dropdownlist = registerComponent(new DropdownlistConfig());
export const ProgressBar = registerComponent(new ProgressBarConfig());
export const Roller = registerComponent(new RollerConfig());
export const Line = registerComponent(new LineConfig());
export const Calendar = registerComponent(new CalendarConfig());
export const GIF = registerComponent(new GIFConfig());
export const Tabs = registerComponent(new TabsConfig());
export const Chart = registerComponent(new ChartConfig());
export const Mask = registerComponent(new MaskConfig());

export {
  EAlignType,
  EDropdownlistDirection,
  EDropdownListArrowDirection,
} from "./components/config";
export { EAnimateEasingFunc, Animate } from "./core/animate";
export { Dimensions } from "./core/dimensions";
export { BUILT_IN_SYMBOL } from "./core/style/symbol";
export { Theme } from "./core/theme";

export const Render = Renderer;
