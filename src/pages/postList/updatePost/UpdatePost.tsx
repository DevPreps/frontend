import React from "react";

import { SubmitHandler } from "react-hook-form";

// import form data, interfaces and schemas
import { CategoryInput } from "../../../forms/FormInput";
import { IFormInputs, IPost } from "../../../forms/IFormInputs";
import PostForm from "../../../forms/PostForm";
import {
    generalFormSchema,
    interviewFormSchema,
} from "../../../forms/validationSchemas";
import PostModalLayout from "../postListComponents/PostModalLayout";

// define interface for props
interface Props {
    post: IPost;
}

const UpdatePost = ({ post }: Props) => {
    // handle form submission
    const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
        console.log("data", data);
    };

    return (
        <PostModalLayout operation="EDIT">
            <CategoryInput
                category={post.category}
                disabled={true}
                helperText="The category cannot be changed"
            />
            {/* update post form */}
            {post.category === "interview" ? (
                <PostForm
                    category={post.category}
                    formDefaultValues={{ ...post }}
                    onSubmit={onSubmit}
                    validationSchema={interviewFormSchema}
                />
            ) : (
                <PostForm
                    category={post.category}
                    formDefaultValues={{ ...post }}
                    onSubmit={onSubmit}
                    validationSchema={generalFormSchema}
                />
            )}
        </PostModalLayout>
    );
};

export default UpdatePost;
