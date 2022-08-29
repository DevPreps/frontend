import React from "react";

// import Post List component and create post modal
import { projectPosts } from "../../data";
import CreatePost from "./composePost/CreatePost";
import PostListLayout from "./postListComponents/PostListLayout";

// TODO - posts will be changed to used state and fetched from backend.

const ProjectPostList = () => {
    return (
        <PostListLayout
            title="Project Posts"
            posts={projectPosts}
            withSearchBar={true}
        >
            <CreatePost />
        </PostListLayout>
    );
};

export default ProjectPostList;
