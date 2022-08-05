import React from "react";

// import Post List component and create post modal
import PostListLayout from "./postListComponents/PostListLayout";
import CreateInterviewPost from "./composePost/CreateInterviewPost";

// TODO - posts will be changed to used state and fetched from backend.
import { posts } from "../../data";

const InterviewPostList = () => {
    return (
        <PostListLayout
        title="Interview Post List"
        posts={posts}
        withSearchBar={true}
    >
        <CreateInterviewPost />
    </PostListLayout>
    );
};

export default InterviewPostList;
