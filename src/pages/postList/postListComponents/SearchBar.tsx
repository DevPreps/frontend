import React from "react";

// import MUI icons and components
import { Search } from "@mui/icons-material";
import {
    Box,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";

// import MUI icons
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
