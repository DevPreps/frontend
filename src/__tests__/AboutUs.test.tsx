import React from "react";
import { shallow } from "enzyme";
import AboutUs from "../pages/AboutUs";

describe("Test AboutUs page", function () {
	it("should be able to render <AboutUs />", function () {
		shallow(<AboutUs />);
	});
});
