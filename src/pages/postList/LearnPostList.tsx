import React from "react";

// import Post List component and create post modal
import PostListLayout from "./postListComponents/PostListLayout";
import CreatePost from "./composePost/CreatePost";

// TODO - posts will be changed to used state and fetched from backend.
import { learnPosts } from "../../data";

const LearnPostList = () => {
    return (
        <PostListLayout
            title="Learn Posts"
            posts={learnPosts}
            withSearchBar={true}
        >
            <CreatePost />
        </PostListLayout>
    );
};

export default LearnPostList;
