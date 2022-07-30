import React from "react";

// import create post modal
import CreateInterviewPost from "./composePost/CreateInterviewPost";
import PostListItem from "./postListComponents/PostListItem";
import SearchBar from "./postListComponents/SearchBar";
import SortMenu from "./postListComponents/SortMenu";
import { UserCardActions } from "./postListComponents/CardActions";

// import MUI components
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const InterviewPostList = () => {
    // TODO - posts will be updated with useState and useEffect
    const posts = [1, 2, 3];
    return (
        <Stack spacing={2}>
            {/* the following title just show which page is rendered, will be deleted later */}
            <Typography variant="h3">
                Interview Post List (This title will be deleted)
            </Typography>
            {/* search bar */}
            <SearchBar />
            {/* compose button and sort menu */}
            <Stack direction="row">
                <CreateInterviewPost />
                <SortMenu />
            </Stack>
            {/* post list */}
            {posts.map((post) => (
                <PostListItem key={post}>
                    <UserCardActions />
                </PostListItem>
            ))}
            {/* load more button */}
            <Button>Load More</Button>
        </Stack>
    );
};

export default InterviewPostList;