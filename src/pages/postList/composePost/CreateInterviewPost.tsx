import React from "react";
import { SubmitHandler } from "react-hook-form";

// import form data interface and validation schema
import { IInterviewFormInputs } from "../../../forms/IFormInputs";
import { interviewFormSchema } from "../../../forms/validationSchemas";

// import form component and defaultValues
import PostModalLayout from "../postListComponents/PostModalLayout";
import PostForm from "../../../forms/PostForm";
import { interviewFormDefaultValues } from "../../../forms/formDefaultValues";

const CreateInterviewPost = () => {
    // handle form submission
    const onSubmit: SubmitHandler<IInterviewFormInputs> = (
        data: IInterviewFormInputs
    ) => {
        console.log("data", data);
    };

    return (
        <PostModalLayout operation="COMPOSE">
            <PostForm
                formDefaultValues={interviewFormDefaultValues}
                onSubmit={onSubmit}
                validationSchema={interviewFormSchema}
            />
        </PostModalLayout>
    );
};

export default CreateInterviewPost;
