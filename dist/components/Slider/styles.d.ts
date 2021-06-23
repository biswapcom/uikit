import { InputHTMLAttributes } from "react";
export declare const SliderContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../Box").BoxProps, never>;
interface SliderLabelProps {
    progress: number;
}
export declare const SliderLabel: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, SliderLabelProps, never>;
export declare const BunnyButt: import("styled-components").StyledComponent<"img", import("styled-components").DefaultTheme, {}, never>;
export declare const BunnySlider: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
    isCurrentValueMaxValue: boolean;
}
export declare const StyledInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, StyledInputProps, never>;
export declare const BarBackground: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const BarProgress: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    progress: number;
    isCurrentValueMaxValue: boolean;
}, never>;
export {};
