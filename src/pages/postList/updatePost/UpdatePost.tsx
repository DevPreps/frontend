import React from "react";
import { SubmitHandler } from "react-hook-form";

// import form data interface and validation schema
import { IFormInputs, IPost } from "../../../forms/IFormInputs";
import {
    generalFormSchema,
    interviewFormSchema,
} from "../../../forms/validationSchemas";

// import PostModalLayout and PostForm component
import PostModalLayout from "../postListComponents/PostModalLayout";
import PostForm from "../../../forms/PostForm";
import { CategoryInput } from "../../../forms/FormInput";

// define interface for props
interface Props {
    post: IPost;
}

const UpdateGeneralPost = ({ post }: Props) => {
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

export default UpdateGeneralPost;
