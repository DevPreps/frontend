import { PaletteMode, ThemeOptions } from "@mui/material"; // TypeScript Types
// An interface that defines object parameters
interface ThemeColor {
    main: string;
    paper: string; // Component BackGround
    default: string; // Main BackGround
    contrastText: string; // Text
}

//Toggle the color scheme between light and dark mode
export const baseTheme = (mode: PaletteMode) => {
    let themeColor: ThemeColor;
    if (mode === "light") {
        themeColor = {
            main: "#0F301F",
            paper: "#F3FFDE",
            default: "#F3FFDE",
            contrastText: "#291528",
        };
    } else {
        // Defind the dark theme color
        themeColor = {
            main: "#C0F4E6",
            paper: "#0F301F",
            default: "#0F301F",
            contrastText: "#F3FFDE",
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
                main: themeColor.main,
            },
            secondary: {
                main: themeColor.paper,
            },
            background: {
                paper: themeColor.paper,
                default: themeColor.default,
            },
            text: {
                primary: themeColor.contrastText,
            },
            divider: themeColor.contrastText,
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        transition: "all 0.5s ease-in-out",
                    },
                    "header a, .MuiBox-root a": {
                        color: themeColor.contrastText,
                        textDecoration: "none",
                        fontWeight: 700,
                    },
                },
            },
        },
    };
    return theme;
};
