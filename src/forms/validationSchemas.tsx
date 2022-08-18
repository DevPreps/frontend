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

// Define LoginForm validation schema
export const loginFormSchema = yup.object().shape({
    email: yup.string().email().required(),
    // Minimum six and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character
    password: yup
        .string()
        .matches(
            /^(?=.{6,15})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-@#$%^&+*!=.]).*$/,
            "Minimum six and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        )
        .required(),
});

// TODO - Define ContactForm validation schema, will be updated later
export const contactFormSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
});

// Define register Form validation schema
export const registerFormSchema = yup.object().shape({
    email: yup.string().email().required(),
    username: yup
        .string()
        .matches(
            /^[a-zA-Z0-9]([.-](?![.-])|[a-zA-Z0-9]){4,16}[a-zA-Z0-9]$/,
            "Minimum 4 and maximum 16 characters, only alphanumeric characters, '.', '-' allowed, and must start and end with alphanumeric characters"
        )
        .required(),
    // Minimum six and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character
    password: yup
        .string()
        .matches(
            /^(?=.{6,15})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-@#$%^&+*!=.]).*$/,
            "Minimum 6 and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        )
        .required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required(),
});

// TODO - Define ReportForm validation schema, will be updated later
export const reportFormSchema = yup.object().shape({
    reportedUrl: yup.string().required(),
    message: yup.string().required(),
    violationType: yup.string().required(),
});
