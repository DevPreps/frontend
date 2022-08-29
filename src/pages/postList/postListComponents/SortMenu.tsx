import React from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SortMenu = () => {
    return (
        <FormControl sx={styles} size="small">
            <InputLabel id="demo-select-small">Sort</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Sort"
                defaultValue="latest"
                // add following setting to disable MUI default behavior of adds padding to the body tag when a dialog/select menu is
                MenuProps={{
                    disableScrollLock: true,
                }}
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
