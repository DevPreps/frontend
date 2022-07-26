import React from "react";

// import Post List components
import PostList from "./postListComponents/PostList";
import NewGeneralPost from "./composeComponents/NewGeneralPost";

// import MUI components
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchBar from "./postListComponents/SearchBar";
import Typography from "@mui/material/Typography";

const GeneralPostList = () => {
    return (
        <Stack spacing={2}>
            <Typography> General Post List</Typography>
            {/* search bar */}
            <SearchBar />
            <PostList>
                <NewGeneralPost />
            </PostList>
            {/* load more button */}
            <Button>Load More</Button>
        </Stack>
    );
};

export default GeneralPostList;
