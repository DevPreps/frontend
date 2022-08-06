import React from "react";

// import Post List component
import PostListLayout from "../postList/postListComponents/PostListLayout";

// TODO - posts will be changed to used state and fetched from backend.
import { myPosts } from "../../data";

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
