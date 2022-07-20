import React from "react";
import { Routes, Route } from "react-router-dom";
import {
	AboutUs,
	Home,
	MyAccount,
	Login,
	NotFound,
	Post,
	PostList,
	Register,
} from "./pages/index";

export default function App() {
	return (
		<Routes>
			{/* Navbar and Footer Component will be inside Home component */}
			<Route path="/" element={<Home />}>
				{/* This will give us a component to render the home page content as the default. */}
				<Route index element={<Home />} />
				<Route path="register" element={<Register />} />
				<Route path="login" element={<Login />} />
				<Route path="about-us" element={<AboutUs />} />
				<Route path="posts/:category" element={<PostList />} />
				<Route path="posts/:category/:postid" element={<Post />} />
				{/* side bar and personal info will be inside <MyAccount /> */}
				<Route path="my-account" element={<MyAccount />}>
					{/* These 3 post List could be a separate PostList component or use the same PostList component with interview/learn/projects/discussions */}
					<Route path="my-posts" element={<PostList />} />
					<Route path="my-bookmarks" element={<PostList />} />
					<Route path="my-drafts" element={<PostList />} />
				</Route>
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
