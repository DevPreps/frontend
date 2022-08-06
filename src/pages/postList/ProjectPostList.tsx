import React from "react";

// import Post List component and create post modal
import PostListLayout from "./postListComponents/PostListLayout";
import CreateProjectPost from "./composePost/CreateProjectPost";

// TODO - posts will be changed to used state and fetched from backend.
import { posts } from "../../data";

const ProjectPostList = () => {
    return (
        <PostListLayout
            title="Project Posts"
            posts={posts}
            withSearchBar={true}
        >
            <CreateProjectPost />
        </PostListLayout>
    );
};

export default ProjectPostList;
