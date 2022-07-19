import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("Test App Entry point", () => {
	it("should be able to render <App />", () => {
		shallow(<App />);
	});
});
