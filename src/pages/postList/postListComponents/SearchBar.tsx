import React from "react";

// import MUI components
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";

// import MUI icons
import { Search } from "@mui/icons-material";
const SearchBar = () => {
    return (
        <Box component="form" sx={styles.form} noValidate autoComplete="off">
            <FormControl variant="outlined" sx={styles.formControl}>
                <InputLabel htmlFor="outlined-adornment-search">
                    Search
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-search"
                    // label="Search"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton edge="end">
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    );
};

const styles = {
    form: {
        display: "flex",
        width: "100%",
        my: "2",
    },
    formControl: {
        width: "100%",
        maxWidth: 500,
    },
} as const;

export default SearchBar;
