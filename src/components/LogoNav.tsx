import React from "react";
// Import MUI Components
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Logo() {
    return (
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{ ...style.typography }}
        >
            {useMediaQuery(useTheme().breakpoints.up("md"))
                ? "DevPrep + LOGO"
                : "LOGO"}
        </Typography>
    );
}

const style = {
    typography: {
        mr: 2,
        flexGrow: 1,
        fontWeight: 700,
        letterSpacing: ".2rem",
        textDecoration: "none",
    },
};
