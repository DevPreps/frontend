import React from "react";
import { shallow } from "enzyme";
import Login from "../Login";

describe("Test Login Entry point", function () {
	it("should be able to render <Login />", function () {
		shallow(<Login />);
	});
});
