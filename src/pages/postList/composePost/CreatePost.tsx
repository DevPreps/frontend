import React, { useState } from "react";

import { SubmitHandler } from "react-hook-form";

// import form component, interface, schema and defaultValues
import {
    generalFormDefaultValues,
    interviewFormDefaultValues,
} from "../../../forms/formDefaultValues";
import { CategoryInput } from "../../../forms/FormInput";
import { IFormInputs } from "../../../forms/IFormInputs";
import PostForm from "../../../forms/PostForm";
import {
    generalFormSchema,
    interviewFormSchema,
} from "../../../forms/validationSchemas";
import PostModalLayout from "../postListComponents/PostModalLayout";

const CreatePost = () => {
    // the category of the post
    const [category, setCategory] = useState("interview");
    // handle form submission
    const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
        console.log("data", data);
    };

    return (
        <PostModalLayout operation="COMPOSE">
            <CategoryInput
                category={category}
                helperText="choose a category for your post"
                setCategory={setCategory}
            />
            {/* provide different PostForm props according to the category */}
            {category === "interview" ? (
                <PostForm
                    category={category}
                    formDefaultValues={{
                        category,
                        ...interviewFormDefaultValues,
                    }}
                    onSubmit={onSubmit}
                    validationSchema={interviewFormSchema}
                />
            ) : (
                <PostForm
                    category={category}
                    formDefaultValues={{
                        category,
                        ...generalFormDefaultValues,
                    }}
                    onSubmit={onSubmit}
                    validationSchema={generalFormSchema}
                />
            )}
        </PostModalLayout>
    );
};

export default CreatePost;
