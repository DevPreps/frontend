import React from "react";

// import Post List component
import PostListLayout from "../postList/postListComponents/PostListLayout";

// TODO - posts will be changed to used state and fetched from backend.
import { myDrafts } from "../../data";

const MyDrafts = () => {
    return (
        <PostListLayout
            title="My Drafts"
            posts={myDrafts}
            withSearchBar={false}
        ></PostListLayout>
    );
};

export default MyDrafts;
