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

// TODO - Define MyProfileForm validation schema, will be updated later
export const myProfileFormSchema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string(),
    username: yup.string().required(),
    email: yup.string().required(),
    jobTitle: yup.string(),
    position: yup.string(),
    city: yup.string(),
    linkedIn: yup.string(),
    github: yup.string(),
    imageUrl: yup.string(),
});

// TODO - Define ContactForm validation schema, will be updated later
export const contactFormSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
});
