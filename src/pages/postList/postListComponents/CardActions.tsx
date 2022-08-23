import React from "react";

// import components and data interface
import { IPost } from "./IPost";
import Report from "./ReportModal";
import UpdatePost from "../updatePost/UpdatePost";

//import MUI components
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";

// import MUI Icons
import AddCommentIcon from "@mui/icons-material/AddComment";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Stack from "@mui/material/Stack";

import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

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
            <Stack>
               <Typography>Username</Typography>
               <Typography variant="caption"> Job Title <Box component="span">·</Box> city</Typography> 
            </Stack>
            
            <Tooltip title="Comment">
                <IconButton aria-label="add comment" sx={styles.addBtn}>
                    <AddCommentIcon />
                </IconButton>
            </Tooltip>
            <Typography variant="caption">24</Typography>
            <Tooltip title="Like the post">
                <IconButton aria-label="like the post" sx={styles.likeBtn}>
                    <FavoriteBorderIcon />
                </IconButton>
            </Tooltip>
            <Typography variant="caption">18</Typography>
            <Tooltip title="Save the post">
                <IconButton aria-label="bookmark">
                    <BookmarkAddIcon />
                </IconButton>
            </Tooltip>
            <Report />
        </CardActions>
    );
};

export const AuthorCardActions = ({ post }: Props) => {
    // TODO - category will be changed to a prop from post.category

    return (
        <CardActions disableSpacing>
            <UpdatePost post={post} />
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
        bgcolor: "error.main",
        mx: 2,
    },
    deleteBtn: {
        color: "error.main",
        ml: 2,
    },
    likeBtn: {
        color: "error.main",
    },
} as const;
