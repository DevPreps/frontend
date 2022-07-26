import React from "react";
import PostListItem from "./PostListItem";

// import MUI components
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
        </>
    );
};

export default PostList;
