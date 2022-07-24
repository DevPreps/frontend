import React from "react";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

// This is the way to render one's react app when using
// react v17 with react-dom v17 and react-router-dom v6.
// Different version of those 3 packages may require
// alterations to this code to work.

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<App />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
