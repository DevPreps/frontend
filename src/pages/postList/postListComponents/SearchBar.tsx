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
        <Box
            component="form"
            sx={{
                display: "flex",
                width: "100%",
                my: "2",
            }}
            noValidate
            autoComplete="off"
        >
            <FormControl
                variant="outlined"
                sx={{ width: "100%", maxWidth: 500 }}
            >
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

export default SearchBar;
