import {
    IContactFormInputs,
    IFormInputs,
    ILoginFormInputs,
    IMyProfileFormInputs,
} from "./IFormInputs";

// TODO- these default values might need to be updated
export const contactFormDefaultValues: IContactFormInputs = {
    name: "",
    email: "",
    subject: "",
    message: "",
};
export const generalFormDefaultValues: IFormInputs = {
    category: "general",
    title: "",
    description: "",
    tags: [],
};

export const interviewFormDefaultValues: IFormInputs = {
    category: "interview",
    title: "",
    companyName: "",
    city: "",
    jobTitle: "",
    position: "Front End Developer",
    description: "",
    tags: [],
};

export const interviewPostDefaultValues: IFormInputs = {
    category: "interview",
    title: "test title",
    companyName: "test company",
    city: "Brisbane",
    jobTitle: "test job title",
    position: "Front End Developer",
    description: "test content",
    tags: ["frontend", "backend"],
};

export const loginFormDefaultValues: ILoginFormInputs = {
    email: "",
    password: "",
};

export const myProfileFormDefaultValues: IMyProfileFormInputs = {
    firstName: "Santa",
    lastName: "Claus",
    username: "Santa",
    email: "santa@gmail.com",
    jobTitle: "Front End Engineer",
    position: "Front End Developer",
    city: "Brisbane",
    imageUrl: "",
    linkedIn: "",
    github: "",
};
