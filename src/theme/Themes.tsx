import { PaletteMode, ThemeOptions } from "@mui/material"; // TypeScript Types

// An interface that defines object parameters
interface ThemeColor {
    main: string;
    paper: string; // Component BackGround
    default: string; // Main BackGround
    divider: string; // Light grey color for divider
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
            divider: "#BDBDBD", // light grey for divider
            grey: "#212121", // dark grey
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
            divider: "#BDBDBD", // light grey for divider
            green: "#1b5e20", // dark green
            grey: "#424242", // dark grey
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
                sm: 675,
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
            neutral: {
                main: themeColor.grey,
            },
            background: {
                paper: themeColor.paper,
                default: themeColor.default,
            },
            text: {
                primary: themeColor.contrastText,
            },
            divider: themeColor.divider,
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        transition: "all 0.5s ease-in-out",
                    },
                    "header a, .MuiBox-root a": {
                        textDecoration: "none",
                        fontWeight: 700,
                    },
                    "footer a": {
                        color: themeColor.contrastText,
                    },
                    ".ql-snow .ql-picker, .ql-snow .ql-picker-options .ql-picker-item, .ql-snow .ql-stroke, .ql-snow .ql-tooltip:before":
                        {
                            color: themeColor.contrastText,
                            stroke: themeColor.contrastText,
                        },
                    ".ql-snow .ql-fill,": {
                        fill: themeColor.contrastText,
                    },
                    ".ql-snow .ql-tooltip, .ql-snow .ql-picker-options": {
                        background: themeColor.default,
                    },
                    ".quill > .ql-container > .ql-editor.ql-blank::before": {
                        color: themeColor.contrastText,
                    },
                    ".ql-tooltip.ql-editing, .ql-tooltip": {
                        left: "0 !important",
                        zIndex: 2550,
                    },
                    ".ql-editor": {
                        height: "250px",
                        maxHeight: "250px",
                    },
                    ".ql-snow .ql-editor img": {
                        display: "block",
                        margin: "0 auto",
                        width: "50%",
                    },
                },
            },
        },
    };
    return theme;
};
