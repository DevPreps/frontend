import React from "react";
import { shallow } from "enzyme";
import Register from "../pages/Register";

describe("Test Register Page", function () {
	it("should be able to render <Register />", function () {
		shallow(<Register />);
	});
});
