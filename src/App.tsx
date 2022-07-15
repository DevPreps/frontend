import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="about" element={<AboutUs />} />
					<Route path="myaccount" element={<MyAccount />} />
					<Route path="register" element={<Register />} />
					<Route path="login" element={<Login />} />
					<Route path="posts" element={<PostList />}>
						<Route path="post" element={<Post />} />
					</Route>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
