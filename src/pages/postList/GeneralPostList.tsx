import React from "react";

// import Post List components
import CreateGeneralPost from "./composePost/CreateGeneralPost";
import PostListItem from "./postListComponents/PostListItem";
import SearchBar from "./postListComponents/SearchBar";
import SortMenu from "./postListComponents/SortMenu";
import Typography from "@mui/material/Typography";
import { UserCardActions } from "./postListComponents/CardActions";

// import MUI components
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const GeneralPostList = () => {
    // TODO - posts will be updated with useState and useEffect
    const posts = [1, 2, 3];
    return (
        <Stack spacing={2}>
            {/* the following title just show which page is rendered, will be deleted later */}
            <Typography variant="h3">
                General Post List (This title will be deleted)
            </Typography>
            {/* search bar */}
            <SearchBar />
            {/* compose button and sort menu */}
            <Stack direction="row">
                <CreateGeneralPost />
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
            {/* load more button */}
        </Stack>
    );
};

export default GeneralPostList;
