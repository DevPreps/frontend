import React from "react";
import { Outlet } from "react-router-dom";

const PostList = () => {
    return (
        <div>
            Post List
            <Outlet />
        </div>
    );
};

export default PostList;
