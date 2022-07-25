import React from "react";
import { shallow } from "enzyme";
import AddComment from "../post/AddComment";

describe("Test AddComment Entry point", function () {
	it("should be able to render <AddComment />", function () {
		shallow(<AddComment />);
	});
});
