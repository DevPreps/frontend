import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

const RichTextEditor = () => {

    const modules = {
        toolbar: [
            [{ size: [false, "large"] }],
            ["bold", "italic", "underline"],
            ["blockquote", "code-block"],
            [{ list:  "ordered" }, { list:  "bullet" }],
            [{ indent:  "-1" }, { indent:  "+1" }, { align: ["", "center", "right", "justify"] }],
            ["link", "image", "video"],
            ["clean"],
        ],
    }
  
    const formats = [ 
        "header", "size",
        "bold", "italic", "underline",
        "font", "size", 
        "color", "background",
        "blockquote", "code-block",
        "list", "bullet", 
        "indent","align",
        "link", "image", "video",
        "clean"
    ]

    const [, setValue] = useState("");

    return  <ReactQuill
                modules={modules} 
                formats={formats} 
                theme="snow" 
                onChange={setValue} 
                placeholder="Post content" 
            />;

}
export default RichTextEditor;
