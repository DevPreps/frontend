import React from "react";

import { savedPosts } from "../../data";
// import Post List component
import PostListLayout from "../postList/postListComponents/PostListLayout";

// TODO - savedPosts will be changed to used state and fetched from backend.

const MyBookmarks = () => {
    return (
        <PostListLayout
            title="My Bookmarks"
            posts={savedPosts}
            withSearchBar={false}
        ></PostListLayout>
    );
};

export default MyBookmarks;
