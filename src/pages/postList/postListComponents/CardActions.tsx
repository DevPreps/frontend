import React from "react";

//import MUI icons and components
import {
    AddComment,
    BookmarkAdd,
    DeleteForever,
    FavoriteBorder,
} from "@mui/icons-material";
import {
    Avatar,
    Box,
    Button,
    CardActions,
    IconButton,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";

// import components and data interface
import UpdatePost from "../updatePost/UpdatePost";
import { IPost } from "./IPost";
import Report from "./ReportModal";

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
                <Typography variant="caption">
                    {" "}
                    Job Title <Box component="span">·</Box> city
                </Typography>
            </Stack>

            <Tooltip title="Comment">
                <IconButton aria-label="add comment" sx={styles.addBtn}>
                    <AddComment />
                </IconButton>
            </Tooltip>
            <Typography variant="caption">24</Typography>
            <Tooltip title="Like the post">
                <IconButton aria-label="like the post" sx={styles.likeBtn}>
                    <FavoriteBorder />
                </IconButton>
            </Tooltip>
            <Typography variant="caption">18</Typography>
            <Tooltip title="Save the post">
                <IconButton aria-label="bookmark">
                    <BookmarkAdd />
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
            <Button startIcon={<DeleteForever />} sx={styles.deleteBtn}>
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
