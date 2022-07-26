import React from "react";

// import Post List components
import PostList from "./postListComponents/PostList";

// import MUI components
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchBar from "./postListComponents/SearchBar";
import Typography from "@mui/material/Typography";
import NewLearnPost from "./composeComponents/NewLearnPost";
const LearnPostList = () => {
    return (
        <Stack spacing={2}>
            <Typography> Learn Post List</Typography>
            {/* search bar */}
            <SearchBar />
            <PostList>
                <NewLearnPost />
            </PostList>
            {/* load more button */}
            <Button>Load More</Button>
        </Stack>
    );
};

export default LearnPostList;
