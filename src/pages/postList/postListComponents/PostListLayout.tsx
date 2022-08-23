import React from "react";

// import create post modal
import PostListItem from "./PostListItem";
import SortMenu from "./SortMenu";
import { AuthorCardActions, UserCardActions } from "./CardActions";
import { IPost } from "./IPost";

// import MUI components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SearchBar from "./SearchBar";

interface Props {
    posts: IPost[];
    title: string;
    withSearchBar: boolean;
}

const PostListLayout: React.FC<Props> = ({
    children,
    title,
    posts,
    withSearchBar,
}) => {
    // TODO - currentUser will be changed to a global state
    const currentUser = { userId: "1" };
    return (
        <Stack spacing={2} sx={styles.stack}>
            {/* the following title just show which page is rendered, will be deleted later */}
            <Typography variant="h5">{title}
            <Box component="span" sx={styles.span}>This title will be deleted
                </Box></Typography>
            {withSearchBar && <SearchBar />}
            {/* compose button and sort menu */}
            <Stack direction="row" sx={styles.toolbar}>
                {/* compose post modal component */}
                {children}
                <SortMenu />
            </Stack>
            {/* post list */}
            {posts?.map((post) => (
                <PostListItem key={post.postId} post={post}>
                    {currentUser.userId === post.userId ? (
                        <AuthorCardActions post={post} />
                    ) : (
                        <UserCardActions />
                    )}
                </PostListItem>
            ))}
            {/* load more button */}
            <Button sx={styles.loadMoreBtn}>Load More Posts</Button>
        </Stack>
    );
};

const styles = {
    loadMoreBtn: {
        width: 160,
    },
    // TODO - span will be deleted
    span: { 
        color: "error.main",
        fontSize: 12,
    },
    stack: {
        flexGrow: 1,
        alignItems: "center",
        my: 3,
        px: {
            xs: 1,
            sm: 2,
        },
    },
    toolbar: {
        width: "100%",
        display: "flex",
        justifyContent: "between",
    },
};
export default PostListLayout;
