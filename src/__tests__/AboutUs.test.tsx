import React from "react";
import { shallow } from "enzyme";
import AboutUs from "../pages/AboutUs";

describe("Test AboutUs page", () => {
	it("should be able to render <AboutUs />", () => {
		shallow(<AboutUs />);
	});
});
