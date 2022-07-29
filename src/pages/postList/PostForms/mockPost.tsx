import { IGeneralFormInputs, IInterviewFormInputs } from "./IFormInputs";

export const generalFormDefaultValues: IGeneralFormInputs = {
    category: "general",
    title: "",
    content: "",
    tags: [],
};

export const interviewFormDefaultValues: IInterviewFormInputs = {
    category: "general",
    title: "",
    companyName: "",
    city: "",
    jobTitle: "",
    position: "",
    content: "",
    tags: [],
};
