import React from "react";
import { Routes, Route } from "react-router-dom";
import {
	AboutUs,
	Compose,
	Home,
	MyAccount,
	Login,
	NewInterviewPost,
	NewLearnPost,
	NewProjectPost,
	NewGeneralPost,
	NotFound,
	Post,
	PostList,
	Register,
} from "./pages/index";

export default function App() {
	return (
		<>
			<Routes>
				{/* Navbar and Footer Component will be inside Home component */}
				<Route path="/" element={<Home />}>
					<Route path="register" element={<Register />} />
					<Route path="login" element={<Login />} />
					<Route path="about-us" element={<AboutUs />} />
					{/* side bar and personal info will be inside <MyAccount /> */}
					<Route path="my-account" element={<MyAccount />}>
						{/* These 3 post List could be a separate PostList component or use the same PostList component with interview/learn/projects/discussions */}
						<Route path="my-posts" element={<PostList />} />
						<Route path="my-bookmarks" element={<PostList />} />
						<Route path="my-drafts" element={<PostList />} />
					</Route>

					<Route path="posts/:category" element={<PostList />} />
					<Route path="posts/:category/:postid" element={<Post />} />
					{/* the Compose component only contain section title and category options */}
					<Route path="compose" element={<Compose />}>
						<Route path="learn" element={<NewLearnPost />} />
						<Route path="interview" element={<NewInterviewPost />} />
						<Route path="project" element={<NewProjectPost />} />
						<Route path="general" element={<NewGeneralPost />} />
					</Route>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}
