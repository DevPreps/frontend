import React from "react";

// import Post List components
import PostList from "./postListComponents/PostList";
import CreateGeneralPost from "./composePost/CreateGeneralPost";

// import MUI components
import Stack from "@mui/material/Stack";
import SearchBar from "./postListComponents/SearchBar";
import Typography from "@mui/material/Typography";

const RecommendPostList = () => {
    return (
        <Stack spacing={2}>
            {/* the following title just show which page is rendered, will be deleted later */}
            <Typography variant="h3">
                Recommend Post List (This title will be deleted)
            </Typography>
            {/* search bar */}
            <SearchBar />
            <PostList>
                <CreateGeneralPost />
            </PostList>
            {/* load more button */}
        </Stack>
    );
};

export default RecommendPostList;
