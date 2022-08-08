import React from "react";

// import Post List component and create post modal
import PostListLayout from "./postListComponents/PostListLayout";
import CreatePost from "./composePost/CreatePost";

// TODO - posts will be changed to used state and fetched from backend.
import { posts } from "../../data";

const GeneralPostList = () => {
    return (
        <PostListLayout
            title="General Posts"
            posts={posts}
            withSearchBar={true}
        >
            <CreatePost />
        </PostListLayout>
    );
};

export default GeneralPostList;
