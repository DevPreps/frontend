import React from "react";

// import Post List component and create post modal
import PostListLayout from "./postListComponents/PostListLayout";
import CreatePost from "./composePost/CreatePost";

// TODO - posts will be changed to used state and fetched from backend.
import { interviewPosts } from "../../data";

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
