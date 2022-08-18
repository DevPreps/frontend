import { PaletteMode, ThemeOptions } from "@mui/material"; // TypeScript Types
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
            fontFamily: "monospace, sans-serif",
            button: {
                textTransform: "capitalize",
            },
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 650,
                md: 910,
                lg: 1200,
                xl: 1536,
            },
        },
        palette: {
            mode,
            primary: {
                // TODO - this color needs to be set, Chris will work on it
                // main: themeColor.default,
                main: "#4caf50",
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
            divider: themeColor.text,
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        transition: "all 0.5s ease-in-out",
                    },
                    "header a, .MuiBox-root a": {
                        color: themeColor.text,
                        textDecoration: "none",
                        fontWeight: 700,
                    },
                },
            },
        },
    };
    return theme;
};
