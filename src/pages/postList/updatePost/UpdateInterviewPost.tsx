import React from "react";
import { SubmitHandler } from "react-hook-form";

// import form data interface and validation schema
import { IInterviewFormInputs } from "../../../forms/IFormInputs";
import { IPost } from "../postListComponents/IPost";

import { interviewFormSchema } from "../../../forms/validationSchemas";

// import PostModalLayout and PostForm component
import PostModalLayout from "../postListComponents/PostModalLayout";
import PostForm from "../../../forms/PostForm";

// define interface for props
interface Props {
    post: IPost;
}

const UpdateInterviewPost = ({ post }: Props) => {
    // handle form submission
    const onSubmit: SubmitHandler<IInterviewFormInputs> = (
        data: IInterviewFormInputs
    ) => {
        console.log("data", data);
    };

    return (
        <PostModalLayout operation="EDIT">
            {/* update post form */}
            <PostForm
                formDefaultValues={post}
                onSubmit={onSubmit}
                validationSchema={interviewFormSchema}
            />
        </PostModalLayout>
    );
};

export default UpdateInterviewPost;
