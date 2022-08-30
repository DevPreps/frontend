// TODO - post interface, needs to be updated
export interface IPost {
    postId: string;
    userId: string;
    date: string;
    content: string;
    image: string;
    imageLabel: string;
    title: string;
    category: string;
    tags: string[];
    companyName?: string,
    city?: "string",
    jobTitle?: "string",
    position?: "string",
    jobAdUrl?: "string",
}
