import React from "react";
import { SubmitHandler } from "react-hook-form";

// import form data interface and validation schema
import { IGeneralFormInputs } from "../../../forms/IFormInputs";
import { IPost } from "../postListComponents/IPost";
import { generalFormSchema } from "../../../forms/validationSchemas";

// import PostModalLayout and PostForm component
import PostModalLayout from "../postListComponents/PostModalLayout";
import PostForm from "../../../forms/PostForm";

// define interface for props
interface Props {
    post: IPost;
}

const UpdateGeneralPost = ({ post }: Props) => {
    // handle form submission
    const onSubmit: SubmitHandler<IGeneralFormInputs> = (
        data: IGeneralFormInputs
    ) => {
        console.log("data", data);
    };

    return (
        <PostModalLayout operation="EDIT">
            {/* update post form */}
            <PostForm
                formDefaultValues={post}
                onSubmit={onSubmit}
                validationSchema={generalFormSchema}
            />
        </PostModalLayout>
    );
};

export default UpdateGeneralPost;
