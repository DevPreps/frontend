import * as yup from "yup";

// TODO - Define Yup validation schema, will be updated later
export const generalFormSchema = yup.object().shape({
    category: yup.string().required(),
    title: yup.string().required(),
    description: yup.string().required(),
    tags: yup.array().min(1).required(),
});

// TODO - Define interview form validation schema, will be updated later
export const interviewFormSchema = yup.object().shape({
    category: yup.string().required(),
    title: yup.string().required(),
    companyName: yup.string().required(),
    city: yup.string().required(),
    jobTitle: yup.string().required(),
    position: yup.string().required(),
    description: yup.string().required(),
    tags: yup.array().min(1).required(),
});
