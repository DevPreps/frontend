// interface for form object
export interface IInterviewFormInputs {
    category: string;
    title: string;
    content: string;
    companyName: string;
    city: string;
    jobTitle: string;
    position: string;
    tags: string[];
    options?: string[];
    rows?: number;
}
export interface IGeneralFormInputs {
    category: string;
    title: string;
    content: string;
    tags: string[];
    options?: string[];
    rows?: number;
}

export interface IMyProfileFormInputs {
    firstName?: string;
    lastName?: string;
    username: string;
    email: string;
    jobTitle?: string;
    position?: string;
    city?: string;
    imageUrl?: string;
    linkedIn?: string;
    github?: string;
}
