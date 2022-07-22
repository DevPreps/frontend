import React from "react";
import PostListItem from "./PostListComponents/PostListItem";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// import MUI icons
import AddIcon from "@mui/icons-material/Add";
import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
const PostList = () => {
    return (
        <Stack spacing={2}>
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
                <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-search"
                    // label="Search"
                    fullWidth
                    endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                          >
                            <Search />
                          </IconButton>
                        </InputAdornment>
                      } />
                </FormControl>
            </Box>
            <Stack direction="row">
                <Button variant="contained" startIcon={<AddIcon />}>
                    Compose
                </Button>
                <FormControl sx={{ ml: "auto", minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Sort</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Sort"
                    >
                        <MenuItem value="">
                            <em>Sort</em>
                        </MenuItem>
                        <MenuItem value="latest">Latest</MenuItem>
                        <MenuItem value="likes">Likes</MenuItem>
                        <MenuItem value="dk">DK</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
            <PostListItem />
        </Stack>
    );
};

export default PostList;
