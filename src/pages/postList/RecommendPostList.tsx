import React from "react";

// import Post List components
import PostList from "./postListComponents/PostList";
import NewGeneralPost from "./composeComponents/NewGeneralPost";

// import MUI components
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchBar from "./postListComponents/SearchBar";
import Typography from "@mui/material/Typography";

const RecommendPostList = () => {
    return (
        <Stack spacing={2}>
            {/* the following title just show which page is rendered, will be deleted later */}
            <Typography variant="h3"> Recommend Post List</Typography>
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

export default RecommendPostList;
