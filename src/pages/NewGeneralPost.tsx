import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

let schema: [object];

// Import components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const NewGeneralPost = () => {
    // state management
    const [open, setOpen] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
    });

    // open and close function
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // interface for form object
    interface IFormInputs {
        TextField: string;
        Select: string;
    }
    let category: string;
    let tags: object;

    // handle form submission
    const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
    return (
        <div>
            <Button onClick={handleOpen}>create a general post</Button>
            <Modal
                onClose={handleClose}
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    component="form"
                    sx={style}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        SECTION HEADING - create a general post
                    </Typography>
                    <Controller
                        name="TextField"
                        control={control}
                        rules={{}}
                        render={({ field }) => (
                            <FormControl required fullWidth>
                                <InputLabel id="category-label">
                                    Category
                                </InputLabel>
                                <Select
                                    labelId="category-label"
                                    id="category"
                                    label="Category"
                                    {...field}
                                >
                                    <MenuItem value="general">general</MenuItem>
                                    <MenuItem value="interview">
                                        interview
                                    </MenuItem>
                                    <MenuItem value="learn">learn</MenuItem>
                                    <MenuItem value="project">project</MenuItem>
                                </Select>
                                <FormHelperText>
                                    Choose a category for your post
                                </FormHelperText>
                            </FormControl>
                        )}
                    />
                    {/* <FormControl required fullWidth>
                    <TextField
                        id="outlined-basic"
                        label="Title *"
                        variant="outlined"
                        helperText={errors.title ||"post title"}
                        {...register("title", {
                            required: true,
                          })}
                    />
                </FormControl>
                <FormControl required fullWidth>
                    <TextField
                        id="outlined-basic"
                        label="Content *"
                        variant="outlined"
                        helperText={errors.content || "Give some details about your post"}
                        multiline
                        rows={8}
                        {...register("content", {
                            required: true,
                          })}
                    />
                </FormControl>
                <FormControl required fullWidth>
                    <InputLabel id="tags-label">Tags</InputLabel>
                    <Select
                        labelId="tags-label"
                        id="tags"
                        label="tags"
                        {...register("tags", {
                            required: true,
                          })}
                    >
                        <MenuItem value="frontend">frontend</MenuItem>
                        <MenuItem value="backend">backend</MenuItem>
                        <MenuItem value="fullstack">fullstack</MenuItem>
                        <MenuItem value="database">database</MenuItem>
                    </Select>
                    <FormHelperText>{errors.tags || "Choose tags for your post"}</FormHelperText>
                </FormControl> */}
                    <Stack direction="row" spacing={2}>
                        <input type="submit" value="PUBLISH" />
                        <input type="submit" value="SAVE TO DRAFT" />
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
};

const style: object = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default NewGeneralPost;
