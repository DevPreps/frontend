import React from "react";

// import Post List component
import PostListLayout from "../postList/postListComponents/PostListLayout";

// TODO - savedPosts will be changed to used state and fetched from backend.
import { savedPosts } from "../../data";

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
