import React from "react";

// import Post List component and create post modal
import { interviewPosts } from "../../data";
import CreatePost from "./composePost/CreatePost";
import PostListLayout from "./postListComponents/PostListLayout";

// TODO - posts will be changed to used state and fetched from backend.

const InterviewPostList = () => {
    return (
        <PostListLayout
            title="Interview Posts"
            posts={interviewPosts}
            withSearchBar={true}
        >
            <CreatePost />
        </PostListLayout>
    );
};

export default InterviewPostList;
