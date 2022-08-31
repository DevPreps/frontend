import React from "react";

import Box from "@mui/material/Box";
import { Controller, useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

const RichTextEditor = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext();
    const modules = {
        toolbar: [
            [{ size: [false, "large"] }],
            ["bold", "italic", "underline"],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [
                { indent: "-1" },
                { indent: "+1" },
                { align: ["", "center", "right", "justify"] },
            ],
            ["link", "image", "video"],
            ["clean"],
        ],
    };

    const formats = [
        "header",
        "size",
        "bold",
        "italic",
        "underline",
        "font",
        "size",
        "color",
        "background",
        "blockquote",
        "code-block",
        "list",
        "bullet",
        "indent",
        "align",
        "link",
        "image",
        "video",
        "clean",
    ];

    return (
        <Controller
            name="content"
            control={control}
            render={({ field }) => (
                <>
                    <ReactQuill
                        {...field}
                        modules={modules}
                        formats={formats}
                        theme="snow"
                        placeholder="Post content"
                    />
                    <Box
                        component="span"
                        sx={
                            errors.content
                                ? styles.errorMessage
                                : styles.helperText
                        }
                    >
                        {errors.content
                            ? errors.content.message
                            : "Please enter the post content"}
                    </Box>
                </>
            )}
        />
    );
};

const styles = {
    errorMessage: {
        color: "error.main",
        fontSize: "12px",
    },
    helperText: {
        color: "text.secondary",
        fontSize: "12px",
    },
} as const;
export default RichTextEditor;
