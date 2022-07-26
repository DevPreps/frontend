import React from "react";
import PostListItem from "./PostListItem";
// import { useLocation } from "react-router-dom";
import NewGeneralPost from "../../components/composeComponents/NewGeneralPost";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// import MUI components
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";

// import MUI icons
import { Search } from "@mui/icons-material";

const PostList = () => {
    // cannot pass test with useLocation, needs to be fixed
    // const location = useLocation();
    // const category = location.pathname.substring(
    //     location.pathname.lastIndexOf("/") + 1
    // );

    const posts = [1, 2, 3];
    return (
        <Stack spacing={2}>
            {/* search bar */}
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
            {/* compose button and sort  */}
            <Stack direction="row">
                <NewGeneralPost />
                <FormControl sx={{ ml: "auto", minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Sort</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        label="Sort"
                    >
                        {/* <MenuItem value="">
                            <em>Sort</em>
                        </MenuItem> */}
                        <MenuItem value="latest">
                            <em>Latest</em>
                        </MenuItem>
                        <MenuItem value="likes">Most Likes</MenuItem>
                        <MenuItem value="dk">Most Saved</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
            {/* post list */}
            {posts.map((post) => (
                <PostListItem key={post} />
            ))}
            {/* load more button */}
            <Button>Load More</Button>
        </Stack>
    );
};

export default PostList;
