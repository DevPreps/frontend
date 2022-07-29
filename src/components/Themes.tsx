import { PaletteMode, ThemeOptions } from "@mui/material";
// An interface that defines object parameters
interface ThemeColor {
    default: string;
    paper: string;
    text: string;
}
//Toggle the color scheme between light and dark mode
export const baseTheme = (mode: PaletteMode) => {
    let themeColor: ThemeColor;
    if (mode === "light") {
        themeColor = {
            default: "#F3FFDE",
            paper: "#F3FFDE",
            text: "#191919",
        };
    } else {
        // Defind the dark theme color
        themeColor = {
            default: "#232726",
            paper: "#232726",
            text: "#F3FFDE",
        };
    }
    // allow configuration using `theme`
    const theme: ThemeOptions = {
        typography: {
            fontFamily: ["Nunito Sans", "sans-serif"].join(","),
            button: {
                textTransform: "capitalize",
            },
        },
        palette: {
            mode,
            primary: {
                main: themeColor.default,
            },
            secondary: {
                main: themeColor.paper,
            },
            background: {
                default: themeColor.default,
                paper: themeColor.paper,
            },
            text: {
                primary: themeColor.text,
            },
        },
    };

    return theme;
};
  