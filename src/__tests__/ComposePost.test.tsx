import React from "react";
import { shallow } from "enzyme";
import ComposePost from "../pages/ComposePost";

describe("Test ComposePost page", function () {
	it("should be able to render <ComposePost />", function () {
		shallow(<ComposePost />);
	});
});
