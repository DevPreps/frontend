import React from "react";

// import Post List component
import PostListLayout from "../postList/postListComponents/PostListLayout";

// TODO - posts will be changed to used state and fetched from backend.
import { posts } from "../../data";

const MyPosts = () => {
    return (
        <PostListLayout
            title="My Posts"
            posts={posts}
            withSearchBar={false}
        ></PostListLayout>
    );
};

export default MyPosts;
