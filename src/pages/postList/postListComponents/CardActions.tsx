import React from "react";

import { IPost } from "./IPost";
//import MUI components
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import UpdateGeneralPost from "../updatePost/UpdateGeneralPost";
import UpdateInterviewPost from "../updatePost/UpdateInterviewPost";

// import MUI Icons
import AddCommentIcon from "@mui/icons-material/AddComment";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import MUI colors
import { red } from "@mui/material/colors";

// define interface for props
interface Props {
    post: IPost;
}
export const UserCardActions = () => {
    return (
        <CardActions disableSpacing>
            <Avatar sx={styles.avatar} aria-label="Post Item">
                R
            </Avatar>
            <Typography>Username</Typography>
            <IconButton aria-label="add comment" sx={styles.addBtn}>
                <AddCommentIcon />
            </IconButton>

            <IconButton aria-label="like the post" sx={styles.likeBtn}>
                <FavoriteBorderIcon />
            </IconButton>
            <span>18</span>
            <IconButton aria-label="bookmark">
                <BookmarkAddIcon />
            </IconButton>
        </CardActions>
    );
};

export const AuthorCardActions = ({ post }: Props) => {
    // TODO - category will be changed to a prop from post.category

    return (
        <CardActions disableSpacing>
            {post.category === "interview" ? (
                <UpdateInterviewPost post={post} />
            ) : (
                <UpdateGeneralPost post={post} />
            )}
            <Button startIcon={<DeleteForeverIcon />} sx={styles.deleteBtn}>
                DELETE
            </Button>
        </CardActions>
    );
};

const styles = {
    addBtn: {
        ml: "auto",
    },
    avatar: {
        bgcolor: red[500],
        mx: 2,
    },
    deleteBtn: {
        color: red[800],
        ml: 2,
    },
    likeBtn: {
        color: red[700],
    },
} as const;
