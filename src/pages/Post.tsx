import React from "react";
import { Outlet } from "react-router-dom";
import PostView from "../components/postView/PostView";

const Post = () => {
    return (
        <div>
            <PostView />
            <Outlet />
        </div>
    );
};

export default Post;
