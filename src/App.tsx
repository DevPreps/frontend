import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Home, NotFound} from "./pages/index";

export default function App() {
	return (
	<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
	</BrowserRouter>
	);
}
