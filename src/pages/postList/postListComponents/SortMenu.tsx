import React from "react";

// import MUI components
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const SortMenu = () => {
    return (
        <FormControl sx={styles} size="small">
            <InputLabel id="demo-select-small">Sort</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Sort"
                defaultValue="latest"
            >
                <MenuItem value="latest">
                    <em>Latest</em>
                </MenuItem>
                <MenuItem value="likes">Most Likes</MenuItem>
                <MenuItem value="most saved">Most Saved</MenuItem>
            </Select>
        </FormControl>
    );
};

const styles: object = {
    ml: "auto",
    minWidth: 120,
};
export default SortMenu;
