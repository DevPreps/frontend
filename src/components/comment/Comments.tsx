import React from "react";

// mui style
import { Stack } from "@mui/material";

// import comment item
import CommentCard from "./CommentCard";

// Loop comment item as children components
const Comments: React.FC = ({ children }) => {
    const comments = [1, 2, 3];
    return (
        <Stack spacing={2}>
            {comments.map((commentItem) => (
                <CommentCard key={commentItem} />
            ))}
        </Stack>
    );
};

export default Comments;
