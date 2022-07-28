import React from "react";
import { Outlet } from "react-router-dom";

const Post = () => {
    return (
        <div>
            Post
            <Outlet />
        </div>
    );
};

export default Post;
