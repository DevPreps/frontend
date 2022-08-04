import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Heroes } from "./components/index";
import {
    AboutUs,
    GeneralPostList,
    Home,
    InterviewPostList,
    LearnPostList,
    Login,
    MyAccount,
    MyBookmarks,
    MyDrafts,
    MyPublish,
    NotFound,
    MyProfile,
    ProjectPostList,
    RecommendPostList,
    Post,
    Register,
} from "./pages/index";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Navbar and Footer Component will be inside Home component */}
                <Route path="/" element={<Home />}>
                    {/* This will render the heroes and recommend post list in Home page as the default. And the Heroes will not be rendered in other routes */}
                    <Route
                        index
                        element={
                            <>
                                <Heroes />
                                <RecommendPostList />
                            </>
                        }
                    />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="posts/general" element={<GeneralPostList />} />
                    <Route
                        path="posts/interview"
                        element={<InterviewPostList />}
                    />
                    <Route path="posts/learn" element={<LearnPostList />} />
                    <Route path="posts/project" element={<ProjectPostList />} />
                    <Route path="posts/:category/:postid" element={<Post />} />
                    {/* side bar will be inside <MyAccount /> */}
                    <Route path="my-account/:id" element={<MyAccount />}>
                        <Route index element={<MyProfile />} />
                        {/* These 3 post List could be a separate PostList component or use the same PostList component with interview/learn/projects/discussions */}
                        <Route path="my-posts" element={<MyPublish />} />
                        <Route path="my-bookmarks" element={<MyBookmarks />} />
                        <Route path="my-drafts" element={<MyDrafts />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
