import React from "react";

// import Post List component and create post modal
import PostListLayout from "./postListComponents/PostListLayout";
import CreateLearnPost from "./composePost/CreateLearnPost";

// TODO - posts will be changed to used state and fetched from backend.
import { posts } from "../../data";

const LearnPostList = () => {
    return (
        <PostListLayout title="Learn Posts" posts={posts} withSearchBar={true}>
            <CreateLearnPost />
        </PostListLayout>
    );
};

export default LearnPostList;
