import React from "react";

import { myPosts } from "../../data";
// import Post List component
import PostListLayout from "../postList/postListComponents/PostListLayout";

// TODO - posts will be changed to used state and fetched from backend.

const MyPosts = () => {
    return (
        <PostListLayout
            title="My Posts"
            posts={myPosts}
            withSearchBar={false}
        ></PostListLayout>
    );
};

export default MyPosts;
