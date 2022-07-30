import React from "react";

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

export const UserCardActions = () => {
    return (
        <CardActions disableSpacing>
            <Avatar sx={style.avatar} aria-label="Post Item">
                R
            </Avatar>
            <Typography>Username</Typography>
            <IconButton aria-label="add to favorites" sx={style.addBtn}>
                <AddCommentIcon />
            </IconButton>

            <IconButton aria-label="add to favorites" sx={style.likeBtn}>
                <FavoriteBorderIcon />
            </IconButton>
            <span>18</span>
            <IconButton aria-label="add to favorites">
                <BookmarkAddIcon />
            </IconButton>
        </CardActions>
    );
};

export const AuthorCardActions = () => {
    // TODO - category will be changed to a prop from post.category
    const category = "interview";
    return (
        <CardActions disableSpacing>
            {category === "interview" ? (
                <UpdateInterviewPost />
            ) : (
                <UpdateGeneralPost />
            )}
            <Button startIcon={<DeleteForeverIcon />} sx={style.deleteBtn}>
                DELETE
            </Button>
        </CardActions>
    );
};

const style = {
    addBtn: {
        ml: "auto",
    },
    avatar: {
        bgcolor: red[500],
        mx: 2,
    },
    deleteBtn: {
        color: red[800],
    },
    likeBtn: {
        color: red[700],
    },
} as const;