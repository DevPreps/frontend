import React from "react";

// import Post List components
import PostList from "./postListComponents/PostList";
import NewProjectPost from "./composePost/CreateProjectPost";

// import MUI components
import Stack from "@mui/material/Stack";
import SearchBar from "./postListComponents/SearchBar";
import Typography from "@mui/material/Typography";

const ProjectPostList = () => {
    return (
        <Stack spacing={2}>
            {/* the following title just show which page is rendered, will be deleted later */}
            <Typography variant="h3">
                Project Post List (This title will be deleted)
            </Typography>
            {/* search bar */}
            <SearchBar />
            <PostList>
                <NewProjectPost />
            </PostList>
        </Stack>
    );
};

export default ProjectPostList;
