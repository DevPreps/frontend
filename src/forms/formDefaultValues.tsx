import {
    IGeneralFormInputs,
    IInterviewFormInputs,
    IMyProfileFormInputs,
} from "./IFormInputs";

export const generalFormDefaultValues: IGeneralFormInputs = {
    category: "general",
    title: "",
    content: "",
    tags: [],
};

export const composeInterviewFormDefaultValues: IInterviewFormInputs = {
    category: "general",
    title: "",
    companyName: "",
    city: "",
    jobTitle: "",
    position: "",
    content: "",
    tags: [],
};

export const interviewPostDefaultValues: IInterviewFormInputs = {
    category: "interview",
    title: "test title",
    companyName: "test company",
    city: "Brisbane",
    jobTitle: "test job title",
    position: "Front End Developer",
    content: "test content",
    tags: ["frontend", "backend"],
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
