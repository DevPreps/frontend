import React from "react";

// import Post List component and create post modal
import PostListLayout from "./postListComponents/PostListLayout";

// TODO - posts will be changed to used state and fetched from backend.
import { posts } from "../../data";

const RecommendPostList = () => {
    return (
        <PostListLayout
            title="Recommend Posts"
            posts={posts}
            withSearchBar={true}
        ></PostListLayout>
    );
};

export default RecommendPostList;
