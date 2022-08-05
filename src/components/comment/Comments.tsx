import React from "react";

// mui style
import { Stack } from "@mui/material";

// import comment item
import CommentCard from "./CommentCard";

//import comment item dummy data from CommentCard
const Comments: React.FC = () => {
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
