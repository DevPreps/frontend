import React from "react";
import { Routes, Route } from "react-router-dom";
import {
	AboutUs,
	ComposePost,
	Home,
	MyAccount,
	Login,
	NotFound,
	Post,
	PostList,
	Register,
} from "./pages/index";
import { TopNav } from "./components/index";
export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="about" element={<AboutUs />} />
					<Route path="myaccount" element={<MyAccount />}>
						<Route path="saved" element={<PostList option="saved" />} />
						<Route path="my-posts" element={<PostList option="my-posts" />} />
					</Route>
					<Route path="register" element={<Register />} />
					<Route path="login" element={<Login />} />
					<Route path="posts" element={<PostList option="category" />}>
						<Route path="compose" element={<ComposePost />} />
					</Route>
					<Route path="posts/:category/:post-title" element={<Post />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}
