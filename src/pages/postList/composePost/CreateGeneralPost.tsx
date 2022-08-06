import React from "react";
import { SubmitHandler } from "react-hook-form";

// import form data interface and validation schema
import { IGeneralFormInputs } from "../../../forms/IFormInputs";
import { generalFormSchema } from "../../../forms/validationSchemas";

// import form component and defaultValues
import PostModalLayout from "../postListComponents/PostModalLayout";
import PostForm from "../../../forms/PostForm";
import { generalFormDefaultValues } from "../../../forms/formDefaultValues";

const CreateGeneralPost = () => {
    // handle form submission
    const onSubmit: SubmitHandler<IGeneralFormInputs> = (
        data: IGeneralFormInputs
    ) => {
        console.log("data", data);
    };

    return (
        <PostModalLayout operation="COMPOSE">
            <PostForm
                formDefaultValues={generalFormDefaultValues}
                onSubmit={onSubmit}
                validationSchema={generalFormSchema}
            />
        </PostModalLayout>
    );
};

export default CreateGeneralPost;
