import React from "react";

// import Post List component and create post modal
import PostListLayout from "./postListComponents/PostListLayout";
import CreateGeneralPost from "./composePost/CreateGeneralPost";

// TODO - posts will be changed to used state and fetched from backend.
import { posts } from "../../data";

const GeneralPostList = () => {
    return (
        <PostListLayout
            title="General Post List"
            posts={posts}
            withSearchBar={true}
        >
            <CreateGeneralPost />
        </PostListLayout>
    );
};

export default GeneralPostList;
