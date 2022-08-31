import React from "react";

import { myDrafts } from "../../data";
// import Post List component
import PostListLayout from "../postList/postListComponents/PostListLayout";

// TODO - posts will be changed to used state and fetched from backend.

const MyDrafts = () => {
    return (
        <PostListLayout
            title="My Drafts"
            posts={myDrafts}
            withSearchBar={false}
        />
    );
};

export default MyDrafts;
