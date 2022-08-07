import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";

// import form data interface and validation schema
import { IFormInputs } from "../../../forms/IFormInputs";
import { generalFormSchema, interviewFormSchema } from "../../../forms/validationSchemas";

// import form component and defaultValues
import PostModalLayout from "../postListComponents/PostModalLayout";
import PostForm from "../../../forms/PostForm";
import { CategoryInput } from "../../../forms/FormInput";
import { generalFormDefaultValues, interviewFormDefaultValues } from "../../../forms/formDefaultValues";

const CreatePost = () => {
    // the category of the post
    const [category, setCategory] = useState("general");
    // handle form submission
    const onSubmit: SubmitHandler<IFormInputs> = (
        data: IFormInputs
    ) => {
        console.log("data", data);
    };

    return (
        <PostModalLayout operation="COMPOSE">
            <CategoryInput 
            defaultValue={category}
            helperText="choose a category for your post"
            setCategory={setCategory}
            />
            {category==="interview" ?             
            <PostForm
                category={category}
                formDefaultValues={{category, ...interviewFormDefaultValues}}
                onSubmit={onSubmit}
                validationSchema={interviewFormSchema}
            /> :             
            <PostForm
            category={category}
            formDefaultValues={{category, ...generalFormDefaultValues}}
            onSubmit={onSubmit}
            validationSchema={generalFormSchema}
        /> }
        </PostModalLayout>
    );
};

export default CreatePost;
