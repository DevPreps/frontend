import { PaletteMode, ThemeOptions } from "@mui/material"; // TypeScript Types

// An interface that defines object parameters
interface ThemeColor {
    main: string;
    paper: string; // Component BackGround
    default: string; // Main BackGround
    contrastText: string; // Text
    blue: string; // Buttons and hight text
    green: string; // Buttons and borders
    grey: string; // Divider
    red: string; // Error massage and borders
    yellow: string; // Warning etc
}

//Toggle the color scheme between light and dark mode
export const baseTheme = (mode: PaletteMode) => {
    let themeColor: ThemeColor;

    // TODO - will vote for the color palette and change the following colors
    if (mode === "light") {
        themeColor = {
            main: "#0F301F",
            paper: "#F3FFDE",
            default: "#F3FFDE",
            contrastText: "#291528",
            blue: "#64b5f6", // light blue
            grey: "#BDBDBD", // light grey
            green: "#43a047", // light green
            red: "#d50000", // light red
            yellow: "#fbc02d", // light yellow
        };
    } else {
        // Define the dark theme color
        themeColor = {
            main: "#C0F4E6",
            paper: "#0F301F",
            default: "#0F301F",
            contrastText: "#F3FFDE",
            blue: "#1565c0", // dark blue
            green: "#1b5e20", // dark green
            grey: "#F3FFDE", // dark grey
            red: "#d32f2f", // bright red
            yellow: "#ffee58", // dark yellow
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
            error: {
                main: themeColor.red,
            },
            info: {
                main: themeColor.blue,
            },
            warning: {
                main: themeColor.yellow,
            },
            success: {
                main: themeColor.green,
            },
            background: {
                paper: themeColor.paper,
                default: themeColor.default,
            },
            text: {
                primary: themeColor.contrastText,
            },
            divider: themeColor.grey,
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
