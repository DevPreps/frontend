// TODO - these values can be stored in frontend but should be updated to be the same with database
export const tagOptions = ["frontend", "backend", "fullstack", "database"];
export const categoryOptions = ["learn", "interview", "project", "general"];
export const positionOptions = [
    "Front End Developer",
    "Back End Developer",
    "Full Stack Developer",
    "Software Engineer",
];
export const violationOptions = [
    "advertisement",
    "Harassment or hate speech",
    "Inappropriate listings message/category",
    "Rude or vulgar",
    "Spam or copyright issue",
    "other",
];
// these values are used for development and test
export const buildArray = (length: number, category: string[]) => {
    const arr = new Array(length);
    const randomPosition =
        positionOptions[Math.floor(Math.random() * positionOptions.length)];
    const randomCategory =
        category[Math.floor(Math.random() * category.length)];
    const interviewItems = {
        companyName: "NTT",
        city: "Brisbane",
        jobTitle: randomPosition,
        position: randomPosition,
        jobAdUrl:
            "https://www.seek.com.au/job/58059316?type=standard#sol=c7423890f2350afbfe347e56de445232ab7ebf87",
    };

    return arr.fill(null).map((_, index) => {
        return {
            postId: (index + 1).toString(),
            userId: "11",
            date: "24-07-2022",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit odio culpa dignissimos earum sint.",
            image: "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg",
            imageLabel: "image text",
            title: `Post Title ${index + 1}`,
            category: randomCategory,
            tags: tagOptions.sort(() => 0.5 - Math.random()).slice(0, 2), // generate 2 random tags for each post item
            ...(randomCategory === "interview" && interviewItems), // only contain interviewItems when category === "interview"
        };
    });
};

export const posts = buildArray(10, categoryOptions);
export const savedPosts = buildArray(6, categoryOptions);
export const learnPosts = buildArray(10, ["learn"]);
export const interviewPosts = buildArray(10, ["interview"]);
export const generalPosts = buildArray(10, ["general"]);
export const projectPosts = buildArray(10, ["project"]);
export const myDrafts = buildArray(6, categoryOptions);
export const myPosts = buildArray(6, categoryOptions);
