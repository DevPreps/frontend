import React from "react";
import { shallow } from "enzyme";
import Register from "../Register";

describe("Test Register Entry point", function () {
	it("should be able to render <Register />", function () {
		shallow(<Register />);
	});
});
