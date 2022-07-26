import React from "react";
import PostListItem from "./PostListItem";

// import MUI components
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// import Post List components
import SortMenu from "./SortMenu";

const PostList: React.FC = ({ children }) => {
    const posts = [1, 2, 3];
    return (
        <>
            {/* compose button and sortMenu  */}
            <Stack direction="row">
                {children}
                <SortMenu />
            </Stack>
            {/* post list */}
            {posts.map((post) => (
                <PostListItem key={post} />
            ))}
            {/* load more button */}
            <Button>Load More</Button>
        </>
    );
};

export default PostList;
