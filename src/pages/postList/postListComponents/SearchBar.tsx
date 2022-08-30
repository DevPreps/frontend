import React from "react";

// import MUI icons and components
import { Search } from "@mui/icons-material";
import {
    Box,
    FormControl,
    IconButton,
    InputAdornment,
    OutlinedInput,
} from "@mui/material";


// import MUI icons
const SearchBar = () => {

    return (
        <Box component="form" sx={styles.form} noValidate autoComplete="off">
            <FormControl variant="outlined" sx={styles.formControl}>
                <OutlinedInput
                    id="outlined-adornment-search"
                    autoFocus
                    notched
                    sx={styles.searchBar}
                    startAdornment={
                        <InputAdornment position="start">
                            $search&gt;
                        </InputAdornment>
                    }
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
    searchBar: {
        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "neutral.main",
            borderWidth: "thin",
        },
    }
} as const;

export default SearchBar;
