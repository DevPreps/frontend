import React from "react";

// import Post List component and create post modal
import { generalPosts } from "../../data";
import CreatePost from "./composePost/CreatePost";
import PostListLayout from "./postListComponents/PostListLayout";

// TODO - posts will be changed to used state and fetched from backend.

const GeneralPostList = () => {
    return (
        <PostListLayout
            title="General Posts"
            posts={generalPosts}
            withSearchBar={true}
        >
            <CreatePost />
        </PostListLayout>
    );
};

export default GeneralPostList;
