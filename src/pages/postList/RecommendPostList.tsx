import React from "react";

// import Post List component and create post modal
import { posts } from "../../data";
import CreatePost from "./composePost/CreatePost";
import PostListLayout from "./postListComponents/PostListLayout";

// TODO - posts will be changed to used state and fetched from backend.

const RecommendPostList = () => {
    return (
        <PostListLayout
            title="Recommend Posts"
            posts={posts}
            withSearchBar={true}
        >
            <CreatePost />
        </PostListLayout>
    );
};

export default RecommendPostList;
