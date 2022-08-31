import React from "react";

import { useTheme, Typography, useMediaQuery } from "@mui/material";

export default function Logo() {
    return (
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={style.typography}
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
