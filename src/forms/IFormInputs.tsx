// interface for form object
export interface IInterviewFormInputs {
    category: string;
    title: string;
    description: string;
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
    description: string;
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

export interface IFormInputs {
    category: string;
    title: string;
    description: string;
    companyName?: string;
    city?: string;
    jobTitle?: string;
    position?: string;
    tags?: string[];
    options?: string[];
    rows?: number;
    post?: IPost;
}

// TODO - post interface, needs to be updated
export interface IPost {
    postId: string;
    userId: string;
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
    category: string;
    tags: string[];
}
